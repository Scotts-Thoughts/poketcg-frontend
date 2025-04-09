import cv2
import numpy as np
import os
import argparse

# === Parameters for canonical warp ===
WARP_WIDTH = 720
WARP_HEIGHT = 1024

# === Fixed candidate crop in warped space ===
# (These numbers were tuned to capture roughly all of the art, including extra border.)
ART_X1 = 80            # fixed left bound
ART_X2_CANDIDATE = 656 # initial candidate right bound (may include extra yellow)
ART_Y1 = 120           # top bound
ART_Y2 = 523           # bottom bound

# === Parameters for yellow detection and trimming ===
# HSV bounds for the yellow border (adjust if needed)
LOWER_YELLOW = np.array([15, 80, 80], dtype=np.uint8)
UPPER_YELLOW = np.array([45, 255, 255], dtype=np.uint8)
# We use a moving window to smooth the measurement
WINDOW_SIZE = 5
# For dynamic trimming: if a column (or row) has an average yellow ratio above this value, we consider it "yellow"
YELLOW_RATIO_THRESHOLD = 0.20  # you may adjust this threshold

# Optional: if you need the final output resized to a fixed size (e.g. 470×328)
FINAL_WIDTH = 470
FINAL_HEIGHT = 328

def order_points(pts):
    """
    Order 4 points in the order: top-left, top-right, bottom-right, bottom-left.
    """
    rect = np.zeros((4, 2), dtype="float32")
    s = pts.sum(axis=1)
    rect[0] = pts[np.argmin(s)]   # top-left: smallest sum
    rect[2] = pts[np.argmax(s)]   # bottom-right: largest sum

    diff = np.diff(pts, axis=1)
    rect[1] = pts[np.argmin(diff)]   # top-right: smallest difference
    rect[3] = pts[np.argmax(diff)]   # bottom-left: largest difference
    return rect

def four_point_transform(image, pts):
    """
    Warp the card so that it maps onto a fixed canvas of size WARP_WIDTH×WARP_HEIGHT.
    """
    rect = order_points(pts)
    dst = np.array([
        [0, 0],
        [WARP_WIDTH - 1, 0],
        [WARP_WIDTH - 1, WARP_HEIGHT - 1],
        [0, WARP_HEIGHT - 1]
    ], dtype="float32")
    M = cv2.getPerspectiveTransform(rect, dst)
    warped = cv2.warpPerspective(image, M, (WARP_WIDTH, WARP_HEIGHT))
    return warped

def detect_card_corners(image, debug=False):
    """
    Detect the card by finding the largest contour approximating a 4-corner shape.
    Returns the 4 corner points or None.
    """
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    blurred = cv2.GaussianBlur(gray, (5, 5), 0)
    edged = cv2.Canny(blurred, 50, 150)
    
    if debug:
        cv2.imshow("Canny Edges", edged)
        cv2.waitKey(0)
    
    contours, _ = cv2.findContours(edged, cv2.RETR_LIST, cv2.CHAIN_APPROX_SIMPLE)
    contours = sorted(contours, key=cv2.contourArea, reverse=True)[:10]
    
    for c in contours:
        peri = cv2.arcLength(c, True)
        approx = cv2.approxPolyDP(c, 0.03 * peri, True)
        if len(approx) == 4:
            if debug:
                dbg_img = image.copy()
                cv2.drawContours(dbg_img, [approx], -1, (0, 255, 0), 2)
                cv2.imshow("Detected Card Contour", dbg_img)
                cv2.waitKey(0)
            return approx.reshape(4, 2)
    return None

