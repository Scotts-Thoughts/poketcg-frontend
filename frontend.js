const app = Vue.createApp({
    //DATA & DEFINITIONS
    data() {
        return {
            ready  : false,
            mapper : null,
            bench: [0, 1, 2, 3, 4],
            hand: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59],
        
            // Toggles
            toggle_deck_list: true,
            toggle_hand     : false,
            toggle_prize    : false,

            card_data: card_data,
        }
    },

    watch: {
        "mapper.properties.opponent.bench.0.value"(newValue, oldValue) {
            console.log("Opponent Bench 0 changed from", oldValue, "to", newValue);
        },
        "mapper.properties.opponent.bench.1.value"(newValue, oldValue) {
            console.log("Opponent Bench 1 changed from", oldValue, "to", newValue);
        },
        "mapper.properties.opponent.bench.2.value"(newValue, oldValue) {
            console.log("Opponent Bench 2 changed from", oldValue, "to", newValue);
        },
        "mapper.properties.opponent.bench.3.value"(newValue, oldValue) {
            console.log("Opponent Bench 3 changed from", oldValue, "to", newValue);
        },
        "mapper.properties.opponent.bench.4.value"(newValue, oldValue) {
            console.log("Opponent Bench 4 changed from", oldValue, "to", newValue);
        },
        "mapper.properties.opponent.bench.5.value"(newValue, oldValue) {
            console.log("Opponent Bench 5 changed from", oldValue, "to", newValue);
        },
    },

    computed: {
        status_condition_player() {
            const status = this.mapper.properties.player.arena_status.value
            const status_object = {
                sleep: false,
                paralysis: false,
                poison: false,
                confusion: false,
            }
            switch (status) {
                case null: break;
                case 'CONFUSED':          { status_object.confusion = true; break; }
                case 'ASLEEP':            { status_object.sleep = true;     break; }
                case 'PARALYZED':         { status_object.paralysis = true; break; }
                case 'POISONED':          { status_object.poison = true;    break; }
                case 'DOUBLE_POISONED':   { status_object.poison = true;    break; }
                case 'DOUBLE_POISONED_F': { status_object.poison = true;    break; }
                case 'POISONED_F':        { status_object.poison = true;    break; }
                case 'PSN_DBLPSN':        { status_object.poison = true;    break; }
                case 'PSN_DAMAGE':        { status_object.poison = true;    break; }
                case 'DBLPSN_DAMAGE':     { status_object.poison = true;    break; }
                case 'CNF_SLP_PRZ':       { status_object.confusion = true; status_object.sleep = true; status_object.paralysis = true; break; }
            }
            return status_object
        },
        status_condition_opponent() {
            const status = this.mapper.properties.opponent.arena_status.value
            const status_object = {
                sleep: false,
                paralysis: false,
                poison: false,
                confusion: false,
            }
            switch (status) {
                case null: break;
                case 'CONFUSED':          { status_object.confusion = true; break; }
                case 'ASLEEP':            { status_object.sleep = true;     break; }
                case 'PARALYZED':         { status_object.paralysis = true; break; }
                case 'POISONED':          { status_object.poison = true;    break; }
                case 'DOUBLE_POISONED':   { status_object.poison = true;    break; }
                case 'DOUBLE_POISONED_F': { status_object.poison = true;    break; }
                case 'POISONED_F':        { status_object.poison = true;    break; }
                case 'PSN_DBLPSN':        { status_object.poison = true;    break; }
                case 'PSN_DAMAGE':        { status_object.poison = true;    break; }
                case 'DBLPSN_DAMAGE':     { status_object.poison = true;    break; }
                case 'CNF_SLP_PRZ':       { status_object.confusion = true; status_object.sleep = true; status_object.paralysis = true; break; }
            }
            return status_object
        },
        energy_player_arena() { return this.get_energy('player', 'Arena')},
        energy_player_bench() { return [this.get_energy('player', 'Bench_1'), this.get_energy('player', 'Bench_2'), this.get_energy('player', 'Bench_3'), this.get_energy('player', 'Bench_4'), this.get_energy('player', 'Bench_5')]},
        energy_opponent_arena() { return this.get_energy('opponent', 'Arena')},
        energy_opponent_bench() { return [this.get_energy('opponent', 'Bench_1'), this.get_energy('opponent', 'Bench_2'), this.get_energy('opponent', 'Bench_3'), this.get_energy('opponent', 'Bench_4'), this.get_energy('opponent', 'Bench_5')]},
        get_overworld_deck_1() {
            const cardCounts = {};
            const cardProperties = this.mapper.properties.player.deck_1
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
        card_in_arena(user) {
            const array = this.mapper.properties[user].card_locations
            return array.some(entry => entry.value === "Arena");
        },
        calculate_damage_counters(user) {
            const hp = this.mapper.properties[user].hp.ArenaCardHP.value
            const card_data = this.card_data
            const card_name = this.mapper.properties[user].arena_pokemon.value
            if (card_name == undefined) { return }
            const total_hp = card_data[card_name].hp
            const damage = total_hp - hp
            return Math.floor(damage / 10)
        },
        calculate_benched_damage_counters(user, slot) {
            const hp = this.mapper.properties[user].hp[`Bench${slot + 1}CardHP`].value
            if (hp == 0) { return 0 }
            const card_data = this.card_data
            const card_name = this.mapper.properties[user].bench[slot].value
            if (card_name == undefined) { return }
            const total_hp = card_data[card_name].hp
            // console.log(total_hp)
            const damage = total_hp - hp
            return Math.floor(damage / 10)
        },
        get_energy(user, location) {
            const deck = this.mapper.properties[user].deck
            const card_locations = this.mapper.properties[user].card_locations
            const result_array = []
            for (let i = 0; i < card_locations.length; i++) {
                if (card_locations[i].value === location) {
                    if (deck[i].value === 'DOUBLE_COLORLESS_ENERGY') {
                        result_array.push(deck[i].value)
                    }
                    result_array.push(deck[i].value)
                }
            }
            return result_array.filter(item => item.includes('ENERGY'))
        },
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
            // Replace the work Pokemon with PKMN
            card_name = card_name.replace("Pokemon", 'Pkmn')
            card_name = card_name.replace("Computer", 'Comp.')
            card_name = card_name.replace("Professor", 'Prof.')
            card_name = card_name.replace("Imposter", 'Imp.')
            card_name = card_name.replace("Energy", 'E.')
            card_name = card_name.replace("Double", 'Dbl.')
            card_name = card_name.replace("Pluspower", 'PlusPower')
            card_name = card_name.replace("Of", 'of')
            card_name = card_name.replace("Lv", 'L')
            card_name = card_name.replace("Surfing", 'S.')
            card_name = card_name.replace("Alt", '')
            card_name = card_name.replace("Devolution", 'Devo.')
            card_name = card_name.replace("Mysterious", 'Mstry.')
            return card_name
        },
    },

    mounted: async function () {
        const that = this
        this.mapper = new GameHookMapperClient()
        this.mapper.onConnected = (x) => this.ready = true
        this.mapper.onDisconnected = (x) => this.ready = false

        this.mapper.debouncePath('opponent')
        this.mapper.debouncePath('player')
        
        this.mapper._debounceTimeoutMs = 200

        await this.mapper.connect()
    },

}).mount('#app')