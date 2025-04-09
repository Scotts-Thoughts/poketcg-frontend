const app = Vue.createApp({
    //DATA & DEFINITIONS
    data() {
        return {
            ready  : false,
            mapper : null,
            bench: [0, 1, 2, 3, 4, 5],
            hand: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59],
        
            // Toggles
            toggle_deck_list: true,
            toggle_hand     : false,
            toggle_prize    : false,
        }
    },

    computed: {
        get_overworld_deck_1() {
            const cardCounts = {};
            const cardProperties = this.mapper.properties.player.deck_1
            console.log(cardProperties)
            Object.values(cardProperties).forEach(card => {
                // If the card doesn't exist yet in cardCounts, initialize it to 0
                if (!cardCounts[card]) {
                    cardCounts[card] = 0;
                }
                cardCounts[card]++;
            });

            // console.log(cardCounts);

            return cardCounts
        },
        get_player_deck() {
            const cardCounts = {};
            const cardProperties = this.mapper.properties.player.deck
            console.log(cardProperties)
            Object.values(cardProperties).forEach(card => {
                // If the card doesn't exist yet in cardCounts, initialize it to 0
                if (!cardCounts[card]) {
                    cardCounts[card] = 0;
                }
                cardCounts[card]++;
            });

            // console.log(cardCounts);

            return cardCounts
        },
        get_opponent_deck() {
            const cardCounts = {};
            const cardProperties = this.mapper.properties.opponent.deck
            console.log(cardProperties)
            Object.values(cardProperties).forEach(card => {
                // If the card doesn't exist yet in cardCounts, initialize it to 0
                if (!cardCounts[card]) {
                    cardCounts[card] = 0;
                }
                cardCounts[card]++;
            });

            // console.log(cardCounts);

            return cardCounts
        },
    },

    methods: {
        countSetBits(byte) {
            let count = 0;
            while (byte) {
                count += byte & 1; // Check if the least significant bit is set
                byte >>= 1;        // Shift the byte to the right by 1
            }
            return count;
        },
        capitalization_format(str) {
            if (str == null) { return "" }
            return str
                .toLowerCase()
                .replace(/_/g, ' ') // Replace underscores with spaces
                .replace(/(^|\s|\-|\.)(\w)/g, function(match, p1, p2) {
                    return p1 + p2.toUpperCase();
                });
        },
        imposter(card_name) {
            if (card_name == 'Imposter Professor Oak') {
                return 'Imp. Prof. Oak'
            }
            else return card_name
        }
    },

    mounted: async function () {
        const that = this
        this.mapper = new GameHookMapperClient()
        this.mapper.onConnected = (x) => this.ready = true
        this.mapper.onDisconnected = (x) => this.ready = false
        await this.mapper.connect()
    },

}).mount('#app')