def trim_yellow_edges(crop, threshold=YELLOW_RATIO_THRESHOLD, window_size=WINDOW_SIZE, debug=False):
    """
    Dynamically trims yellow border pixels from the edges of the candidate crop.
    For each edge (left, right, top, bottom), we scan using a moving window and
    find the first column (or row) where the average yellow ratio falls below the threshold.
    """
    hsv_crop = cv2.cvtColor(crop, cv2.COLOR_BGR2HSV)
    yellow_mask = cv2.inRange(hsv_crop, LOWER_YELLOW, UPPER_YELLOW)
    h, w = yellow_mask.shape
    binary = (yellow_mask == 255).astype(np.float32)
    
    # Find new left boundary: scan columns from left until average yellow is below threshold.
    new_left = 0
    for col in range(0, w - window_size):
        window = binary[:, col:col + window_size]
        avg = np.mean(window)
        if avg < threshold:
            new_left = col
            break
    
    # New right boundary: scan from right edge inward.
    new_right = w
    for col in range(w - window_size, 0, -1):
        window = binary[:, col:col + window_size]
        avg = np.mean(window)
        if avg < threshold:
            new_right = col + window_size  # include the full window
            break
    
    # New top boundary: scan rows from the top.
    new_top = 0
    for row in range(0, h - window_size):
        window = binary[row:row + window_size, :]
        avg = np.mean(window)
        if avg < threshold:
            new_top = row
            break
    
    # New bottom boundary: scan rows from the bottom.
    new_bottom = h
    for row in range(h - window_size, 0, -1):
        window = binary[row:row + window_size, :]
        avg = np.mean(window)
        if avg < threshold:
            new_bottom = row + window_size
            break
    
    if debug:
        print(f"Trim boundaries: left={new_left}, right={new_right}, top={new_top}, bottom={new_bottom}")
        dbg = crop.copy()
        cv2.rectangle(dbg, (new_left, new_top), (new_right, new_bottom), (0,255,0), 2)
        cv2.imshow("Trimmed Candidate", dbg)
        cv2.waitKey(0)
    
    # Ensure boundaries are within the candidate crop dimensions.
    new_left = max(new_left, 0)
    new_top = max(new_top, 0)
    new_right = min(new_right, w)
    new_bottom = min(new_bottom, h)
    
    trimmed = crop[new_top:new_bottom, new_left:new_right]
    return trimmed

def extract_art_region(image, debug=False):
    """
    Process a single card image:
      1. Detect the card corners and warp the card to a canonical 720×1024 image.
      2. Crop a candidate art region using fixed bounds.
      3. Dynamically trim yellow border pixels from all edges of the candidate region.
      4. Optionally resize the final crop.
    Returns the final art crop.
    """
    corners = detect_card_corners(image, debug=debug)
    if corners is not None:
        warped = four_point_transform(image, corners)
    else:
        if debug:
            print("Card corners not detected; using a direct resize.")
        warped = cv2.resize(image, (WARP_WIDTH, WARP_HEIGHT))
    
    # Crop candidate region from warped image using fixed coordinates.
    candidate = warped[ART_Y1:ART_Y2, ART_X1:ART_X2_CANDIDATE].copy()
    
    if debug:
        dbg = warped.copy()
        cv2.rectangle(dbg, (ART_X1, ART_Y1), (ART_X2_CANDIDATE, ART_Y2), (0,255,0), 2)
        cv2.imshow("Warped Card with Candidate Crop", dbg)
        cv2.imshow("Candidate Art Region", candidate)
        cv2.waitKey(0)
    
    # Dynamically trim yellow edges from the candidate region.
    trimmed_crop = trim_yellow_edges(candidate, threshold=YELLOW_RATIO_THRESHOLD, window_size=WINDOW_SIZE, debug=debug)
    
    # Optionally, if you require a fixed final size (e.g. 470×328), uncomment the following:
    # trimmed_crop = cv2.resize(trimmed_crop, (FINAL_WIDTH, FINAL_HEIGHT))
    
    return trimmed_crop

def process_folder(input_folder, output_folder, debug=False):
    """
    Process every image in the input folder:
      - Warps the card,
      - Crops and trims the candidate art region,
      - Saves the final art crop.
    """
    os.makedirs(output_folder, exist_ok=True)
    valid_exts = ('.jpg', '.jpeg', '.png', '.bmp', '.tif', '.tiff')
    
    for filename in os.listdir(input_folder):
        if not filename.lower().endswith(valid_exts):
            continue
        
        filepath = os.path.join(input_folder, filename)
        image = cv2.imread(filepath)
        if image is None:
            print(f"Error loading {filename}")
            continue
        
        art = extract_art_region(image, debug=debug)
        if art is None:
            print(f"Art extraction failed for {filename}")
            continue
        
        outpath = os.path.join(output_folder, f"art_{filename}")
        cv2.imwrite(outpath, art)
        print(f"Processed {filename} -> {outpath}")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Warp card, crop candidate art region, and dynamically trim yellow edges to extract pure art.")
    parser.add_argument("input_folder", help="Folder containing card images")
    parser.add_argument("output_folder", help="Folder to save cropped art images")
    parser.add_argument("--debug", action="store_true", help="Display debug windows and intermediate results")
    args = parser.parse_args()
    
    process_folder(args.input_folder, args.output_folder, debug=args.debug)
