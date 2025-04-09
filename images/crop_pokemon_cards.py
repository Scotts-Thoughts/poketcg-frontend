import os
import argparse
from PIL import Image

def crop_image_relative(image_path, rel_box):
    """
    Opens an image and crops it using relative coordinates.
    
    Parameters:
        image_path (str): Path to the image.
        rel_box (tuple): A tuple (left_frac, upper_frac, right_frac, lower_frac)
                         where each value is between 0 and 1 representing the
                         fraction of the image's dimension.
                         
    Returns:
        Image or None: The cropped image or None if an error occurs.
    """
    try:
        with Image.open(image_path) as im:
            width, height = im.size
            # Convert relative coordinates to pixel values.
            crop_box = (
                int(rel_box[0] * width),
                int(rel_box[1] * height),
                int(rel_box[2] * width),
                int(rel_box[3] * height)
            )
            cropped_img = im.crop(crop_box)
            return cropped_img
    except Exception as e:
        print(f"Error processing '{image_path}': {e}")
        return None

def process_directory(input_dir, output_dir, rel_box):
    """
    Processes every image file in a directory:
      - Opens each image,
      - Crops it using the relative bounding box,
      - Saves the result in the output directory.
    
    Parameters:
        input_dir (str): Directory containing the original images.
        output_dir (str): Directory where cropped images will be saved.
        rel_box (tuple): Relative crop coordinates (left, upper, right, lower).
    """
    os.makedirs(output_dir, exist_ok=True)
    
    for filename in os.listdir(input_dir):
        if filename.lower().endswith(('.jpg', '.jpeg', '.png')):
            image_path = os.path.join(input_dir, filename)
            cropped = crop_image_relative(image_path, rel_box)
            if cropped:
                output_path = os.path.join(output_dir, filename)
                cropped.save(output_path)
                print(f"Saved cropped image: {output_path}")
            else:
                print(f"Skipping image (could not process): {image_path}")

def main():
    parser = argparse.ArgumentParser(
        description="Crop Pokemon card images to the artwork area (without the yellow border) "
                    "using relative coordinates."
    )
    parser.add_argument('input_dir', type=str, help='Path to the directory containing the original images.')
    parser.add_argument('output_dir', type=str, help='Path to the directory to save cropped images.')
    
    # Relative crop coordinates (fractions of the image dimensions).
    # The following defaults are a starting point based on your examples:
    #   - left:  7% of the width in from the left edge
    #   - upper: 10% of the height from the top
    #   - right: 93% of the width (i.e. 7% margin from the right)
    #   - lower: 65% of the height (you can adjust this so that no yellow border appears)
    parser.add_argument('--left', type=float, default=0.07, help='Relative left coordinate (0-1).')
    parser.add_argument('--upper', type=float, default=0.10, help='Relative upper coordinate (0-1).')
    parser.add_argument('--right', type=float, default=0.93, help='Relative right coordinate (0-1).')
    parser.add_argument('--lower', type=float, default=0.65, help='Relative lower coordinate (0-1).')
    
    args = parser.parse_args()
    rel_box = (args.left, args.upper, args.right, args.lower)
    
    process_directory(args.input_dir, args.output_dir, rel_box)

if __name__ == "__main__":
    main()

# Crop Pokemon
# python3 crop_pokemon_cards.py "E:\Dropbox\stp-projects\programs\frontends\poketcg-frontend\images\to process" "E:\Dropbox\stp-projects\programs\frontends\poketcg-frontend\images\processes" --left 0.11 --upper 0.123 --right 0.89 --lower 0.50

# Crop Trainers
# python3 crop_pokemon_cards.py "E:\Dropbox\stp-projects\programs\frontends\poketcg-frontend\images\to process" "E:\Dropbox\stp-projects\programs\frontends\poketcg-frontend\images\processes" --left 0.11 --upper 0.213 --right 0.89 --lower 0.59

# Crop Energy
# python3 crop_pokemon_cards.py "E:\Dropbox\stp-projects\programs\frontends\poketcg-frontend\images\to process" "E:\Dropbox\stp-projects\programs\frontends\poketcg-frontend\images\processes" --left 0.11 --upper 0.493 --right 0.89 --lower 0.87

# Crop Double Energy
# python3 crop_pokemon_cards.py "E:\Dropbox\stp-projects\programs\frontends\poketcg-frontend\images\to process" "E:\Dropbox\stp-projects\programs\frontends\poketcg-frontend\images\processes" --left 0.11 --upper 0.313 --right 0.89 --lower 0.69