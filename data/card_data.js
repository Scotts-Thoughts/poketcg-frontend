const card_data = {
  "BULBASAUR": {
    "type": "TYPE_PKMN_GRASS",
    "gfx": "BulbasaurCardGfx",
    "name": "BulbasaurName",
    "rarity": "CIRCLE",
    "sets": [
      "EVOLUTION",
      "NONE"
    ],
    "id": "BULBASAUR",
    "hp": 40,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "GRASS",
          2
        ],
        "name": "LeechSeedName",
        "description": "BulbasaursLeechSeedDescription",
        "descriptionCont": "NONE",
        "damage": 20,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "BulbasaurLeechSeedEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "HEAL_USER",
          "flags3": "NONE"
        },
        "priority": 1,
        "animation": "ATK_ANIM_DRAIN"
      },
      {
        "energy": [
          0
        ],
        "name": "NONE",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_NONE"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_FIRE",
    "resistance": "NONE",
    "category": "SeedName",
    "pokedexNumber": 1,
    "unknownField1": 0,
    "level": 13,
    "length": [
      2,
      4
    ],
    "weight": 150,
    "description": "BulbasaurDescription",
    "aiInfo": "HAS_EVOLUTION"
  },
  "IVYSAUR": {
    "type": "TYPE_PKMN_GRASS",
    "gfx": "IvysaurCardGfx",
    "name": "IvysaurName",
    "rarity": "DIAMOND",
    "sets": [
      "EVOLUTION",
      "NONE"
    ],
    "id": "IVYSAUR",
    "hp": 60,
    "stage": "STAGE1",
    "preEvoName": "BulbasaurName",
    "attacks": [
      {
        "energy": [
          "GRASS",
          1,
          "COLORLESS",
          2
        ],
        "name": "VineWhipName",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 30,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_WHIP"
      },
      {
        "energy": [
          "GRASS",
          3
        ],
        "name": "PoisonPowderName",
        "description": "InflictPoisonDescription",
        "descriptionCont": "NONE",
        "damage": 20,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "IvysaurPoisonPowderEffectCommands",
        "flags": {
          "flags1": "INFLICT_POISON",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_POWDER_HIT_POISON"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_FIRE",
    "resistance": "NONE",
    "category": "SeedName",
    "pokedexNumber": 2,
    "unknownField1": 0,
    "level": 20,
    "length": [
      3,
      3
    ],
    "weight": 290,
    "description": "IvysaurDescription",
    "aiInfo": "HAS_EVOLUTION"
  },
  "VENUSAUR_LV64": {
    "type": "TYPE_PKMN_GRASS",
    "gfx": "VenusaurLv64CardGfx",
    "name": "VenusaurName",
    "rarity": "STAR",
    "sets": [
      "PROMOTIONAL",
      "GB"
    ],
    "id": "VENUSAUR_LV64",
    "hp": 100,
    "stage": "STAGE2",
    "preEvoName": "IvysaurName",
    "attacks": [
      {
        "energy": [
          0
        ],
        "name": "SolarPowerName",
        "description": "SolarPowerDescription",
        "descriptionCont": "SolarPowerDescriptionCont",
        "damage": 0,
        "category": "POKEMON_POWER",
        "effectCommands": "VenusaurSolarPowerEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_SOLAR_POWER"
      },
      {
        "energy": [
          "GRASS",
          4
        ],
        "name": "MegaDrainName",
        "description": "VenusaursMegaDrainDescription",
        "descriptionCont": "VenusaursMegaDrainDescriptionCont",
        "damage": 40,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "VenusaurMegaDrainEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "HEAL_USER",
          "flags3": "NONE"
        },
        "priority": 2,
        "animation": "ATK_ANIM_DRAIN"
      }
    ],
    "retreatCost": 2,
    "weakness": "WR_FIRE",
    "resistance": "NONE",
    "category": "SeedName",
    "pokedexNumber": 3,
    "unknownField1": 0,
    "level": 64,
    "length": [
      6,
      7
    ],
    "weight": 2210,
    "description": "VenusaurLv64Description",
    "aiInfo": 0
  },
  "VENUSAUR_LV67": {
    "type": "TYPE_PKMN_GRASS",
    "gfx": "VenusaurLv67CardGfx",
    "name": "VenusaurName",
    "rarity": "STAR",
    "sets": [
      "EVOLUTION",
      "NONE"
    ],
    "id": "VENUSAUR_LV67",
    "hp": 100,
    "stage": "STAGE2",
    "preEvoName": "IvysaurName",
    "attacks": [
      {
        "energy": [
          0
        ],
        "name": "EnergyTransName",
        "description": "EnergyTransDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "POKEMON_POWER",
        "effectCommands": "VenusaurEnergyTransEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_PKMN_POWER_1"
      },
      {
        "energy": [
          "GRASS",
          4
        ],
        "name": "SolarBeamName",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 60,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_BEAM"
      }
    ],
    "retreatCost": 2,
    "weakness": "WR_FIRE",
    "resistance": "NONE",
    "category": "SeedName",
    "pokedexNumber": 3,
    "unknownField1": 0,
    "level": 67,
    "length": [
      6,
      7
    ],
    "weight": 2210,
    "description": "VenusaurLv67Description",
    "aiInfo": 0
  },
  "CATERPIE": {
    "type": "TYPE_PKMN_GRASS",
    "gfx": "CaterpieCardGfx",
    "name": "CaterpieName",
    "rarity": "CIRCLE",
    "sets": [
      "EVOLUTION",
      "NONE"
    ],
    "id": "CATERPIE",
    "hp": 40,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "GRASS",
          1
        ],
        "name": "StringShotName",
        "description": "MayInflictParalysisDescription",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "CaterpieStringShotEffectCommands",
        "flags": {
          "flags1": "INFLICT_PARALYSIS",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_STRING_SHOT"
      },
      {
        "energy": [
          0
        ],
        "name": "NONE",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_NONE"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_FIRE",
    "resistance": "NONE",
    "category": "WormName",
    "pokedexNumber": 10,
    "unknownField1": 0,
    "level": 13,
    "length": [
      1,
      0
    ],
    "weight": 60,
    "description": "CaterpieDescription",
    "aiInfo": [
      "AI_INFO_UNK_03",
      "HAS_EVOLUTION"
    ]
  },
  "METAPOD": {
    "type": "TYPE_PKMN_GRASS",
    "gfx": "MetapodCardGfx",
    "name": "MetapodName",
    "rarity": "CIRCLE",
    "sets": [
      "EVOLUTION",
      "NONE"
    ],
    "id": "METAPOD",
    "hp": 70,
    "stage": "STAGE1",
    "preEvoName": "CaterpieName",
    "attacks": [
      {
        "energy": [
          "COLORLESS",
          2
        ],
        "name": "StiffenName",
        "description": "MetapodsStiffenDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "RESIDUAL",
        "effectCommands": "MetapodStiffenEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NULLIFY_OR_WEAKEN_ATTACK",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_NONE"
      },
      {
        "energy": [
          "GRASS",
          2
        ],
        "name": "StunSporeName",
        "description": "MayInflictParalysisDescription",
        "descriptionCont": "NONE",
        "damage": 20,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "MetapodStunSporeEffectCommands",
        "flags": {
          "flags1": "INFLICT_PARALYSIS",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_POWDER_EFFECT_CHANCE"
      }
    ],
    "retreatCost": 2,
    "weakness": "WR_FIRE",
    "resistance": "NONE",
    "category": "CocoonName",
    "pokedexNumber": 11,
    "unknownField1": 0,
    "level": 21,
    "length": [
      2,
      4
    ],
    "weight": 220,
    "description": "MetapodDescription",
    "aiInfo": "HAS_EVOLUTION"
  },
  "BUTTERFREE": {
    "type": "TYPE_PKMN_GRASS",
    "gfx": "ButterfreeCardGfx",
    "name": "ButterfreeName",
    "rarity": "DIAMOND",
    "sets": [
      "EVOLUTION",
      "JUNGLE"
    ],
    "id": "BUTTERFREE",
    "hp": 70,
    "stage": "STAGE2",
    "preEvoName": "MetapodName",
    "attacks": [
      {
        "energy": [
          "COLORLESS",
          2
        ],
        "name": "WhirlwindName",
        "description": "WhirlwindDescription",
        "descriptionCont": "NONE",
        "damage": 20,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "ButterfreeWhirlwindEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "SWITCH_OPPONENT_POKEMON",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_WHIRLWIND"
      },
      {
        "energy": [
          "GRASS",
          4
        ],
        "name": "MegaDrainName",
        "description": "ButterfreesMegaDrainDescription",
        "descriptionCont": "ButterfreesMegaDrainDescriptionCont",
        "damage": 40,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "ButterfreeMegaDrainEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "HEAL_USER",
          "flags3": "NONE"
        },
        "priority": 2,
        "animation": "ATK_ANIM_DRAIN"
      }
    ],
    "retreatCost": 0,
    "weakness": "WR_FIRE",
    "resistance": "WR_FIGHTING",
    "category": "ButterflyName",
    "pokedexNumber": 12,
    "unknownField1": 0,
    "level": 28,
    "length": [
      3,
      7
    ],
    "weight": 710,
    "description": "ButterfreeDescription",
    "aiInfo": 0
  },
  "WEEDLE": {
    "type": "TYPE_PKMN_GRASS",
    "gfx": "WeedleCardGfx",
    "name": "WeedleName",
    "rarity": "CIRCLE",
    "sets": [
      "EVOLUTION",
      "NONE"
    ],
    "id": "WEEDLE",
    "hp": 40,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "GRASS",
          1
        ],
        "name": "PoisonStingName",
        "description": "MayInflictPoisonDescription",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "WeedlePoisonStingEffectCommands",
        "flags": {
          "flags1": "INFLICT_POISON",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_NEEDLES"
      },
      {
        "energy": [
          0
        ],
        "name": "NONE",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_NONE"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_FIRE",
    "resistance": "NONE",
    "category": "HairyBugName",
    "pokedexNumber": 13,
    "unknownField1": 0,
    "level": 12,
    "length": [
      1,
      0
    ],
    "weight": 70,
    "description": "WeedleDescription",
    "aiInfo": [
      "AI_INFO_UNK_03",
      "HAS_EVOLUTION"
    ]
  },
  "KAKUNA": {
    "type": "TYPE_PKMN_GRASS",
    "gfx": "KakunaCardGfx",
    "name": "KakunaName",
    "rarity": "DIAMOND",
    "sets": [
      "EVOLUTION",
      "NONE"
    ],
    "id": "KAKUNA",
    "hp": 80,
    "stage": "STAGE1",
    "preEvoName": "WeedleName",
    "attacks": [
      {
        "energy": [
          "COLORLESS",
          2
        ],
        "name": "StiffenName",
        "description": "KakunasStiffenDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "RESIDUAL",
        "effectCommands": "KakunaStiffenEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NULLIFY_OR_WEAKEN_ATTACK",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_NONE"
      },
      {
        "energy": [
          "GRASS",
          2
        ],
        "name": "PoisonPowderName",
        "description": "MayInflictPoisonDescription",
        "descriptionCont": "NONE",
        "damage": 20,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "KakunaPoisonPowderEffectCommands",
        "flags": {
          "flags1": "INFLICT_POISON",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_POWDER_EFFECT_CHANCE"
      }
    ],
    "retreatCost": 2,
    "weakness": "WR_FIRE",
    "resistance": "NONE",
    "category": "CocoonName",
    "pokedexNumber": 14,
    "unknownField1": 0,
    "level": 23,
    "length": [
      2,
      0
    ],
    "weight": 220,
    "description": "KakunaDescription",
    "aiInfo": "HAS_EVOLUTION"
  },
  "BEEDRILL": {
    "type": "TYPE_PKMN_GRASS",
    "gfx": "BeedrillCardGfx",
    "name": "BeedrillName",
    "rarity": "STAR",
    "sets": [
      "EVOLUTION",
      "NONE"
    ],
    "id": "BEEDRILL",
    "hp": 80,
    "stage": "STAGE2",
    "preEvoName": "KakunaName",
    "attacks": [
      {
        "energy": [
          "COLORLESS",
          3
        ],
        "name": "TwineedleName",
        "description": "DoubleAttackX30Description",
        "descriptionCont": "NONE",
        "damage": 30,
        "category": "DAMAGE_X",
        "effectCommands": "BeedrillTwineedleEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_NEEDLES"
      },
      {
        "energy": [
          "GRASS",
          3
        ],
        "name": "PoisonStingName",
        "description": "MayInflictPoisonDescription",
        "descriptionCont": "NONE",
        "damage": 40,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "BeedrillPoisonStingEffectCommands",
        "flags": {
          "flags1": "INFLICT_POISON",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_NEEDLES"
      }
    ],
    "retreatCost": 0,
    "weakness": "WR_FIRE",
    "resistance": "WR_FIGHTING",
    "category": "PoisonBeeName",
    "pokedexNumber": 15,
    "unknownField1": 0,
    "level": 32,
    "length": [
      3,
      3
    ],
    "weight": 650,
    "description": "BeedrillDescription",
    "aiInfo": 0
  },
  "EKANS": {
    "type": "TYPE_PKMN_GRASS",
    "gfx": "EkansCardGfx",
    "name": "EkansName",
    "rarity": "CIRCLE",
    "sets": [
      "LABORATORY",
      "FOSSIL"
    ],
    "id": "EKANS",
    "hp": 40,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "GRASS",
          1
        ],
        "name": "SpitPoisonName",
        "description": "MayInflictPoisonDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "EkansSpitPoisonEffectCommands",
        "flags": {
          "flags1": "INFLICT_POISON",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_SPIT_POISON"
      },
      {
        "energy": [
          "GRASS",
          1,
          "COLORLESS",
          1
        ],
        "name": "WrapName",
        "description": "MayInflictParalysisDescription",
        "descriptionCont": "NONE",
        "damage": 20,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "EkansWrapEffectCommands",
        "flags": {
          "flags1": "INFLICT_PARALYSIS",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_HIT"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_PSYCHIC",
    "resistance": "NONE",
    "category": "SnakeName",
    "pokedexNumber": 23,
    "unknownField1": 0,
    "level": 10,
    "length": [
      6,
      7
    ],
    "weight": 150,
    "description": "EkansDescription",
    "aiInfo": [
      "AI_INFO_UNK_03",
      "HAS_EVOLUTION"
    ]
  },
  "ARBOK": {
    "type": "TYPE_PKMN_GRASS",
    "gfx": "ArbokCardGfx",
    "name": "ArbokName",
    "rarity": "DIAMOND",
    "sets": [
      "LABORATORY",
      "FOSSIL"
    ],
    "id": "ARBOK",
    "hp": 60,
    "stage": "STAGE1",
    "preEvoName": "EkansName",
    "attacks": [
      {
        "energy": [
          "GRASS",
          1
        ],
        "name": "TerrorStrikeName",
        "description": "TerrorStrikeDescription",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "ArbokTerrorStrikeEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "SWITCH_OPPONENT_POKEMON",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_HIT"
      },
      {
        "energy": [
          "GRASS",
          2,
          "COLORLESS",
          1
        ],
        "name": "PoisonFangName",
        "description": "InflictPoisonDescription",
        "descriptionCont": "NONE",
        "damage": 20,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "ArbokPoisonFangEffectCommands",
        "flags": {
          "flags1": "INFLICT_POISON",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_POISON_FANG"
      }
    ],
    "retreatCost": 2,
    "weakness": "WR_PSYCHIC",
    "resistance": "NONE",
    "category": "CobraName",
    "pokedexNumber": 24,
    "unknownField1": 0,
    "level": 27,
    "length": [
      11,
      6
    ],
    "weight": 1430,
    "description": "ArbokDescription",
    "aiInfo": 0
  },
  "NIDORANF": {
    "type": "TYPE_PKMN_GRASS",
    "gfx": "NidoranFCardGfx",
    "name": "NidoranFName",
    "rarity": "CIRCLE",
    "sets": [
      "MYSTERY",
      "JUNGLE"
    ],
    "id": "NIDORANF",
    "hp": 60,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "GRASS",
          1
        ],
        "name": "FurySwipesName",
        "description": "TripleAttackX10Description",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_X",
        "effectCommands": "NidoranFFurySwipesEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_MULTIPLE_SLASH"
      },
      {
        "energy": [
          "GRASS",
          2
        ],
        "name": "CallForFamilyName",
        "description": "NidoranFsCallForFamilyDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "RESIDUAL",
        "effectCommands": "NidoranFCallForFamilyEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "SPECIAL_AI_HANDLING"
        },
        "priority": 0,
        "animation": "ATK_ANIM_GLOW_EFFECT"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_PSYCHIC",
    "resistance": "NONE",
    "category": "PoisonPinName",
    "pokedexNumber": 29,
    "unknownField1": 0,
    "level": 13,
    "length": [
      1,
      4
    ],
    "weight": 150,
    "description": "NidoranFDescription",
    "aiInfo": [
      "AI_INFO_UNK_03",
      "HAS_EVOLUTION"
    ]
  },
  "NIDORINA": {
    "type": "TYPE_PKMN_GRASS",
    "gfx": "NidorinaCardGfx",
    "name": "NidorinaName",
    "rarity": "DIAMOND",
    "sets": [
      "MYSTERY",
      "JUNGLE"
    ],
    "id": "NIDORINA",
    "hp": 70,
    "stage": "STAGE1",
    "preEvoName": "NidoranFName",
    "attacks": [
      {
        "energy": [
          "GRASS",
          1
        ],
        "name": "SupersonicName",
        "description": "MayInflictConfusionDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NidorinaSupersonicEffectCommands",
        "flags": {
          "flags1": "INFLICT_CONFUSION",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_SUPERSONIC"
      },
      {
        "energy": [
          "GRASS",
          1,
          "COLORLESS",
          2
        ],
        "name": "DoubleKickName",
        "description": "DoubleAttackX30Description",
        "descriptionCont": "NONE",
        "damage": 30,
        "category": "DAMAGE_X",
        "effectCommands": "NidorinaDoubleKickEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_HIT"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_PSYCHIC",
    "resistance": "NONE",
    "category": "PoisonPinName",
    "pokedexNumber": 30,
    "unknownField1": 0,
    "level": 24,
    "length": [
      2,
      7
    ],
    "weight": 440,
    "description": "NidorinaDescription",
    "aiInfo": "HAS_EVOLUTION"
  },
  "NIDOQUEEN": {
    "type": "TYPE_PKMN_GRASS",
    "gfx": "NidoqueenCardGfx",
    "name": "NidoqueenName",
    "rarity": "STAR",
    "sets": [
      "MYSTERY",
      "JUNGLE"
    ],
    "id": "NIDOQUEEN",
    "hp": 90,
    "stage": "STAGE2",
    "preEvoName": "NidorinaName",
    "attacks": [
      {
        "energy": [
          "GRASS",
          1,
          "COLORLESS",
          1
        ],
        "name": "BoyfriendsName",
        "description": "BoyfriendsDescription",
        "descriptionCont": "NONE",
        "damage": 20,
        "category": "DAMAGE_PLUS",
        "effectCommands": "NidoqueenBoyfriendsEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_BOYFRIENDS"
      },
      {
        "energy": [
          "GRASS",
          2,
          "COLORLESS",
          2
        ],
        "name": "MegaPunchName",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 50,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_HIT"
      }
    ],
    "retreatCost": 3,
    "weakness": "WR_PSYCHIC",
    "resistance": "NONE",
    "category": "DrillName",
    "pokedexNumber": 31,
    "unknownField1": 0,
    "level": 43,
    "length": [
      4,
      3
    ],
    "weight": 1320,
    "description": "NidoqueenDescription",
    "aiInfo": 0
  },
  "NIDORANM": {
    "type": "TYPE_PKMN_GRASS",
    "gfx": "NidoranMCardGfx",
    "name": "NidoranMName",
    "rarity": "CIRCLE",
    "sets": [
      "COLOSSEUM",
      "NONE"
    ],
    "id": "NIDORANM",
    "hp": 40,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "GRASS",
          1
        ],
        "name": "HornHazardName",
        "description": "MayDoNothingDescription",
        "descriptionCont": "NONE",
        "damage": 30,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NidoranMHornHazardEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_NONE"
      },
      {
        "energy": [
          0
        ],
        "name": "NONE",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_NONE"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_PSYCHIC",
    "resistance": "NONE",
    "category": "PoisonPinName",
    "pokedexNumber": 32,
    "unknownField1": 0,
    "level": 20,
    "length": [
      1,
      4
    ],
    "weight": 150,
    "description": "NidoranMDescription",
    "aiInfo": [
      "AI_INFO_UNK_03",
      "HAS_EVOLUTION"
    ]
  },
  "NIDORINO": {
    "type": "TYPE_PKMN_GRASS",
    "gfx": "NidorinoCardGfx",
    "name": "NidorinoName",
    "rarity": "DIAMOND",
    "sets": [
      "COLOSSEUM",
      "NONE"
    ],
    "id": "NIDORINO",
    "hp": 60,
    "stage": "STAGE1",
    "preEvoName": "NidoranMName",
    "attacks": [
      {
        "energy": [
          "GRASS",
          1,
          "COLORLESS",
          2
        ],
        "name": "DoubleKickName",
        "description": "DoubleAttackX30Description",
        "descriptionCont": "NONE",
        "damage": 30,
        "category": "DAMAGE_X",
        "effectCommands": "NidorinoDoubleKickEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_HIT"
      },
      {
        "energy": [
          "GRASS",
          2,
          "COLORLESS",
          2
        ],
        "name": "HornDrillName",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 50,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_DRILL"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_PSYCHIC",
    "resistance": "NONE",
    "category": "PoisonPinName",
    "pokedexNumber": 33,
    "unknownField1": 0,
    "level": 25,
    "length": [
      2,
      11
    ],
    "weight": 430,
    "description": "NidorinoDescription",
    "aiInfo": "HAS_EVOLUTION"
  },
  "NIDOKING": {
    "type": "TYPE_PKMN_GRASS",
    "gfx": "NidokingCardGfx",
    "name": "NidokingName",
    "rarity": "STAR",
    "sets": [
      "EVOLUTION",
      "NONE"
    ],
    "id": "NIDOKING",
    "hp": 90,
    "stage": "STAGE2",
    "preEvoName": "NidorinoName",
    "attacks": [
      {
        "energy": [
          "GRASS",
          1,
          "COLORLESS",
          2
        ],
        "name": "ThrashName",
        "description": "ThrashDescription",
        "descriptionCont": "NONE",
        "damage": 30,
        "category": "DAMAGE_PLUS",
        "effectCommands": "NidokingThrashEffectCommands",
        "flags": {
          "flags1": "LOW_RECOIL",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_MULTIPLE_SLASH"
      },
      {
        "energy": [
          "GRASS",
          3
        ],
        "name": "ToxicName",
        "description": "ToxicDescription",
        "descriptionCont": "NONE",
        "damage": 20,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NidokingToxicEffectCommands",
        "flags": {
          "flags1": "INFLICT_POISON",
          "flags2": "FLAG_2_BIT_6",
          "flags3": "NONE"
        },
        "priority": 2,
        "animation": "ATK_ANIM_TOXIC"
      }
    ],
    "retreatCost": 3,
    "weakness": "WR_PSYCHIC",
    "resistance": "NONE",
    "category": "DrillName",
    "pokedexNumber": 34,
    "unknownField1": 0,
    "level": 48,
    "length": [
      4,
      7
    ],
    "weight": 1370,
    "description": "NidokingDescription",
    "aiInfo": 0
  },
  "ZUBAT": {
    "type": "TYPE_PKMN_GRASS",
    "gfx": "ZubatCardGfx",
    "name": "ZubatName",
    "rarity": "CIRCLE",
    "sets": [
      "LABORATORY",
      "FOSSIL"
    ],
    "id": "ZUBAT",
    "hp": 40,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "COLORLESS",
          2
        ],
        "name": "SupersonicName",
        "description": "MayInflictConfusionDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "ZubatSupersonicEffectCommands",
        "flags": {
          "flags1": "INFLICT_CONFUSION",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_SUPERSONIC"
      },
      {
        "energy": [
          "GRASS",
          1,
          "COLORLESS",
          1
        ],
        "name": "LeechLifeName",
        "description": "ZubatsLeechLifeDescription",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "ZubatLeechLifeEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "HEAL_USER",
          "flags3": "NONE"
        },
        "priority": 3,
        "animation": "ATK_ANIM_DRAIN"
      }
    ],
    "retreatCost": 0,
    "weakness": "WR_PSYCHIC",
    "resistance": "WR_FIGHTING",
    "category": "BatName",
    "pokedexNumber": 41,
    "unknownField1": 0,
    "level": 10,
    "length": [
      2,
      7
    ],
    "weight": 170,
    "description": "ZubatDescription",
    "aiInfo": "HAS_EVOLUTION"
  },
  "GOLBAT": {
    "type": "TYPE_PKMN_GRASS",
    "gfx": "GolbatCardGfx",
    "name": "GolbatName",
    "rarity": "DIAMOND",
    "sets": [
      "LABORATORY",
      "FOSSIL"
    ],
    "id": "GOLBAT",
    "hp": 60,
    "stage": "STAGE1",
    "preEvoName": "ZubatName",
    "attacks": [
      {
        "energy": [
          "COLORLESS",
          3
        ],
        "name": "WingAttackName",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 30,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_HIT"
      },
      {
        "energy": [
          "GRASS",
          2,
          "COLORLESS",
          1
        ],
        "name": "LeechLifeName",
        "description": "GolbatsLeechLifeDescription",
        "descriptionCont": "NONE",
        "damage": 20,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "GolbatLeechLifeEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "HEAL_USER",
          "flags3": "NONE"
        },
        "priority": 3,
        "animation": "ATK_ANIM_DRAIN"
      }
    ],
    "retreatCost": 0,
    "weakness": "WR_PSYCHIC",
    "resistance": "WR_FIGHTING",
    "category": "BatName",
    "pokedexNumber": 42,
    "unknownField1": 0,
    "level": 29,
    "length": [
      5,
      3
    ],
    "weight": 1210,
    "description": "GolbatDescription",
    "aiInfo": 0
  },
  "ODDISH": {
    "type": "TYPE_PKMN_GRASS",
    "gfx": "OddishCardGfx",
    "name": "OddishName",
    "rarity": "CIRCLE",
    "sets": [
      "MYSTERY",
      "JUNGLE"
    ],
    "id": "ODDISH",
    "hp": 50,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "GRASS",
          1
        ],
        "name": "StunSporeName",
        "description": "MayInflictParalysisDescription",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "OddishStunSporeEffectCommands",
        "flags": {
          "flags1": "INFLICT_PARALYSIS",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_POWDER_EFFECT_CHANCE"
      },
      {
        "energy": [
          "GRASS",
          2
        ],
        "name": "SproutName",
        "description": "SproutDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "RESIDUAL",
        "effectCommands": "OddishSproutEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "SPECIAL_AI_HANDLING"
        },
        "priority": 0,
        "animation": "ATK_ANIM_GLOW_EFFECT"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_FIRE",
    "resistance": "NONE",
    "category": "WeedName",
    "pokedexNumber": 43,
    "unknownField1": 0,
    "level": 8,
    "length": [
      1,
      8
    ],
    "weight": 120,
    "description": "OddishDescription",
    "aiInfo": "HAS_EVOLUTION"
  },
  "GLOOM": {
    "type": "TYPE_PKMN_GRASS",
    "gfx": "GloomCardGfx",
    "name": "GloomName",
    "rarity": "DIAMOND",
    "sets": [
      "MYSTERY",
      "JUNGLE"
    ],
    "id": "GLOOM",
    "hp": 60,
    "stage": "STAGE1",
    "preEvoName": "OddishName",
    "attacks": [
      {
        "energy": [
          "GRASS",
          1
        ],
        "name": "PoisonPowderName",
        "description": "InflictPoisonDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "GloomPoisonPowderEffectCommands",
        "flags": {
          "flags1": "INFLICT_POISON",
          "flags2": "FLAG_2_BIT_6",
          "flags3": "NONE"
        },
        "priority": 3,
        "animation": "ATK_ANIM_POISON_POWDER"
      },
      {
        "energy": [
          "GRASS",
          2
        ],
        "name": "FoulOdorName",
        "description": "FoulOdorDescription",
        "descriptionCont": "NONE",
        "damage": 20,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "GloomFoulOdorEffectCommands",
        "flags": {
          "flags1": "INFLICT_CONFUSION",
          "flags2": "FLAG_2_BIT_7",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_FOUL_ODOR"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_FIRE",
    "resistance": "NONE",
    "category": "WeedName",
    "pokedexNumber": 44,
    "unknownField1": 0,
    "level": 22,
    "length": [
      2,
      7
    ],
    "weight": 190,
    "description": "GloomDescription",
    "aiInfo": "HAS_EVOLUTION"
  },
  "VILEPLUME": {
    "type": "TYPE_PKMN_GRASS",
    "gfx": "VileplumeCardGfx",
    "name": "VileplumeName",
    "rarity": "STAR",
    "sets": [
      "MYSTERY",
      "JUNGLE"
    ],
    "id": "VILEPLUME",
    "hp": 80,
    "stage": "STAGE2",
    "preEvoName": "GloomName",
    "attacks": [
      {
        "energy": [
          0
        ],
        "name": "HealName",
        "description": "HealDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "POKEMON_POWER",
        "effectCommands": "VileplumeHealEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "HEAL_USER",
          "flags3": "NONE"
        },
        "priority": 1,
        "animation": "ATK_ANIM_PKMN_POWER_1"
      },
      {
        "energy": [
          "GRASS",
          3
        ],
        "name": "PetalDanceName",
        "description": "PetalDanceDescription",
        "descriptionCont": "NONE",
        "damage": 40,
        "category": "DAMAGE_X",
        "effectCommands": "VileplumePetalDanceEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_PETAL_DANCE"
      }
    ],
    "retreatCost": 2,
    "weakness": "WR_FIRE",
    "resistance": "NONE",
    "category": "FlowerName",
    "pokedexNumber": 45,
    "unknownField1": 0,
    "level": 35,
    "length": [
      3,
      11
    ],
    "weight": 410,
    "description": "VileplumeDescription",
    "aiInfo": 0
  },
  "PARAS": {
    "type": "TYPE_PKMN_GRASS",
    "gfx": "ParasCardGfx",
    "name": "ParasName",
    "rarity": "CIRCLE",
    "sets": [
      "MYSTERY",
      "JUNGLE"
    ],
    "id": "PARAS",
    "hp": 40,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "COLORLESS",
          2
        ],
        "name": "ScratchName",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 20,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_SLASH"
      },
      {
        "energy": [
          "GRASS",
          2
        ],
        "name": "SporeName",
        "description": "InflictSleepDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "ParasSporeEffectCommands",
        "flags": {
          "flags1": "INFLICT_SLEEP",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_SPORE"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_FIRE",
    "resistance": "NONE",
    "category": "MushroomName",
    "pokedexNumber": 46,
    "unknownField1": 0,
    "level": 8,
    "length": [
      1,
      0
    ],
    "weight": 120,
    "description": "ParasDescription",
    "aiInfo": "HAS_EVOLUTION"
  },
  "PARASECT": {
    "type": "TYPE_PKMN_GRASS",
    "gfx": "ParasectCardGfx",
    "name": "ParasectName",
    "rarity": "DIAMOND",
    "sets": [
      "MYSTERY",
      "JUNGLE"
    ],
    "id": "PARASECT",
    "hp": 60,
    "stage": "STAGE1",
    "preEvoName": "ParasName",
    "attacks": [
      {
        "energy": [
          "GRASS",
          2
        ],
        "name": "SporeName",
        "description": "InflictSleepDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "ParasectSporeEffectCommands",
        "flags": {
          "flags1": "INFLICT_SLEEP",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_SPORE"
      },
      {
        "energy": [
          "COLORLESS",
          3
        ],
        "name": "SlashName",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 30,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_SLASH"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_FIRE",
    "resistance": "NONE",
    "category": "MushroomName",
    "pokedexNumber": 47,
    "unknownField1": 0,
    "level": 28,
    "length": [
      3,
      3
    ],
    "weight": 650,
    "description": "ParasectDescription",
    "aiInfo": 0
  },
  "VENONAT": {
    "type": "TYPE_PKMN_GRASS",
    "gfx": "VenonatCardGfx",
    "name": "VenonatName",
    "rarity": "CIRCLE",
    "sets": [
      "LABORATORY",
      "JUNGLE"
    ],
    "id": "VENONAT",
    "hp": 40,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "GRASS",
          1
        ],
        "name": "StunSporeName",
        "description": "MayInflictParalysisDescription",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "VenonatStunSporeEffectCommands",
        "flags": {
          "flags1": "INFLICT_PARALYSIS",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_POWDER_EFFECT_CHANCE"
      },
      {
        "energy": [
          "GRASS",
          1,
          "COLORLESS",
          1
        ],
        "name": "LeechLifeName",
        "description": "VenonatLeechLifeDescription",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "VenonatLeechLifeEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "HEAL_USER",
          "flags3": "NONE"
        },
        "priority": 3,
        "animation": "ATK_ANIM_DRAIN"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_FIRE",
    "resistance": "NONE",
    "category": "InsectName",
    "pokedexNumber": 48,
    "unknownField1": 0,
    "level": 12,
    "length": [
      3,
      3
    ],
    "weight": 660,
    "description": "VenonatDescription",
    "aiInfo": [
      "AI_INFO_UNK_03",
      "HAS_EVOLUTION"
    ]
  },
  "VENOMOTH": {
    "type": "TYPE_PKMN_GRASS",
    "gfx": "VenomothCardGfx",
    "name": "VenomothName",
    "rarity": "STAR",
    "sets": [
      "LABORATORY",
      "JUNGLE"
    ],
    "id": "VENOMOTH",
    "hp": 70,
    "stage": "STAGE1",
    "preEvoName": "VenonatName",
    "attacks": [
      {
        "energy": [
          0
        ],
        "name": "ShiftName",
        "description": "ShiftDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "POKEMON_POWER",
        "effectCommands": "VenomothShiftEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_PKMN_POWER_1"
      },
      {
        "energy": [
          "GRASS",
          2
        ],
        "name": "VenomPowderName",
        "description": "VenomPowderDescription",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "VenomothVenomPowderEffectCommands",
        "flags": {
          "flags1": [
            "INFLICT_POISON",
            "INFLICT_CONFUSION"
          ],
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_POWDER_EFFECT_CHANCE"
      }
    ],
    "retreatCost": 0,
    "weakness": "WR_FIRE",
    "resistance": "WR_FIGHTING",
    "category": "PoisonmothName",
    "pokedexNumber": 49,
    "unknownField1": 0,
    "level": 28,
    "length": [
      4,
      11
    ],
    "weight": 280,
    "description": "VenomothDescription",
    "aiInfo": 0
  },
  "BELLSPROUT": {
    "type": "TYPE_PKMN_GRASS",
    "gfx": "BellsproutCardGfx",
    "name": "BellsproutName",
    "rarity": "CIRCLE",
    "sets": [
      "EVOLUTION",
      "JUNGLE"
    ],
    "id": "BELLSPROUT",
    "hp": 40,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "GRASS",
          1
        ],
        "name": "VineWhipName",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_WHIP"
      },
      {
        "energy": [
          "GRASS",
          1
        ],
        "name": "CallForFamilyName",
        "description": "BellsproutsCallForFamilyDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "RESIDUAL",
        "effectCommands": "BellsproutCallForFamilyEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "SPECIAL_AI_HANDLING"
        },
        "priority": 0,
        "animation": "ATK_ANIM_GLOW_EFFECT"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_FIRE",
    "resistance": "NONE",
    "category": "FlowerName",
    "pokedexNumber": 69,
    "unknownField1": 0,
    "level": 11,
    "length": [
      2,
      4
    ],
    "weight": 90,
    "description": "BellsproutDescription",
    "aiInfo": [
      "AI_INFO_UNK_03",
      "HAS_EVOLUTION"
    ]
  },
  "WEEPINBELL": {
    "type": "TYPE_PKMN_GRASS",
    "gfx": "WeepinbellCardGfx",
    "name": "WeepinbellName",
    "rarity": "DIAMOND",
    "sets": [
      "EVOLUTION",
      "JUNGLE"
    ],
    "id": "WEEPINBELL",
    "hp": 70,
    "stage": "STAGE1",
    "preEvoName": "BellsproutName",
    "attacks": [
      {
        "energy": [
          "GRASS",
          1
        ],
        "name": "PoisonPowderName",
        "description": "MayInflictPoisonDescription",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "WeepinbellPoisonPowderEffectCommands",
        "flags": {
          "flags1": "INFLICT_POISON",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_POWDER_EFFECT_CHANCE"
      },
      {
        "energy": [
          "GRASS",
          2
        ],
        "name": "RazorLeafName",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 30,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_WHIP"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_FIRE",
    "resistance": "NONE",
    "category": "FlycatcherName",
    "pokedexNumber": 70,
    "unknownField1": 0,
    "level": 28,
    "length": [
      3,
      3
    ],
    "weight": 140,
    "description": "WeepinbellDescription",
    "aiInfo": "HAS_EVOLUTION"
  },
  "VICTREEBEL": {
    "type": "TYPE_PKMN_GRASS",
    "gfx": "VictreebelCardGfx",
    "name": "VictreebelName",
    "rarity": "STAR",
    "sets": [
      "EVOLUTION",
      "JUNGLE"
    ],
    "id": "VICTREEBEL",
    "hp": 80,
    "stage": "STAGE2",
    "preEvoName": "WeepinbellName",
    "attacks": [
      {
        "energy": [
          "GRASS",
          1
        ],
        "name": "LureName",
        "description": "VictreebelsLureDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "RESIDUAL",
        "effectCommands": "VictreebelLureEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "SWITCH_OPPONENT_POKEMON",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_LURE"
      },
      {
        "energy": [
          "GRASS",
          2
        ],
        "name": "AcidName",
        "description": "VictreebelsAcidDescription",
        "descriptionCont": "NONE",
        "damage": 20,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "VictreebelAcidEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "FLAG_2_BIT_6",
          "flags3": "NONE"
        },
        "priority": 1,
        "animation": "ATK_ANIM_GOO"
      }
    ],
    "retreatCost": 2,
    "weakness": "WR_FIRE",
    "resistance": "NONE",
    "category": "FlycatcherName",
    "pokedexNumber": 71,
    "unknownField1": 0,
    "level": 42,
    "length": [
      5,
      7
    ],
    "weight": 340,
    "description": "VictreebelDescription",
    "aiInfo": 0
  },
  "GRIMER": {
    "type": "TYPE_PKMN_GRASS",
    "gfx": "GrimerCardGfx",
    "name": "GrimerName",
    "rarity": "CIRCLE",
    "sets": [
      "LABORATORY",
      "FOSSIL"
    ],
    "id": "GRIMER",
    "hp": 50,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "COLORLESS",
          1
        ],
        "name": "NastyGooName",
        "description": "MayInflictParalysisDescription",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "GrimerNastyGooEffectCommands",
        "flags": {
          "flags1": "INFLICT_PARALYSIS",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_GOO"
      },
      {
        "energy": [
          "GRASS",
          1
        ],
        "name": "MinimizeName",
        "description": "GrimersMinimizeDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "RESIDUAL",
        "effectCommands": "GrimerMinimizeEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NULLIFY_OR_WEAKEN_ATTACK",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_PROTECT"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_PSYCHIC",
    "resistance": "NONE",
    "category": "SludgeName",
    "pokedexNumber": 88,
    "unknownField1": 0,
    "level": 17,
    "length": [
      2,
      11
    ],
    "weight": 660,
    "description": "GrimerDescription",
    "aiInfo": [
      "AI_INFO_UNK_03",
      "HAS_EVOLUTION"
    ]
  },
  "MUK": {
    "type": "TYPE_PKMN_GRASS",
    "gfx": "MukCardGfx",
    "name": "MukName",
    "rarity": "STAR",
    "sets": [
      "LABORATORY",
      "FOSSIL"
    ],
    "id": "MUK",
    "hp": 70,
    "stage": "STAGE1",
    "preEvoName": "GrimerName",
    "attacks": [
      {
        "energy": [
          0
        ],
        "name": "ToxicGasName",
        "description": "ToxicGasDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "POKEMON_POWER",
        "effectCommands": "MukToxicGasEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_PKMN_POWER_1"
      },
      {
        "energy": [
          "GRASS",
          3
        ],
        "name": "SludgeName",
        "description": "MayInflictPoisonDescription",
        "descriptionCont": "NONE",
        "damage": 30,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "MukSludgeEffectCommands",
        "flags": {
          "flags1": "INFLICT_POISON",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_GOO"
      }
    ],
    "retreatCost": 2,
    "weakness": "WR_PSYCHIC",
    "resistance": "NONE",
    "category": "SludgeName",
    "pokedexNumber": 89,
    "unknownField1": 0,
    "level": 34,
    "length": [
      3,
      11
    ],
    "weight": 660,
    "description": "MukDescription",
    "aiInfo": 0
  },
  "EXEGGCUTE": {
    "type": "TYPE_PKMN_GRASS",
    "gfx": "ExeggcuteCardGfx",
    "name": "ExeggcuteName",
    "rarity": "CIRCLE",
    "sets": [
      "MYSTERY",
      "JUNGLE"
    ],
    "id": "EXEGGCUTE",
    "hp": 50,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "PSYCHIC",
          1
        ],
        "name": "HypnosisName",
        "description": "InflictSleepDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "ExeggcuteHypnosisEffectCommands",
        "flags": {
          "flags1": "INFLICT_SLEEP",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_HYPNOSIS"
      },
      {
        "energy": [
          "GRASS",
          2
        ],
        "name": "LeechSeedName",
        "description": "ExeggcutesLeechSeedDescription",
        "descriptionCont": "NONE",
        "damage": 20,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "ExeggcuteLeechSeedEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "HEAL_USER",
          "flags3": "NONE"
        },
        "priority": 1,
        "animation": "ATK_ANIM_DRAIN"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_FIRE",
    "resistance": "NONE",
    "category": "EggName",
    "pokedexNumber": 102,
    "unknownField1": 0,
    "level": 14,
    "length": [
      1,
      4
    ],
    "weight": 60,
    "description": "ExeggcuteDescription",
    "aiInfo": [
      "AI_INFO_ENCOURAGE_EVO",
      "HAS_EVOLUTION"
    ]
  },
  "EXEGGUTOR": {
    "type": "TYPE_PKMN_GRASS",
    "gfx": "ExeggutorCardGfx",
    "name": "ExeggutorName",
    "rarity": "DIAMOND",
    "sets": [
      "MYSTERY",
      "JUNGLE"
    ],
    "id": "EXEGGUTOR",
    "hp": 80,
    "stage": "STAGE1",
    "preEvoName": "ExeggcuteName",
    "attacks": [
      {
        "energy": [
          "PSYCHIC",
          1
        ],
        "name": "TeleportName",
        "description": "TeleportDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "RESIDUAL",
        "effectCommands": "ExeggutorTeleportEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "SPECIAL_AI_HANDLING"
        },
        "priority": 0,
        "animation": "ATK_ANIM_GLOW_EFFECT"
      },
      {
        "energy": [
          "COLORLESS",
          1
        ],
        "name": "BigEggsplosionName",
        "description": "BigEggsplosionDescription",
        "descriptionCont": "NONE",
        "damage": 20,
        "category": "DAMAGE_X",
        "effectCommands": "ExeggutorBigEggsplosionEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "ATTACHED_ENERGY_BOOST",
          "flags3": "NONE"
        },
        "priority": "MAX_ENERGY_BOOST_IS_NOT_LIMITED",
        "animation": "ATK_ANIM_BIG_HIT"
      }
    ],
    "retreatCost": 3,
    "weakness": "WR_FIRE",
    "resistance": "NONE",
    "category": "CoconutName",
    "pokedexNumber": 103,
    "unknownField1": 0,
    "level": 35,
    "length": [
      6,
      7
    ],
    "weight": 2650,
    "description": "ExeggutorDescription",
    "aiInfo": 0
  },
  "KOFFING": {
    "type": "TYPE_PKMN_GRASS",
    "gfx": "KoffingCardGfx",
    "name": "KoffingName",
    "rarity": "CIRCLE",
    "sets": [
      "LABORATORY",
      "NONE"
    ],
    "id": "KOFFING",
    "hp": 50,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "GRASS",
          2
        ],
        "name": "FoulGasName",
        "description": "FoulGasDescription",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "KoffingFoulGasEffectCommands",
        "flags": {
          "flags1": [
            "INFLICT_POISON",
            "INFLICT_CONFUSION"
          ],
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_FOUL_GAS"
      },
      {
        "energy": [
          0
        ],
        "name": "NONE",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_NONE"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_PSYCHIC",
    "resistance": "NONE",
    "category": "PoisonGasName",
    "pokedexNumber": 109,
    "unknownField1": 0,
    "level": 13,
    "length": [
      2,
      0
    ],
    "weight": 20,
    "description": "KoffingDescription",
    "aiInfo": "HAS_EVOLUTION"
  },
  "WEEZING": {
    "type": "TYPE_PKMN_GRASS",
    "gfx": "WeezingCardGfx",
    "name": "WeezingName",
    "rarity": "DIAMOND",
    "sets": [
      "LABORATORY",
      "FOSSIL"
    ],
    "id": "WEEZING",
    "hp": 60,
    "stage": "STAGE1",
    "preEvoName": "KoffingName",
    "attacks": [
      {
        "energy": [
          "GRASS",
          2
        ],
        "name": "SmogName",
        "description": "MayInflictPoisonDescription",
        "descriptionCont": "NONE",
        "damage": 20,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "WeezingSmogEffectCommands",
        "flags": {
          "flags1": "INFLICT_POISON",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_SMOG"
      },
      {
        "energy": [
          "GRASS",
          2,
          "COLORLESS",
          1
        ],
        "name": "SelfdestructName",
        "description": "WeezingsSelfdestructDescription",
        "descriptionCont": "NONE",
        "damage": 60,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "WeezingSelfdestructEffectCommands",
        "flags": {
          "flags1": "HIGH_RECOIL",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 60,
        "animation": "ATK_ANIM_SELFDESTRUCT"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_PSYCHIC",
    "resistance": "NONE",
    "category": "PoisonGasName",
    "pokedexNumber": 110,
    "unknownField1": 0,
    "level": 27,
    "length": [
      3,
      11
    ],
    "weight": 210,
    "description": "WeezingDescription",
    "aiInfo": 0
  },
  "TANGELA_LV8": {
    "type": "TYPE_PKMN_GRASS",
    "gfx": "TangelaLv8CardGfx",
    "name": "TangelaName",
    "rarity": "CIRCLE",
    "sets": [
      "LABORATORY",
      "NONE"
    ],
    "id": "TANGELA_LV8",
    "hp": 50,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "GRASS",
          1,
          "COLORLESS",
          1
        ],
        "name": "BindName",
        "description": "MayInflictParalysisDescription",
        "descriptionCont": "NONE",
        "damage": 20,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "TangelaBindEffectCommands",
        "flags": {
          "flags1": "INFLICT_PARALYSIS",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_HIT"
      },
      {
        "energy": [
          "GRASS",
          3
        ],
        "name": "PoisonPowderName",
        "description": "InflictPoisonDescription",
        "descriptionCont": "NONE",
        "damage": 20,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "TangelaPoisonPowderEffectCommands",
        "flags": {
          "flags1": "INFLICT_POISON",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_POWDER_HIT_POISON"
      }
    ],
    "retreatCost": 2,
    "weakness": "WR_FIRE",
    "resistance": "NONE",
    "category": "VineName",
    "pokedexNumber": 114,
    "unknownField1": 0,
    "level": 8,
    "length": [
      3,
      3
    ],
    "weight": 770,
    "description": "TangelaLv8Description",
    "aiInfo": 0
  },
  "TANGELA_LV12": {
    "type": "TYPE_PKMN_GRASS",
    "gfx": "TangelaLv12CardGfx",
    "name": "TangelaName",
    "rarity": "CIRCLE",
    "sets": [
      "COLOSSEUM",
      "GB"
    ],
    "id": "TANGELA_LV12",
    "hp": 50,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "GRASS",
          1
        ],
        "name": "StunSporeName",
        "description": "MayInflictParalysisDescription",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "TangelaStunSporeEffectCommands",
        "flags": {
          "flags1": "INFLICT_PARALYSIS",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_POWDER_EFFECT_CHANCE"
      },
      {
        "energy": [
          "GRASS",
          2,
          "COLORLESS",
          1
        ],
        "name": "PoisonWhipName",
        "description": "InflictPoisonDescription",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "TangelaPoisonWhipEffectCommands",
        "flags": {
          "flags1": "INFLICT_POISON",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_POISON_WHIP"
      }
    ],
    "retreatCost": 2,
    "weakness": "WR_FIRE",
    "resistance": "NONE",
    "category": "VineName",
    "pokedexNumber": 114,
    "unknownField1": 0,
    "level": 12,
    "length": [
      3,
      3
    ],
    "weight": 770,
    "description": "TangelaLv12Description",
    "aiInfo": 0
  },
  "SCYTHER": {
    "type": "TYPE_PKMN_GRASS",
    "gfx": "ScytherCardGfx",
    "name": "ScytherName",
    "rarity": "STAR",
    "sets": [
      "COLOSSEUM",
      "JUNGLE"
    ],
    "id": "SCYTHER",
    "hp": 70,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "GRASS",
          1
        ],
        "name": "SwordsDanceName",
        "description": "SwordsDanceDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "RESIDUAL",
        "effectCommands": "ScytherSwordsDanceEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "SPECIAL_AI_HANDLING"
        },
        "priority": 0,
        "animation": "ATK_ANIM_GLOW_EFFECT"
      },
      {
        "energy": [
          "COLORLESS",
          3
        ],
        "name": "SlashName",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 30,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_SLASH"
      }
    ],
    "retreatCost": 0,
    "weakness": "WR_FIRE",
    "resistance": "WR_FIGHTING",
    "category": "MantisName",
    "pokedexNumber": 123,
    "unknownField1": 0,
    "level": 25,
    "length": [
      4,
      11
    ],
    "weight": 1230,
    "description": "ScytherDescription",
    "aiInfo": 0
  },
  "PINSIR": {
    "type": "TYPE_PKMN_GRASS",
    "gfx": "PinsirCardGfx",
    "name": "PinsirName",
    "rarity": "STAR",
    "sets": [
      "COLOSSEUM",
      "JUNGLE"
    ],
    "id": "PINSIR",
    "hp": 60,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "GRASS",
          2
        ],
        "name": "IronGripName",
        "description": "MayInflictParalysisDescription",
        "descriptionCont": "NONE",
        "damage": 20,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "PinsirIronGripEffectCommands",
        "flags": {
          "flags1": "INFLICT_PARALYSIS",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_HIT_EFFECT"
      },
      {
        "energy": [
          "GRASS",
          2,
          "COLORLESS",
          2
        ],
        "name": "GuillotineName",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 50,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_SONICBOOM"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_FIRE",
    "resistance": "NONE",
    "category": "StagbeetleName",
    "pokedexNumber": 127,
    "unknownField1": 0,
    "level": 24,
    "length": [
      4,
      11
    ],
    "weight": 1210,
    "description": "PinsirDescription",
    "aiInfo": 0
  },
  "CHARMANDER": {
    "type": "TYPE_PKMN_FIRE",
    "gfx": "CharmanderCardGfx",
    "name": "CharmanderName",
    "rarity": "CIRCLE",
    "sets": [
      "COLOSSEUM",
      "NONE"
    ],
    "id": "CHARMANDER",
    "hp": 50,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "COLORLESS",
          1
        ],
        "name": "ScratchName",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_SLASH"
      },
      {
        "energy": [
          "FIRE",
          1,
          "COLORLESS",
          1
        ],
        "name": "EmberName",
        "description": "EmberDescription",
        "descriptionCont": "NONE",
        "damage": 30,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "CharmanderEmberEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "DISCARD_ENERGY",
          "flags3": "NONE"
        },
        "priority": 3,
        "animation": "ATK_ANIM_SMALL_FLAME"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_WATER",
    "resistance": "NONE",
    "category": "LizardName",
    "pokedexNumber": 4,
    "unknownField1": 0,
    "level": 10,
    "length": [
      2,
      0
    ],
    "weight": 190,
    "description": "CharmanderDescription",
    "aiInfo": [
      "AI_INFO_UNK_05",
      "HAS_EVOLUTION"
    ]
  },
  "CHARMELEON": {
    "type": "TYPE_PKMN_FIRE",
    "gfx": "CharmeleonCardGfx",
    "name": "CharmeleonName",
    "rarity": "DIAMOND",
    "sets": [
      "COLOSSEUM",
      "NONE"
    ],
    "id": "CHARMELEON",
    "hp": 80,
    "stage": "STAGE1",
    "preEvoName": "CharmanderName",
    "attacks": [
      {
        "energy": [
          "COLORLESS",
          3
        ],
        "name": "SlashName",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 30,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_SLASH"
      },
      {
        "energy": [
          "FIRE",
          2,
          "COLORLESS",
          1
        ],
        "name": "FlamethrowerName",
        "description": "CharmeleonsFlamethrowerDescription",
        "descriptionCont": "NONE",
        "damage": 50,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "CharmeleonFlamethrowerEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "DISCARD_ENERGY",
          "flags3": "NONE"
        },
        "priority": 3,
        "animation": "ATK_ANIM_BIG_FLAME"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_WATER",
    "resistance": "NONE",
    "category": "FlameName",
    "pokedexNumber": 5,
    "unknownField1": 0,
    "level": 32,
    "length": [
      3,
      7
    ],
    "weight": 420,
    "description": "CharmeleonDescription",
    "aiInfo": [
      "AI_INFO_ENCOURAGE_EVO",
      "HAS_EVOLUTION"
    ]
  },
  "CHARIZARD": {
    "type": "TYPE_PKMN_FIRE",
    "gfx": "CharizardCardGfx",
    "name": "CharizardName",
    "rarity": "STAR",
    "sets": [
      "EVOLUTION",
      "NONE"
    ],
    "id": "CHARIZARD",
    "hp": 120,
    "stage": "STAGE2",
    "preEvoName": "CharmeleonName",
    "attacks": [
      {
        "energy": [
          0
        ],
        "name": "EnergyBurnName",
        "description": "EnergyBurnDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "POKEMON_POWER",
        "effectCommands": "CharizardEnergyBurnEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_PKMN_POWER_1"
      },
      {
        "energy": [
          "FIRE",
          4
        ],
        "name": "FireSpinName",
        "description": "FireSpinDescription",
        "descriptionCont": "NONE",
        "damage": 100,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "CharizardFireSpinEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "DISCARD_ENERGY",
          "flags3": "NONE"
        },
        "priority": 6,
        "animation": "ATK_ANIM_FIRE_SPIN"
      }
    ],
    "retreatCost": 3,
    "weakness": "WR_WATER",
    "resistance": "WR_FIGHTING",
    "category": "FlameName",
    "pokedexNumber": 6,
    "unknownField1": 0,
    "level": 76,
    "length": [
      5,
      7
    ],
    "weight": 2000,
    "description": "CharizardDescription",
    "aiInfo": 0
  },
  "VULPIX": {
    "type": "TYPE_PKMN_FIRE",
    "gfx": "VulpixCardGfx",
    "name": "VulpixName",
    "rarity": "CIRCLE",
    "sets": [
      "MYSTERY",
      "NONE"
    ],
    "id": "VULPIX",
    "hp": 50,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "FIRE",
          2
        ],
        "name": "ConfuseRayName",
        "description": "MayInflictConfusionDescription",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "VulpixConfuseRayEffectCommands",
        "flags": {
          "flags1": "INFLICT_CONFUSION",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_CONFUSE_RAY"
      },
      {
        "energy": [
          0
        ],
        "name": "NONE",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_NONE"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_WATER",
    "resistance": "NONE",
    "category": "FoxName",
    "pokedexNumber": 37,
    "unknownField1": 0,
    "level": 11,
    "length": [
      2,
      0
    ],
    "weight": 220,
    "description": "VulpixDescription",
    "aiInfo": [
      "AI_INFO_ENCOURAGE_EVO",
      "HAS_EVOLUTION"
    ]
  },
  "NINETALES_LV32": {
    "type": "TYPE_PKMN_FIRE",
    "gfx": "NinetalesLv32CardGfx",
    "name": "NinetalesName",
    "rarity": "STAR",
    "sets": [
      "MYSTERY",
      "NONE"
    ],
    "id": "NINETALES_LV32",
    "hp": 80,
    "stage": "STAGE1",
    "preEvoName": "VulpixName",
    "attacks": [
      {
        "energy": [
          "COLORLESS",
          2
        ],
        "name": "LureName",
        "description": "NinetalesLureDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "RESIDUAL",
        "effectCommands": "NinetalesLureEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "SWITCH_OPPONENT_POKEMON",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_LURE"
      },
      {
        "energy": [
          "FIRE",
          4
        ],
        "name": "FireBlastName",
        "description": "FireBlastDescription",
        "descriptionCont": "NONE",
        "damage": 80,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NinetalesFireBlastEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "DISCARD_ENERGY",
          "flags3": "NONE"
        },
        "priority": 3,
        "animation": "ATK_ANIM_FIRE_SPIN"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_WATER",
    "resistance": "NONE",
    "category": "FoxName",
    "pokedexNumber": 38,
    "unknownField1": 0,
    "level": 32,
    "length": [
      3,
      7
    ],
    "weight": 440,
    "description": "NinetalesLv32Description",
    "aiInfo": 0
  },
  "NINETALES_LV35": {
    "type": "TYPE_PKMN_FIRE",
    "gfx": "NinetalesLv35CardGfx",
    "name": "NinetalesName",
    "rarity": "STAR",
    "sets": [
      "LABORATORY",
      "GB"
    ],
    "id": "NINETALES_LV35",
    "hp": 80,
    "stage": "STAGE1",
    "preEvoName": "VulpixName",
    "attacks": [
      {
        "energy": [
          "FIRE",
          2
        ],
        "name": "MixUpName",
        "description": "MixUpDescription",
        "descriptionCont": "MixUpDescriptionCont",
        "damage": 0,
        "category": "RESIDUAL",
        "effectCommands": "NinetalesMixUpEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "SPECIAL_AI_HANDLING"
        },
        "priority": 0,
        "animation": "ATK_ANIM_GLOW_EFFECT"
      },
      {
        "energy": [
          "FIRE",
          3
        ],
        "name": "DancingEmbersName",
        "description": "DancingEmbersDescription",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_X",
        "effectCommands": "NinetalesDancingEmbersEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_FIRE_SPIN"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_WATER",
    "resistance": "NONE",
    "category": "FoxName",
    "pokedexNumber": 38,
    "unknownField1": 0,
    "level": 35,
    "length": [
      3,
      7
    ],
    "weight": 440,
    "description": "NinetalesLv35Description",
    "aiInfo": 0
  },
  "GROWLITHE": {
    "type": "TYPE_PKMN_FIRE",
    "gfx": "GrowlitheCardGfx",
    "name": "GrowlitheName",
    "rarity": "DIAMOND",
    "sets": [
      "COLOSSEUM",
      "NONE"
    ],
    "id": "GROWLITHE",
    "hp": 60,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "FIRE",
          1,
          "COLORLESS",
          1
        ],
        "name": "FlareName",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 20,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_SMALL_FLAME"
      },
      {
        "energy": [
          0
        ],
        "name": "NONE",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_NONE"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_WATER",
    "resistance": "NONE",
    "category": "PuppyName",
    "pokedexNumber": 58,
    "unknownField1": 0,
    "level": 18,
    "length": [
      2,
      4
    ],
    "weight": 420,
    "description": "GrowlitheDescription",
    "aiInfo": "HAS_EVOLUTION"
  },
  "ARCANINE_LV34": {
    "type": "TYPE_PKMN_FIRE",
    "gfx": "ArcanineLv34CardGfx",
    "name": "ArcanineName",
    "rarity": "PROMOSTAR",
    "sets": [
      "PROMOTIONAL",
      "PRO"
    ],
    "id": "ARCANINE_LV34",
    "hp": 70,
    "stage": "STAGE1",
    "preEvoName": "GrowlitheName",
    "attacks": [
      {
        "energy": [
          "COLORLESS",
          2
        ],
        "name": "QuickAttackName",
        "description": "QuickAttackDescription",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_PLUS",
        "effectCommands": "ArcanineQuickAttackEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_QUICK_ATTACK"
      },
      {
        "energy": [
          "FIRE",
          2
        ],
        "name": "FlamesOfRageName",
        "description": "FlamesOfRageDescription",
        "descriptionCont": "NONE",
        "damage": 40,
        "category": "DAMAGE_PLUS",
        "effectCommands": "ArcanineFlamesOfRageEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "DISCARD_ENERGY",
          "flags3": "BOOST_IF_TAKEN_DAMAGE"
        },
        "priority": 6,
        "animation": "ATK_ANIM_FIRE_SPIN"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_WATER",
    "resistance": "NONE",
    "category": "LegendaryName",
    "pokedexNumber": 59,
    "unknownField1": 0,
    "level": 34,
    "length": [
      6,
      3
    ],
    "weight": 3420,
    "description": "ArcanineLv34Description",
    "aiInfo": 0
  },
  "ARCANINE_LV45": {
    "type": "TYPE_PKMN_FIRE",
    "gfx": "ArcanineLv45CardGfx",
    "name": "ArcanineName",
    "rarity": "DIAMOND",
    "sets": [
      "COLOSSEUM",
      "NONE"
    ],
    "id": "ARCANINE_LV45",
    "hp": 100,
    "stage": "STAGE1",
    "preEvoName": "GrowlitheName",
    "attacks": [
      {
        "energy": [
          "FIRE",
          2,
          "COLORLESS",
          1
        ],
        "name": "FlamethrowerName",
        "description": "ArcaninesFlamethrowerDescription",
        "descriptionCont": "NONE",
        "damage": 50,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "ArcanineFlamethrowerEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "DISCARD_ENERGY",
          "flags3": "NONE"
        },
        "priority": 3,
        "animation": "ATK_ANIM_BIG_FLAME"
      },
      {
        "energy": [
          "FIRE",
          2,
          "COLORLESS",
          2
        ],
        "name": "TakeDownName",
        "description": "TakeDownDescription",
        "descriptionCont": "NONE",
        "damage": 80,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "ArcanineTakeDownEffectCommands",
        "flags": {
          "flags1": "LOW_RECOIL",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 30,
        "animation": "ATK_ANIM_HIT_RECOIL"
      }
    ],
    "retreatCost": 3,
    "weakness": "WR_WATER",
    "resistance": "NONE",
    "category": "LegendaryName",
    "pokedexNumber": 59,
    "unknownField1": 0,
    "level": 45,
    "length": [
      6,
      3
    ],
    "weight": 3420,
    "description": "ArcanineLv45Description",
    "aiInfo": 0
  },
  "PONYTA": {
    "type": "TYPE_PKMN_FIRE",
    "gfx": "PonytaCardGfx",
    "name": "PonytaName",
    "rarity": "CIRCLE",
    "sets": [
      "COLOSSEUM",
      "NONE"
    ],
    "id": "PONYTA",
    "hp": 40,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "COLORLESS",
          2
        ],
        "name": "SmashKickName",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 20,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_HIT"
      },
      {
        "energy": [
          "FIRE",
          2
        ],
        "name": "FlameTailName",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 30,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_BIG_FLAME"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_WATER",
    "resistance": "NONE",
    "category": "FireHorseName",
    "pokedexNumber": 77,
    "unknownField1": 0,
    "level": 10,
    "length": [
      3,
      3
    ],
    "weight": 660,
    "description": "PonytaDescription",
    "aiInfo": "HAS_EVOLUTION"
  },
  "RAPIDASH": {
    "type": "TYPE_PKMN_FIRE",
    "gfx": "RapidashCardGfx",
    "name": "RapidashName",
    "rarity": "DIAMOND",
    "sets": [
      "EVOLUTION",
      "JUNGLE"
    ],
    "id": "RAPIDASH",
    "hp": 70,
    "stage": "STAGE1",
    "preEvoName": "PonytaName",
    "attacks": [
      {
        "energy": [
          "COLORLESS",
          2
        ],
        "name": "StompName",
        "description": "StompDescription",
        "descriptionCont": "NONE",
        "damage": 20,
        "category": "DAMAGE_PLUS",
        "effectCommands": "RapidashStompEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_HIT"
      },
      {
        "energy": [
          "FIRE",
          2,
          "COLORLESS",
          1
        ],
        "name": "AgilityName",
        "description": "RapidashsAgilityDescription",
        "descriptionCont": "NONE",
        "damage": 30,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "RapidashAgilityEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": [
            "NULLIFY_OR_WEAKEN_ATTACK",
            "FLAG_2_BIT_6"
          ],
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_QUICK_ATTACK"
      }
    ],
    "retreatCost": 0,
    "weakness": "WR_WATER",
    "resistance": "NONE",
    "category": "FireHorseName",
    "pokedexNumber": 78,
    "unknownField1": 0,
    "level": 33,
    "length": [
      5,
      7
    ],
    "weight": 2090,
    "description": "RapidashDescription",
    "aiInfo": 0
  },
  "MAGMAR_LV24": {
    "type": "TYPE_PKMN_FIRE",
    "gfx": "MagmarLv24CardGfx",
    "name": "MagmarName",
    "rarity": "DIAMOND",
    "sets": [
      "COLOSSEUM",
      "NONE"
    ],
    "id": "MAGMAR_LV24",
    "hp": 50,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "FIRE",
          2
        ],
        "name": "FirePunchName",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 30,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_FIRE_PUNCH"
      },
      {
        "energy": [
          "FIRE",
          2,
          "COLORLESS",
          1
        ],
        "name": "FlamethrowerName",
        "description": "FirePunchDescription",
        "descriptionCont": "NONE",
        "damage": 50,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "MagmarFlamethrowerEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "DISCARD_ENERGY",
          "flags3": "NONE"
        },
        "priority": 3,
        "animation": "ATK_ANIM_BIG_FLAME"
      }
    ],
    "retreatCost": 2,
    "weakness": "WR_WATER",
    "resistance": "NONE",
    "category": "SpitfireName",
    "pokedexNumber": 126,
    "unknownField1": 0,
    "level": 24,
    "length": [
      4,
      3
    ],
    "weight": 980,
    "description": "MagmarLv24Description",
    "aiInfo": 0
  },
  "MAGMAR_LV31": {
    "type": "TYPE_PKMN_FIRE",
    "gfx": "MagmarLv31CardGfx",
    "name": "MagmarName",
    "rarity": "DIAMOND",
    "sets": [
      "LABORATORY",
      "FOSSIL"
    ],
    "id": "MAGMAR_LV31",
    "hp": 70,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "FIRE",
          1
        ],
        "name": "SmokescreenName",
        "description": "MagmarsSmokescreenDescription",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "MagmarSmokescreenEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NULLIFY_OR_WEAKEN_ATTACK",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_DARK_GAS"
      },
      {
        "energy": [
          "FIRE",
          2
        ],
        "name": "SmogName",
        "description": "MayInflictPoisonDescription",
        "descriptionCont": "NONE",
        "damage": 20,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "MagmarSmogEffectCommands",
        "flags": {
          "flags1": "INFLICT_POISON",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_SMOG"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_WATER",
    "resistance": "NONE",
    "category": "SpitfireName",
    "pokedexNumber": 126,
    "unknownField1": 0,
    "level": 31,
    "length": [
      4,
      3
    ],
    "weight": 980,
    "description": "MagmarLv31Description",
    "aiInfo": "AI_INFO_UNK_03"
  },
  "FLAREON_LV22": {
    "type": "TYPE_PKMN_FIRE",
    "gfx": "FlareonLv22CardGfx",
    "name": "FlareonName",
    "rarity": "DIAMOND",
    "sets": [
      "MYSTERY",
      "GB"
    ],
    "id": "FLAREON_LV22",
    "hp": 60,
    "stage": "STAGE1",
    "preEvoName": "EeveeName",
    "attacks": [
      {
        "energy": [
          "COLORLESS",
          3
        ],
        "name": "BiteName",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 30,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_HIT"
      },
      {
        "energy": [
          "COLORLESS",
          3
        ],
        "name": "RageName",
        "description": "FlareonsRageDescription",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_PLUS",
        "effectCommands": "FlareonRageEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "BOOST_IF_TAKEN_DAMAGE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_HIT"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_WATER",
    "resistance": "NONE",
    "category": "FlameName",
    "pokedexNumber": 136,
    "unknownField1": 0,
    "level": 22,
    "length": [
      2,
      11
    ],
    "weight": 550,
    "description": "FlareonLv22Description",
    "aiInfo": 0
  },
  "FLAREON_LV28": {
    "type": "TYPE_PKMN_FIRE",
    "gfx": "FlareonLv28CardGfx",
    "name": "FlareonName",
    "rarity": "STAR",
    "sets": [
      "EVOLUTION",
      "JUNGLE"
    ],
    "id": "FLAREON_LV28",
    "hp": 70,
    "stage": "STAGE1",
    "preEvoName": "EeveeName",
    "attacks": [
      {
        "energy": [
          "COLORLESS",
          2
        ],
        "name": "QuickAttackName",
        "description": "QuickAttackDescription",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_PLUS",
        "effectCommands": "FlareonQuickAttackEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_QUICK_ATTACK"
      },
      {
        "energy": [
          "FIRE",
          2,
          "COLORLESS",
          2
        ],
        "name": "FlamethrowerName",
        "description": "FlareonsFlamethrowerDescription",
        "descriptionCont": "NONE",
        "damage": 60,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "FlareonFlamethrowerEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "DISCARD_ENERGY",
          "flags3": "NONE"
        },
        "priority": 3,
        "animation": "ATK_ANIM_BIG_FLAME"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_WATER",
    "resistance": "NONE",
    "category": "FlameName",
    "pokedexNumber": 136,
    "unknownField1": 0,
    "level": 28,
    "length": [
      2,
      11
    ],
    "weight": 550,
    "description": "FlareonLv28Description",
    "aiInfo": 0
  },
  "MOLTRES_LV35": {
    "type": "TYPE_PKMN_FIRE",
    "gfx": "MoltresLv35CardGfx",
    "name": "MoltresName",
    "rarity": "STAR",
    "sets": [
      "MYSTERY",
      "FOSSIL"
    ],
    "id": "MOLTRES_LV35",
    "hp": 70,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "FIRE",
          1
        ],
        "name": "WildfireName",
        "description": "WildfireDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "RESIDUAL",
        "effectCommands": "MoltresWildfireEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "FLAG_2_BIT_5",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_GLOW_EFFECT"
      },
      {
        "energy": [
          "FIRE",
          4
        ],
        "name": "DiveBombName",
        "description": "MayDoNothingDescription",
        "descriptionCont": "NONE",
        "damage": 80,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "MoltresLv35DiveBombEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_NONE"
      }
    ],
    "retreatCost": 2,
    "weakness": "NONE",
    "resistance": "WR_FIGHTING",
    "category": "FlameName",
    "pokedexNumber": 146,
    "unknownField1": 0,
    "level": 35,
    "length": [
      6,
      7
    ],
    "weight": 1320,
    "description": "MoltresLv35Description",
    "aiInfo": 0
  },
  "MOLTRES_LV37": {
    "type": "TYPE_PKMN_FIRE",
    "gfx": "MoltresLv37CardGfx",
    "name": "MoltresName",
    "rarity": "STAR",
    "sets": [
      "PROMOTIONAL",
      "GB"
    ],
    "id": "MOLTRES_LV37",
    "hp": 100,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          0
        ],
        "name": "FiregiverName",
        "description": "FiregiverDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "POKEMON_POWER",
        "effectCommands": "MoltresFiregiverEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_FIREGIVER"
      },
      {
        "energy": [
          "FIRE",
          3
        ],
        "name": "DiveBombName",
        "description": "MayDoNothingDescription",
        "descriptionCont": "NONE",
        "damage": 70,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "MoltresLv37DiveBombEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_NONE"
      }
    ],
    "retreatCost": 2,
    "weakness": "NONE",
    "resistance": "WR_FIGHTING",
    "category": "FlameName",
    "pokedexNumber": 146,
    "unknownField1": 0,
    "level": 37,
    "length": [
      6,
      7
    ],
    "weight": 1320,
    "description": "MoltresLv37Description",
    "aiInfo": 0
  },
  "SQUIRTLE": {
    "type": "TYPE_PKMN_WATER",
    "gfx": "SquirtleCardGfx",
    "name": "SquirtleName",
    "rarity": "CIRCLE",
    "sets": [
      "EVOLUTION",
      "NONE"
    ],
    "id": "SQUIRTLE",
    "hp": 40,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "WATER",
          1
        ],
        "name": "BubbleName",
        "description": "MayInflictParalysisDescription",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "SquirtleBubbleEffectCommands",
        "flags": {
          "flags1": "INFLICT_PARALYSIS",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_BUBBLES"
      },
      {
        "energy": [
          "WATER",
          1,
          "COLORLESS",
          1
        ],
        "name": "WithdrawName",
        "description": "SquirtlesWithdrawDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "RESIDUAL",
        "effectCommands": "SquirtleWithdrawEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NULLIFY_OR_WEAKEN_ATTACK",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_NONE"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_LIGHTNING",
    "resistance": "NONE",
    "category": "TinyTurtleName",
    "pokedexNumber": 7,
    "unknownField1": 0,
    "level": 8,
    "length": [
      1,
      8
    ],
    "weight": 200,
    "description": "SquirtleDescription",
    "aiInfo": [
      "AI_INFO_UNK_05",
      "HAS_EVOLUTION"
    ]
  },
  "WARTORTLE": {
    "type": "TYPE_PKMN_WATER",
    "gfx": "WartortleCardGfx",
    "name": "WartortleName",
    "rarity": "DIAMOND",
    "sets": [
      "EVOLUTION",
      "NONE"
    ],
    "id": "WARTORTLE",
    "hp": 70,
    "stage": "STAGE1",
    "preEvoName": "SquirtleName",
    "attacks": [
      {
        "energy": [
          "WATER",
          1,
          "COLORLESS",
          1
        ],
        "name": "WithdrawName",
        "description": "WartortlesWithdrawDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "RESIDUAL",
        "effectCommands": "WartortleWithdrawEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NULLIFY_OR_WEAKEN_ATTACK",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_NONE"
      },
      {
        "energy": [
          "WATER",
          1,
          "COLORLESS",
          2
        ],
        "name": "BiteName",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 40,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_HIT"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_LIGHTNING",
    "resistance": "NONE",
    "category": "TurtleName",
    "pokedexNumber": 8,
    "unknownField1": 0,
    "level": 22,
    "length": [
      3,
      3
    ],
    "weight": 500,
    "description": "WartortleDescription",
    "aiInfo": [
      "AI_INFO_ENCOURAGE_EVO",
      "HAS_EVOLUTION"
    ]
  },
  "BLASTOISE": {
    "type": "TYPE_PKMN_WATER",
    "gfx": "BlastoiseCardGfx",
    "name": "BlastoiseName",
    "rarity": "STAR",
    "sets": [
      "EVOLUTION",
      "NONE"
    ],
    "id": "BLASTOISE",
    "hp": 100,
    "stage": "STAGE2",
    "preEvoName": "WartortleName",
    "attacks": [
      {
        "energy": [
          0
        ],
        "name": "RainDanceName",
        "description": "RainDanceDescription",
        "descriptionCont": "RainDanceDescriptionCont",
        "damage": 0,
        "category": "POKEMON_POWER",
        "effectCommands": "BlastoiseRainDanceEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_PKMN_POWER_1"
      },
      {
        "energy": [
          "WATER",
          3
        ],
        "name": "HydroPumpName",
        "description": "HydroPumpDescription",
        "descriptionCont": "NONE",
        "damage": 40,
        "category": "DAMAGE_PLUS",
        "effectCommands": "BlastoiseHydroPumpEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "ATTACHED_ENERGY_BOOST",
          "flags3": "NONE"
        },
        "priority": "MAX_ENERGY_BOOST_IS_LIMITED",
        "animation": "ATK_ANIM_HYDRO_PUMP"
      }
    ],
    "retreatCost": 3,
    "weakness": "WR_LIGHTNING",
    "resistance": "NONE",
    "category": "ShellfishName",
    "pokedexNumber": 9,
    "unknownField1": 0,
    "level": 52,
    "length": [
      5,
      3
    ],
    "weight": 1890,
    "description": "BlastoiseDescription",
    "aiInfo": 0
  },
  "PSYDUCK": {
    "type": "TYPE_PKMN_WATER",
    "gfx": "PsyduckCardGfx",
    "name": "PsyduckName",
    "rarity": "CIRCLE",
    "sets": [
      "LABORATORY",
      "FOSSIL"
    ],
    "id": "PSYDUCK",
    "hp": 50,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "PSYCHIC",
          1
        ],
        "name": "HeadacheName",
        "description": "HeadacheDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "RESIDUAL",
        "effectCommands": "PsyduckHeadacheEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "FLAG_2_BIT_6",
          "flags3": "NONE"
        },
        "priority": 2,
        "animation": "ATK_ANIM_GLOW_EFFECT"
      },
      {
        "energy": [
          "WATER",
          1
        ],
        "name": "FurySwipesName",
        "description": "TripleAttackX10Description",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_X",
        "effectCommands": "PsyduckFurySwipesEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_MULTIPLE_SLASH"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_LIGHTNING",
    "resistance": "NONE",
    "category": "DuckName",
    "pokedexNumber": 54,
    "unknownField1": 0,
    "level": 15,
    "length": [
      2,
      7
    ],
    "weight": 430,
    "description": "PsyduckDescription",
    "aiInfo": [
      "AI_INFO_UNK_03",
      "HAS_EVOLUTION"
    ]
  },
  "GOLDUCK": {
    "type": "TYPE_PKMN_WATER",
    "gfx": "GolduckCardGfx",
    "name": "GolduckName",
    "rarity": "DIAMOND",
    "sets": [
      "LABORATORY",
      "FOSSIL"
    ],
    "id": "GOLDUCK",
    "hp": 70,
    "stage": "STAGE1",
    "preEvoName": "PsyduckName",
    "attacks": [
      {
        "energy": [
          "PSYCHIC",
          1
        ],
        "name": "PsyshockName",
        "description": "MayInflictParalysisDescription",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "GolduckPsyshockEffectCommands",
        "flags": {
          "flags1": "INFLICT_PARALYSIS",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_PSYCHIC_HIT"
      },
      {
        "energy": [
          "WATER",
          2,
          "COLORLESS",
          1
        ],
        "name": "HyperBeamName",
        "description": "Discard1EnergyFromTargetDescription",
        "descriptionCont": "NONE",
        "damage": 20,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "GolduckHyperBeamEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "SPECIAL_AI_HANDLING"
        },
        "priority": 0,
        "animation": "ATK_ANIM_HYPER_BEAM"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_LIGHTNING",
    "resistance": "NONE",
    "category": "DuckName",
    "pokedexNumber": 55,
    "unknownField1": 0,
    "level": 27,
    "length": [
      5,
      7
    ],
    "weight": 1690,
    "description": "GolduckDescription",
    "aiInfo": "AI_INFO_UNK_03"
  },
  "POLIWAG": {
    "type": "TYPE_PKMN_WATER",
    "gfx": "PoliwagCardGfx",
    "name": "PoliwagName",
    "rarity": "CIRCLE",
    "sets": [
      "LABORATORY",
      "NONE"
    ],
    "id": "POLIWAG",
    "hp": 40,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "WATER",
          1
        ],
        "name": "WaterGunName",
        "description": "PoliwagsWaterGunDescription",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_PLUS",
        "effectCommands": "PoliwagWaterGunEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "ATTACHED_ENERGY_BOOST",
          "flags3": "NONE"
        },
        "priority": "MAX_ENERGY_BOOST_IS_LIMITED",
        "animation": "ATK_ANIM_WATER_GUN"
      },
      {
        "energy": [
          0
        ],
        "name": "NONE",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_NONE"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_GRASS",
    "resistance": "NONE",
    "category": "TadpoleName",
    "pokedexNumber": 60,
    "unknownField1": 0,
    "level": 13,
    "length": [
      2,
      0
    ],
    "weight": 270,
    "description": "PoliwagDescription",
    "aiInfo": [
      "AI_INFO_UNK_03",
      "HAS_EVOLUTION"
    ]
  },
  "POLIWHIRL": {
    "type": "TYPE_PKMN_WATER",
    "gfx": "PoliwhirlCardGfx",
    "name": "PoliwhirlName",
    "rarity": "DIAMOND",
    "sets": [
      "LABORATORY",
      "NONE"
    ],
    "id": "POLIWHIRL",
    "hp": 60,
    "stage": "STAGE1",
    "preEvoName": "PoliwagName",
    "attacks": [
      {
        "energy": [
          "WATER",
          2
        ],
        "name": "AmnesiaName",
        "description": "PoliwhirlsAmnesiaDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "PoliwhirlAmnesiaEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NULLIFY_OR_WEAKEN_ATTACK",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_AMNESIA"
      },
      {
        "energy": [
          "WATER",
          2,
          "COLORLESS",
          1
        ],
        "name": "DoubleslapName",
        "description": "DoubleAttackX30Description",
        "descriptionCont": "NONE",
        "damage": 30,
        "category": "DAMAGE_X",
        "effectCommands": "PoliwhirlDoubleslapEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_HIT"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_GRASS",
    "resistance": "NONE",
    "category": "TadpoleName",
    "pokedexNumber": 61,
    "unknownField1": 0,
    "level": 28,
    "length": [
      3,
      4
    ],
    "weight": 440,
    "description": "PoliwhirlsDescription",
    "aiInfo": "HAS_EVOLUTION"
  },
  "POLIWRATH": {
    "type": "TYPE_PKMN_WATER",
    "gfx": "PoliwrathCardGfx",
    "name": "PoliwrathName",
    "rarity": "STAR",
    "sets": [
      "LABORATORY",
      "NONE"
    ],
    "id": "POLIWRATH",
    "hp": 90,
    "stage": "STAGE2",
    "preEvoName": "PoliwhirlName",
    "attacks": [
      {
        "energy": [
          "WATER",
          2,
          "COLORLESS",
          1
        ],
        "name": "WaterGunName",
        "description": "PoliwrathsWaterGunDescription",
        "descriptionCont": "NONE",
        "damage": 30,
        "category": "DAMAGE_PLUS",
        "effectCommands": "PoliwrathWaterGunEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "ATTACHED_ENERGY_BOOST",
          "flags3": "NONE"
        },
        "priority": "MAX_ENERGY_BOOST_IS_LIMITED",
        "animation": "ATK_ANIM_WATER_GUN"
      },
      {
        "energy": [
          "WATER",
          2,
          "COLORLESS",
          2
        ],
        "name": "WhirlpoolName",
        "description": "Discard1EnergyFromTargetDescription",
        "descriptionCont": "NONE",
        "damage": 40,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "PoliwrathWhirlpoolEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "FLAG_2_BIT_6",
          "flags3": "NONE"
        },
        "priority": 3,
        "animation": "ATK_ANIM_WHIRLPOOL"
      }
    ],
    "retreatCost": 3,
    "weakness": "WR_GRASS",
    "resistance": "NONE",
    "category": "TadpoleName",
    "pokedexNumber": 62,
    "unknownField1": 0,
    "level": 48,
    "length": [
      4,
      3
    ],
    "weight": 1190,
    "description": "PoliwrathDescription",
    "aiInfo": 0
  },
  "TENTACOOL": {
    "type": "TYPE_PKMN_WATER",
    "gfx": "TentacoolCardGfx",
    "name": "TentacoolName",
    "rarity": "CIRCLE",
    "sets": [
      "LABORATORY",
      "FOSSIL"
    ],
    "id": "TENTACOOL",
    "hp": 30,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          0
        ],
        "name": "CowardiceName",
        "description": "CowardiceDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "POKEMON_POWER",
        "effectCommands": "TentacoolCowardiceEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "FLAG_2_BIT_6",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_PKMN_POWER_1"
      },
      {
        "energy": [
          "WATER",
          1
        ],
        "name": "AcidName",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_GOO"
      }
    ],
    "retreatCost": 0,
    "weakness": "WR_LIGHTNING",
    "resistance": "NONE",
    "category": "JellyfishName",
    "pokedexNumber": 72,
    "unknownField1": 0,
    "level": 10,
    "length": [
      2,
      11
    ],
    "weight": 1000,
    "description": "TentacoolDescription",
    "aiInfo": [
      "AI_INFO_UNK_03",
      "HAS_EVOLUTION"
    ]
  },
  "TENTACRUEL": {
    "type": "TYPE_PKMN_WATER",
    "gfx": "TentacruelCardGfx",
    "name": "TentacruelName",
    "rarity": "DIAMOND",
    "sets": [
      "LABORATORY",
      "FOSSIL"
    ],
    "id": "TENTACRUEL",
    "hp": 60,
    "stage": "STAGE1",
    "preEvoName": "TentacoolName",
    "attacks": [
      {
        "energy": [
          "WATER",
          1
        ],
        "name": "SupersonicName",
        "description": "MayInflictConfusionDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "TentacruelSupersonicEffectCommands",
        "flags": {
          "flags1": "INFLICT_CONFUSION",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_SUPERSONIC"
      },
      {
        "energy": [
          "WATER",
          2
        ],
        "name": "JellyfishStingName",
        "description": "InflictPoisonDescription",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "TentacruelJellyfishStingEffectCommands",
        "flags": {
          "flags1": "INFLICT_POISON",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_MULTIPLE_SLASH"
      }
    ],
    "retreatCost": 0,
    "weakness": "WR_LIGHTNING",
    "resistance": "NONE",
    "category": "JellyfishName",
    "pokedexNumber": 73,
    "unknownField1": 0,
    "level": 21,
    "length": [
      5,
      3
    ],
    "weight": 1210,
    "description": "TentacruelDescription",
    "aiInfo": 0
  },
  "SEEL": {
    "type": "TYPE_PKMN_WATER",
    "gfx": "SeelCardGfx",
    "name": "SeelName",
    "rarity": "DIAMOND",
    "sets": [
      "COLOSSEUM",
      "NONE"
    ],
    "id": "SEEL",
    "hp": 60,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "WATER",
          1
        ],
        "name": "HeadbuttName",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_HIT"
      },
      {
        "energy": [
          0
        ],
        "name": "NONE",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_NONE"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_LIGHTNING",
    "resistance": "NONE",
    "category": "SeaLionName",
    "pokedexNumber": 86,
    "unknownField1": 0,
    "level": 12,
    "length": [
      3,
      7
    ],
    "weight": 1980,
    "description": "SeelDescription",
    "aiInfo": [
      "AI_INFO_UNK_03",
      "HAS_EVOLUTION"
    ]
  },
  "DEWGONG": {
    "type": "TYPE_PKMN_WATER",
    "gfx": "DewgongCardGfx",
    "name": "DewgongName",
    "rarity": "DIAMOND",
    "sets": [
      "COLOSSEUM",
      "NONE"
    ],
    "id": "DEWGONG",
    "hp": 80,
    "stage": "STAGE1",
    "preEvoName": "SeelName",
    "attacks": [
      {
        "energy": [
          "WATER",
          2,
          "COLORLESS",
          1
        ],
        "name": "AuroraBeamName",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 50,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_BEAM"
      },
      {
        "energy": [
          "WATER",
          2,
          "COLORLESS",
          2
        ],
        "name": "IceBeamName",
        "description": "MayInflictParalysisDescription",
        "descriptionCont": "NONE",
        "damage": 30,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "DewgongIceBeamEffectCommands",
        "flags": {
          "flags1": "INFLICT_PARALYSIS",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_BEAM"
      }
    ],
    "retreatCost": 3,
    "weakness": "WR_LIGHTNING",
    "resistance": "NONE",
    "category": "SeaLionName",
    "pokedexNumber": 87,
    "unknownField1": 0,
    "level": 42,
    "length": [
      5,
      7
    ],
    "weight": 2650,
    "description": "DewgongDescription",
    "aiInfo": 0
  },
  "SHELLDER": {
    "type": "TYPE_PKMN_WATER",
    "gfx": "ShellderCardGfx",
    "name": "ShellderName",
    "rarity": "CIRCLE",
    "sets": [
      "MYSTERY",
      "FOSSIL"
    ],
    "id": "SHELLDER",
    "hp": 30,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "WATER",
          1
        ],
        "name": "SupersonicName",
        "description": "MayInflictConfusionDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "ShellderSupersonicEffectCommands",
        "flags": {
          "flags1": "INFLICT_CONFUSION",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_SUPERSONIC"
      },
      {
        "energy": [
          "WATER",
          1
        ],
        "name": "HideInShellName",
        "description": "HideInShellDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "RESIDUAL",
        "effectCommands": "ShellderHideInShellEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NULLIFY_OR_WEAKEN_ATTACK",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_NONE"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_LIGHTNING",
    "resistance": "NONE",
    "category": "BivalveName",
    "pokedexNumber": 90,
    "unknownField1": 0,
    "level": 8,
    "length": [
      1,
      0
    ],
    "weight": 90,
    "description": "ShellderDescription",
    "aiInfo": [
      "AI_INFO_UNK_03",
      "HAS_EVOLUTION"
    ]
  },
  "CLOYSTER": {
    "type": "TYPE_PKMN_WATER",
    "gfx": "CloysterCardGfx",
    "name": "CloysterName",
    "rarity": "DIAMOND",
    "sets": [
      "MYSTERY",
      "FOSSIL"
    ],
    "id": "CLOYSTER",
    "hp": 50,
    "stage": "STAGE1",
    "preEvoName": "ShellderName",
    "attacks": [
      {
        "energy": [
          "WATER",
          2
        ],
        "name": "ClampName",
        "description": "ClampDescription",
        "descriptionCont": "NONE",
        "damage": 30,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "CloysterClampEffectCommands",
        "flags": {
          "flags1": "INFLICT_PARALYSIS",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_NONE"
      },
      {
        "energy": [
          "WATER",
          2
        ],
        "name": "SpikeCannonName",
        "description": "DoubleAttackX30Description",
        "descriptionCont": "NONE",
        "damage": 30,
        "category": "DAMAGE_X",
        "effectCommands": "CloysterSpikeCannonEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_NEEDLES"
      }
    ],
    "retreatCost": 2,
    "weakness": "WR_LIGHTNING",
    "resistance": "NONE",
    "category": "BivalveName",
    "pokedexNumber": 91,
    "unknownField1": 0,
    "level": 25,
    "length": [
      4,
      11
    ],
    "weight": 2920,
    "description": "CloysterDescription",
    "aiInfo": 0
  },
  "KRABBY": {
    "type": "TYPE_PKMN_WATER",
    "gfx": "KrabbyCardGfx",
    "name": "KrabbyName",
    "rarity": "CIRCLE",
    "sets": [
      "EVOLUTION",
      "FOSSIL"
    ],
    "id": "KRABBY",
    "hp": 50,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "WATER",
          1
        ],
        "name": "CallForFamilyName",
        "description": "KrabbysCallForFamilyDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "RESIDUAL",
        "effectCommands": "KrabbyCallForFamilyEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "SPECIAL_AI_HANDLING"
        },
        "priority": 0,
        "animation": "ATK_ANIM_GLOW_EFFECT"
      },
      {
        "energy": [
          "WATER",
          1,
          "COLORLESS",
          1
        ],
        "name": "IronGripName",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 20,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_HIT"
      }
    ],
    "retreatCost": 2,
    "weakness": "WR_LIGHTNING",
    "resistance": "NONE",
    "category": "RiverCrabName",
    "pokedexNumber": 98,
    "unknownField1": 0,
    "level": 20,
    "length": [
      1,
      4
    ],
    "weight": 140,
    "description": "KrabbyDescription",
    "aiInfo": "HAS_EVOLUTION"
  },
  "KINGLER": {
    "type": "TYPE_PKMN_WATER",
    "gfx": "KinglerCardGfx",
    "name": "KinglerName",
    "rarity": "DIAMOND",
    "sets": [
      "EVOLUTION",
      "FOSSIL"
    ],
    "id": "KINGLER",
    "hp": 60,
    "stage": "STAGE1",
    "preEvoName": "KrabbyName",
    "attacks": [
      {
        "energy": [
          "WATER",
          1
        ],
        "name": "FlailName",
        "description": "KinglersFlailDescription",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_X",
        "effectCommands": "KinglerFlailEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "BOOST_IF_TAKEN_DAMAGE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_BIG_HIT"
      },
      {
        "energy": [
          "WATER",
          2,
          "COLORLESS",
          1
        ],
        "name": "CrabhammerName",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 40,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_HIT"
      }
    ],
    "retreatCost": 3,
    "weakness": "WR_LIGHTNING",
    "resistance": "NONE",
    "category": "PincerName",
    "pokedexNumber": 99,
    "unknownField1": 0,
    "level": 27,
    "length": [
      4,
      3
    ],
    "weight": 1320,
    "description": "KinglerDescription",
    "aiInfo": 0
  },
  "HORSEA": {
    "type": "TYPE_PKMN_WATER",
    "gfx": "HorseaCardGfx",
    "name": "HorseaName",
    "rarity": "CIRCLE",
    "sets": [
      "LABORATORY",
      "FOSSIL"
    ],
    "id": "HORSEA",
    "hp": 40,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "WATER",
          1
        ],
        "name": "SmokescreenName",
        "description": "OpponentAttackMayDoNothingDescription",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "HorseaSmokescreenEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NULLIFY_OR_WEAKEN_ATTACK",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_DARK_GAS"
      },
      {
        "energy": [
          0
        ],
        "name": "NONE",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_NONE"
      }
    ],
    "retreatCost": 0,
    "weakness": "WR_LIGHTNING",
    "resistance": "NONE",
    "category": "DragonName",
    "pokedexNumber": 116,
    "unknownField1": 0,
    "level": 19,
    "length": [
      1,
      4
    ],
    "weight": 180,
    "description": "HorseaDescription",
    "aiInfo": [
      "AI_INFO_UNK_03",
      "HAS_EVOLUTION"
    ]
  },
  "SEADRA": {
    "type": "TYPE_PKMN_WATER",
    "gfx": "SeadraCardGfx",
    "name": "SeadraName",
    "rarity": "DIAMOND",
    "sets": [
      "LABORATORY",
      "FOSSIL"
    ],
    "id": "SEADRA",
    "hp": 60,
    "stage": "STAGE1",
    "preEvoName": "HorseaName",
    "attacks": [
      {
        "energy": [
          "WATER",
          1,
          "COLORLESS",
          1
        ],
        "name": "WaterGunName",
        "description": "SeadrasWaterGunDescription",
        "descriptionCont": "NONE",
        "damage": 20,
        "category": "DAMAGE_PLUS",
        "effectCommands": "SeadraWaterGunEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "ATTACHED_ENERGY_BOOST",
          "flags3": "NONE"
        },
        "priority": "MAX_ENERGY_BOOST_IS_LIMITED",
        "animation": "ATK_ANIM_WATER_GUN"
      },
      {
        "energy": [
          "WATER",
          1,
          "COLORLESS",
          2
        ],
        "name": "AgilityName",
        "description": "SeadrasAgilityDescription",
        "descriptionCont": "NONE",
        "damage": 20,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "SeadraAgilityEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NULLIFY_OR_WEAKEN_ATTACK",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_QUICK_ATTACK"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_LIGHTNING",
    "resistance": "NONE",
    "category": "DragonName",
    "pokedexNumber": 117,
    "unknownField1": 0,
    "level": 23,
    "length": [
      3,
      1
    ],
    "weight": 550,
    "description": "SeadraDescription",
    "aiInfo": 0
  },
  "GOLDEEN": {
    "type": "TYPE_PKMN_WATER",
    "gfx": "GoldeenCardGfx",
    "name": "GoldeenName",
    "rarity": "CIRCLE",
    "sets": [
      "COLOSSEUM",
      "JUNGLE"
    ],
    "id": "GOLDEEN",
    "hp": 40,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "WATER",
          1
        ],
        "name": "HornAttackName",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_HIT"
      },
      {
        "energy": [
          0
        ],
        "name": "NONE",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_NONE"
      }
    ],
    "retreatCost": 0,
    "weakness": "WR_LIGHTNING",
    "resistance": "NONE",
    "category": "GoldfishName",
    "pokedexNumber": 118,
    "unknownField1": 0,
    "level": 12,
    "length": [
      2,
      0
    ],
    "weight": 330,
    "description": "GoldeenDescription",
    "aiInfo": [
      "AI_INFO_UNK_05",
      "HAS_EVOLUTION"
    ]
  },
  "SEAKING": {
    "type": "TYPE_PKMN_WATER",
    "gfx": "SeakingCardGfx",
    "name": "SeakingName",
    "rarity": "DIAMOND",
    "sets": [
      "COLOSSEUM",
      "JUNGLE"
    ],
    "id": "SEAKING",
    "hp": 70,
    "stage": "STAGE1",
    "preEvoName": "GoldeenName",
    "attacks": [
      {
        "energy": [
          "WATER",
          1
        ],
        "name": "HornAttackName",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_HIT"
      },
      {
        "energy": [
          "WATER",
          1,
          "COLORLESS",
          1
        ],
        "name": "WaterfallName",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 30,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_WATER_JETS"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_LIGHTNING",
    "resistance": "NONE",
    "category": "GoldfishName",
    "pokedexNumber": 119,
    "unknownField1": 0,
    "level": 28,
    "length": [
      4,
      3
    ],
    "weight": 860,
    "description": "SeakingDescription",
    "aiInfo": 0
  },
  "STARYU": {
    "type": "TYPE_PKMN_WATER",
    "gfx": "StaryuCardGfx",
    "name": "StaryuName",
    "rarity": "CIRCLE",
    "sets": [
      "COLOSSEUM",
      "NONE"
    ],
    "id": "STARYU",
    "hp": 40,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "WATER",
          1
        ],
        "name": "SlapName",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 20,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_HIT"
      },
      {
        "energy": [
          0
        ],
        "name": "NONE",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_NONE"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_LIGHTNING",
    "resistance": "NONE",
    "category": "StarshapeName",
    "pokedexNumber": 120,
    "unknownField1": 0,
    "level": 15,
    "length": [
      2,
      7
    ],
    "weight": 760,
    "description": "StaryuDescription",
    "aiInfo": [
      "AI_INFO_UNK_03",
      "HAS_EVOLUTION"
    ]
  },
  "STARMIE": {
    "type": "TYPE_PKMN_WATER",
    "gfx": "StarmieCardGfx",
    "name": "StarmieName",
    "rarity": "CIRCLE",
    "sets": [
      "EVOLUTION",
      "NONE"
    ],
    "id": "STARMIE",
    "hp": 60,
    "stage": "STAGE1",
    "preEvoName": "StaryuName",
    "attacks": [
      {
        "energy": [
          "WATER",
          2
        ],
        "name": "RecoverName",
        "description": "StarmiesRecoverDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "RESIDUAL",
        "effectCommands": "StarmieRecoverEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "DISCARD_ENERGY",
          "flags3": "NONE"
        },
        "priority": 3,
        "animation": "ATK_ANIM_RECOVER"
      },
      {
        "energy": [
          "WATER",
          1,
          "COLORLESS",
          2
        ],
        "name": "StarFreezeName",
        "description": "MayInflictParalysisDescription",
        "descriptionCont": "NONE",
        "damage": 20,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "StarmieStarFreezeEffectCommands",
        "flags": {
          "flags1": "INFLICT_PARALYSIS",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_BEAM"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_LIGHTNING",
    "resistance": "NONE",
    "category": "MysteriousName",
    "pokedexNumber": 121,
    "unknownField1": 0,
    "level": 28,
    "length": [
      3,
      7
    ],
    "weight": 1760,
    "description": "StarmieDescription",
    "aiInfo": 0
  },
  "MAGIKARP": {
    "type": "TYPE_PKMN_WATER",
    "gfx": "MagikarpCardGfx",
    "name": "MagikarpName",
    "rarity": "DIAMOND",
    "sets": [
      "COLOSSEUM",
      "NONE"
    ],
    "id": "MAGIKARP",
    "hp": 30,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "COLORLESS",
          1
        ],
        "name": "TackleName",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_HIT"
      },
      {
        "energy": [
          "WATER",
          1
        ],
        "name": "FlailName",
        "description": "MagikarpsFlailDescription",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_X",
        "effectCommands": "MagikarpFlailEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "BOOST_IF_TAKEN_DAMAGE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_BIG_HIT"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_LIGHTNING",
    "resistance": "NONE",
    "category": "FishName",
    "pokedexNumber": 129,
    "unknownField1": 0,
    "level": 8,
    "length": [
      2,
      11
    ],
    "weight": 220,
    "description": "MagikarpDescription",
    "aiInfo": [
      "AI_INFO_ENCOURAGE_EVO",
      "HAS_EVOLUTION"
    ]
  },
  "GYARADOS": {
    "type": "TYPE_PKMN_WATER",
    "gfx": "GyaradosCardGfx",
    "name": "GyaradosName",
    "rarity": "STAR",
    "sets": [
      "COLOSSEUM",
      "NONE"
    ],
    "id": "GYARADOS",
    "hp": 100,
    "stage": "STAGE1",
    "preEvoName": "MagikarpName",
    "attacks": [
      {
        "energy": [
          "WATER",
          3
        ],
        "name": "DragonRageName",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 50,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_DRAGON_RAGE"
      },
      {
        "energy": [
          "WATER",
          4
        ],
        "name": "BubblebeamName",
        "description": "MayInflictParalysisDescription",
        "descriptionCont": "NONE",
        "damage": 40,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "GyaradosBubblebeamEffectCommands",
        "flags": {
          "flags1": "INFLICT_PARALYSIS",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_BUBBLES"
      }
    ],
    "retreatCost": 3,
    "weakness": "WR_GRASS",
    "resistance": "WR_FIGHTING",
    "category": "AtrociousName",
    "pokedexNumber": 130,
    "unknownField1": 0,
    "level": 41,
    "length": [
      21,
      4
    ],
    "weight": 5180,
    "description": "GyaradosDescription",
    "aiInfo": 0
  },
  "LAPRAS": {
    "type": "TYPE_PKMN_WATER",
    "gfx": "LaprasCardGfx",
    "name": "LaprasName",
    "rarity": "STAR",
    "sets": [
      "MYSTERY",
      "FOSSIL"
    ],
    "id": "LAPRAS",
    "hp": 80,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "WATER",
          1
        ],
        "name": "WaterGunName",
        "description": "LaprasWaterGunDescription",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_PLUS",
        "effectCommands": "LaprasWaterGunEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "ATTACHED_ENERGY_BOOST",
          "flags3": "NONE"
        },
        "priority": "MAX_ENERGY_BOOST_IS_LIMITED",
        "animation": "ATK_ANIM_WATER_GUN"
      },
      {
        "energy": [
          "WATER",
          2
        ],
        "name": "ConfuseRayName",
        "description": "MayInflictConfusionDescription",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "LaprasConfuseRayEffectCommands",
        "flags": {
          "flags1": "INFLICT_CONFUSION",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_CONFUSE_RAY"
      }
    ],
    "retreatCost": 2,
    "weakness": "WR_LIGHTNING",
    "resistance": "NONE",
    "category": "TransportName",
    "pokedexNumber": 131,
    "unknownField1": 0,
    "level": 31,
    "length": [
      8,
      2
    ],
    "weight": 4850,
    "description": "LaprasDescription",
    "aiInfo": 0
  },
  "VAPOREON_LV29": {
    "type": "TYPE_PKMN_WATER",
    "gfx": "VaporeonLv29CardGfx",
    "name": "VaporeonName",
    "rarity": "DIAMOND",
    "sets": [
      "MYSTERY",
      "GB"
    ],
    "id": "VAPOREON_LV29",
    "hp": 60,
    "stage": "STAGE1",
    "preEvoName": "EeveeName",
    "attacks": [
      {
        "energy": [
          "COLORLESS",
          1
        ],
        "name": "FocusEnergyName",
        "description": "FocusEnergyDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "RESIDUAL",
        "effectCommands": "VaporeonFocusEnergyEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "SPECIAL_AI_HANDLING"
        },
        "priority": 0,
        "animation": "ATK_ANIM_GLOW_EFFECT"
      },
      {
        "energy": [
          "COLORLESS",
          3
        ],
        "name": "BiteName",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 30,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_HIT"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_LIGHTNING",
    "resistance": "NONE",
    "category": "BubbleJetName",
    "pokedexNumber": 134,
    "unknownField1": 0,
    "level": 29,
    "length": [
      3,
      3
    ],
    "weight": 640,
    "description": "VaporeonLv29Description",
    "aiInfo": 0
  },
  "VAPOREON_LV42": {
    "type": "TYPE_PKMN_WATER",
    "gfx": "VaporeonLv42CardGfx",
    "name": "VaporeonName",
    "rarity": "STAR",
    "sets": [
      "EVOLUTION",
      "JUNGLE"
    ],
    "id": "VAPOREON_LV42",
    "hp": 80,
    "stage": "STAGE1",
    "preEvoName": "EeveeName",
    "attacks": [
      {
        "energy": [
          "COLORLESS",
          2
        ],
        "name": "QuickAttackName",
        "description": "QuickAttackDescription",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_PLUS",
        "effectCommands": "VaporeonQuickAttackEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_QUICK_ATTACK"
      },
      {
        "energy": [
          "WATER",
          2,
          "COLORLESS",
          1
        ],
        "name": "WaterGunName",
        "description": "VaporeonsWaterGunDescription",
        "descriptionCont": "NONE",
        "damage": 30,
        "category": "DAMAGE_PLUS",
        "effectCommands": "VaporeonWaterGunEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "ATTACHED_ENERGY_BOOST",
          "flags3": "NONE"
        },
        "priority": "MAX_ENERGY_BOOST_IS_LIMITED",
        "animation": "ATK_ANIM_WATER_GUN"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_LIGHTNING",
    "resistance": "NONE",
    "category": "BubbleJetName",
    "pokedexNumber": 134,
    "unknownField1": 0,
    "level": 42,
    "length": [
      3,
      3
    ],
    "weight": 640,
    "description": "VaporeonLv42Description",
    "aiInfo": 0
  },
  "OMANYTE": {
    "type": "TYPE_PKMN_WATER",
    "gfx": "OmanyteCardGfx",
    "name": "OmanyteName",
    "rarity": "CIRCLE",
    "sets": [
      "MYSTERY",
      "FOSSIL"
    ],
    "id": "OMANYTE",
    "hp": 40,
    "stage": "STAGE1",
    "preEvoName": "MysteriousFossilName",
    "attacks": [
      {
        "energy": [
          0
        ],
        "name": "ClairvoyanceName",
        "description": "ClairvoyanceDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "POKEMON_POWER",
        "effectCommands": "OmanyteClairvoyanceEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_PKMN_POWER_1"
      },
      {
        "energy": [
          "WATER",
          1
        ],
        "name": "WaterGunName",
        "description": "OmanytesWaterGunDescription",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_PLUS",
        "effectCommands": "OmanyteWaterGunEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "ATTACHED_ENERGY_BOOST",
          "flags3": "NONE"
        },
        "priority": "MAX_ENERGY_BOOST_IS_LIMITED",
        "animation": "ATK_ANIM_WATER_GUN"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_GRASS",
    "resistance": "NONE",
    "category": "SpiralName",
    "pokedexNumber": 138,
    "unknownField1": 0,
    "level": 19,
    "length": [
      1,
      4
    ],
    "weight": 170,
    "description": "OmanyteDescription",
    "aiInfo": [
      "AI_INFO_BENCH_UTILITY",
      "HAS_EVOLUTION"
    ]
  },
  "OMASTAR": {
    "type": "TYPE_PKMN_WATER",
    "gfx": "OmastarCardGfx",
    "name": "OmastarName",
    "rarity": "DIAMOND",
    "sets": [
      "MYSTERY",
      "FOSSIL"
    ],
    "id": "OMASTAR",
    "hp": 70,
    "stage": "STAGE2",
    "preEvoName": "OmanyteName",
    "attacks": [
      {
        "energy": [
          "WATER",
          1,
          "COLORLESS",
          1
        ],
        "name": "WaterGunName",
        "description": "OmastarsWaterGunDescription",
        "descriptionCont": "NONE",
        "damage": 20,
        "category": "DAMAGE_PLUS",
        "effectCommands": "OmastarWaterGunEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "ATTACHED_ENERGY_BOOST",
          "flags3": "NONE"
        },
        "priority": "MAX_ENERGY_BOOST_IS_LIMITED",
        "animation": "ATK_ANIM_WATER_GUN"
      },
      {
        "energy": [
          "WATER",
          2
        ],
        "name": "SpikeCannonName",
        "description": "DoubleAttackX30Description",
        "descriptionCont": "NONE",
        "damage": 30,
        "category": "DAMAGE_X",
        "effectCommands": "OmastarSpikeCannonEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_NEEDLES"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_GRASS",
    "resistance": "NONE",
    "category": "SpiralName",
    "pokedexNumber": 139,
    "unknownField1": 0,
    "level": 32,
    "length": [
      3,
      3
    ],
    "weight": 770,
    "description": "OmastarDescription",
    "aiInfo": 0
  },
  "ARTICUNO_LV35": {
    "type": "TYPE_PKMN_WATER",
    "gfx": "ArticunoLv35CardGfx",
    "name": "ArticunoName",
    "rarity": "STAR",
    "sets": [
      "MYSTERY",
      "FOSSIL"
    ],
    "id": "ARTICUNO_LV35",
    "hp": 70,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "WATER",
          3
        ],
        "name": "FreezeDryName",
        "description": "MayInflictParalysisDescription",
        "descriptionCont": "NONE",
        "damage": 30,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "ArticunoFreezeDryEffectCommands",
        "flags": {
          "flags1": "INFLICT_PARALYSIS",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_BEAM"
      },
      {
        "energy": [
          "WATER",
          4
        ],
        "name": "BlizzardName",
        "description": "BlizzardDescription",
        "descriptionCont": "NONE",
        "damage": 50,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "ArticunoBlizzardEffectCommands",
        "flags": {
          "flags1": "DAMAGE_TO_OPPONENT_BENCH",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 10,
        "animation": "ATK_ANIM_BLIZZARD"
      }
    ],
    "retreatCost": 2,
    "weakness": "NONE",
    "resistance": "WR_FIGHTING",
    "category": "FreezeName",
    "pokedexNumber": 144,
    "unknownField1": 0,
    "level": 35,
    "length": [
      5,
      7
    ],
    "weight": 1220,
    "description": "ArticunoLv35Description",
    "aiInfo": 0
  },
  "ARTICUNO_LV37": {
    "type": "TYPE_PKMN_WATER",
    "gfx": "ArticunoLv37CardGfx",
    "name": "ArticunoName",
    "rarity": "STAR",
    "sets": [
      "PROMOTIONAL",
      "GB"
    ],
    "id": "ARTICUNO_LV37",
    "hp": 100,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          0
        ],
        "name": "QuickfreezeName",
        "description": "QuickfreezeDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "POKEMON_POWER",
        "effectCommands": "ArticunoQuickfreezeEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_QUICKFREEZE"
      },
      {
        "energy": [
          "WATER",
          3
        ],
        "name": "IceBreathName",
        "description": "IceBreathDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "RESIDUAL",
        "effectCommands": "ArticunoIceBreathEffectCommands",
        "flags": {
          "flags1": "DAMAGE_TO_OPPONENT_BENCH",
          "flags2": "FLAG_2_BIT_6",
          "flags3": "NONE"
        },
        "priority": 3,
        "animation": "ATK_ANIM_WHIRLWIND_ZIGZAG"
      }
    ],
    "retreatCost": 2,
    "weakness": "NONE",
    "resistance": "WR_FIGHTING",
    "category": "FreezeName",
    "pokedexNumber": 144,
    "unknownField1": 0,
    "level": 37,
    "length": [
      5,
      7
    ],
    "weight": 1220,
    "description": "ArticunoLv37Description",
    "aiInfo": 0
  },
  "PIKACHU_LV12": {
    "type": "TYPE_PKMN_LIGHTNING",
    "gfx": "PikachuLv12CardGfx",
    "name": "PikachuName",
    "rarity": "CIRCLE",
    "sets": [
      "COLOSSEUM",
      "NONE"
    ],
    "id": "PIKACHU_LV12",
    "hp": 40,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "COLORLESS",
          1
        ],
        "name": "GnawName",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_HIT"
      },
      {
        "energy": [
          "LIGHTNING",
          1,
          "COLORLESS",
          1
        ],
        "name": "ThunderJoltName",
        "description": "ThunderJoltDescription",
        "descriptionCont": "NONE",
        "damage": 30,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "PikachuThunderJoltEffectCommands",
        "flags": {
          "flags1": "LOW_RECOIL",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_THUNDERSHOCK"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_FIGHTING",
    "resistance": "NONE",
    "category": "MouseName",
    "pokedexNumber": 25,
    "unknownField1": 0,
    "level": 12,
    "length": [
      1,
      4
    ],
    "weight": 130,
    "description": "PikachuLv12Description",
    "aiInfo": [
      "AI_INFO_UNK_03",
      "HAS_EVOLUTION"
    ]
  },
  "PIKACHU_LV14": {
    "type": "TYPE_PKMN_LIGHTNING",
    "gfx": "PikachuLv14CardGfx",
    "name": "PikachuName",
    "rarity": "CIRCLE",
    "sets": [
      "MYSTERY",
      "JUNGLE"
    ],
    "id": "PIKACHU_LV14",
    "hp": 50,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "LIGHTNING",
          2
        ],
        "name": "SparkName",
        "description": "SparkDescription",
        "descriptionCont": "NONE",
        "damage": 20,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "PikachuSparkEffectCommands",
        "flags": {
          "flags1": "DAMAGE_TO_OPPONENT_BENCH",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 10,
        "animation": "ATK_ANIM_THUNDER_WHOLE_SCREEN"
      },
      {
        "energy": [
          0
        ],
        "name": "NONE",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_NONE"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_FIGHTING",
    "resistance": "NONE",
    "category": "MouseName",
    "pokedexNumber": 25,
    "unknownField1": 0,
    "level": 14,
    "length": [
      1,
      4
    ],
    "weight": 130,
    "description": "PikachuLv14Description",
    "aiInfo": "HAS_EVOLUTION"
  },
  "PIKACHU_LV16": {
    "type": "TYPE_PKMN_LIGHTNING",
    "gfx": "PikachuLv16CardGfx",
    "name": "PikachuName",
    "rarity": "PROMOSTAR",
    "sets": [
      "PROMOTIONAL",
      "PRO"
    ],
    "id": "PIKACHU_LV16",
    "hp": 60,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "COLORLESS",
          1
        ],
        "name": "GrowlName",
        "description": "GrowlDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "PikachuLv16GrowlEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NULLIFY_OR_WEAKEN_ATTACK",
          "flags3": "NONE"
        },
        "priority": 10,
        "animation": "ATK_ANIM_SUPERSONIC"
      },
      {
        "energy": [
          "LIGHTNING",
          2
        ],
        "name": "ThundershockName",
        "description": "MayInflictParalysisDescription",
        "descriptionCont": "NONE",
        "damage": 20,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "PikachuLv16ThundershockEffectCommands",
        "flags": {
          "flags1": "INFLICT_PARALYSIS",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_THUNDERSHOCK"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_FIGHTING",
    "resistance": "NONE",
    "category": "MouseName",
    "pokedexNumber": 25,
    "unknownField1": 0,
    "level": 16,
    "length": [
      1,
      4
    ],
    "weight": 130,
    "description": "PikachuLv16Description",
    "aiInfo": "HAS_EVOLUTION"
  },
  "PIKACHU_ALT_LV16": {
    "type": "TYPE_PKMN_LIGHTNING",
    "gfx": "PikachuAltLv16CardGfx",
    "name": "PikachuName",
    "rarity": "PROMOSTAR",
    "sets": [
      "PROMOTIONAL",
      "PRO"
    ],
    "id": "PIKACHU_ALT_LV16",
    "hp": 60,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "COLORLESS",
          1
        ],
        "name": "GrowlName",
        "description": "GrowlDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "PikachuAltLv16GrowlEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NULLIFY_OR_WEAKEN_ATTACK",
          "flags3": "NONE"
        },
        "priority": 10,
        "animation": "ATK_ANIM_SUPERSONIC"
      },
      {
        "energy": [
          "LIGHTNING",
          2
        ],
        "name": "ThundershockName",
        "description": "MayInflictParalysisDescription",
        "descriptionCont": "NONE",
        "damage": 20,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "PikachuAltLv16ThundershockEffectCommands",
        "flags": {
          "flags1": "INFLICT_PARALYSIS",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_THUNDERSHOCK"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_FIGHTING",
    "resistance": "NONE",
    "category": "MouseName",
    "pokedexNumber": 25,
    "unknownField1": 0,
    "level": 16,
    "length": [
      1,
      4
    ],
    "weight": 130,
    "description": "PikachuLv16Description",
    "aiInfo": "HAS_EVOLUTION"
  },
  "FLYING_PIKACHU": {
    "type": "TYPE_PKMN_LIGHTNING",
    "gfx": "FlyingPikachuCardGfx",
    "name": "FlyingPikachuName",
    "rarity": "PROMOSTAR",
    "sets": [
      "PROMOTIONAL",
      "PRO"
    ],
    "id": "FLYING_PIKACHU",
    "hp": 40,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "LIGHTNING",
          1
        ],
        "name": "ThundershockName",
        "description": "MayInflictParalysisDescription",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "FlyingPikachuThundershockEffectCommands",
        "flags": {
          "flags1": "INFLICT_PARALYSIS",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_THUNDERSHOCK"
      },
      {
        "energy": [
          "COLORLESS",
          3
        ],
        "name": "FlyName",
        "description": "FlyDescription",
        "descriptionCont": "NONE",
        "damage": 30,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "FlyingPikachuFlyEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NULLIFY_OR_WEAKEN_ATTACK",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_QUICK_ATTACK"
      }
    ],
    "retreatCost": 1,
    "weakness": "NONE",
    "resistance": "WR_FIGHTING",
    "category": "MouseName",
    "pokedexNumber": 25,
    "unknownField1": 0,
    "level": 12,
    "length": [
      1,
      4
    ],
    "weight": 130,
    "description": "FlyingPikachuDescription",
    "aiInfo": "AI_INFO_UNK_03"
  },
  "SURFING_PIKACHU_LV13": {
    "type": "TYPE_PKMN_LIGHTNING",
    "gfx": "SurfingPikachuLv13CardGfx",
    "name": "SurfingPikachuName",
    "rarity": "PROMOSTAR",
    "sets": [
      "PROMOTIONAL",
      "PRO"
    ],
    "id": "SURFING_PIKACHU_LV13",
    "hp": 50,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "WATER",
          2
        ],
        "name": "SurfName",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 30,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_WATER_JETS"
      },
      {
        "energy": [
          0
        ],
        "name": "NONE",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_NONE"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_FIGHTING",
    "resistance": "NONE",
    "category": "MouseName",
    "pokedexNumber": 25,
    "unknownField1": 0,
    "level": 13,
    "length": [
      1,
      4
    ],
    "weight": 130,
    "description": "SurfingPikachuDescription",
    "aiInfo": 0
  },
  "SURFING_PIKACHU_ALT_LV13": {
    "type": "TYPE_PKMN_LIGHTNING",
    "gfx": "SurfingPikachuAltLv13CardGfx",
    "name": "SurfingPikachuName",
    "rarity": "PROMOSTAR",
    "sets": [
      "PROMOTIONAL",
      "PRO"
    ],
    "id": "SURFING_PIKACHU_ALT_LV13",
    "hp": 50,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "WATER",
          2
        ],
        "name": "SurfName",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 30,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_WATER_JETS"
      },
      {
        "energy": [
          0
        ],
        "name": "NONE",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_NONE"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_FIGHTING",
    "resistance": "NONE",
    "category": "MouseName",
    "pokedexNumber": 25,
    "unknownField1": 0,
    "level": 13,
    "length": [
      1,
      4
    ],
    "weight": 130,
    "description": "SurfingPikachuDescription",
    "aiInfo": 0
  },
  "RAICHU_LV40": {
    "type": "TYPE_PKMN_LIGHTNING",
    "gfx": "RaichuLv40CardGfx",
    "name": "RaichuName",
    "rarity": "STAR",
    "sets": [
      "COLOSSEUM",
      "NONE"
    ],
    "id": "RAICHU_LV40",
    "hp": 80,
    "stage": "STAGE1",
    "preEvoName": "PikachuName",
    "attacks": [
      {
        "energy": [
          "LIGHTNING",
          1,
          "COLORLESS",
          2
        ],
        "name": "AgilityName",
        "description": "RaichusAgilityDescription",
        "descriptionCont": "NONE",
        "damage": 20,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "RaichuAgilityEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NULLIFY_OR_WEAKEN_ATTACK",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_QUICK_ATTACK"
      },
      {
        "energy": [
          "LIGHTNING",
          3,
          "COLORLESS",
          1
        ],
        "name": "ThunderName",
        "description": "RaichusThunderDescription",
        "descriptionCont": "NONE",
        "damage": 60,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "RaichuThunderEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_THUNDER"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_FIGHTING",
    "resistance": "NONE",
    "category": "MouseName",
    "pokedexNumber": 26,
    "unknownField1": 0,
    "level": 40,
    "length": [
      2,
      7
    ],
    "weight": 660,
    "description": "RaichuLv40Description",
    "aiInfo": 0
  },
  "RAICHU_LV45": {
    "type": "TYPE_PKMN_LIGHTNING",
    "gfx": "RaichuLv45CardGfx",
    "name": "RaichuName",
    "rarity": "STAR",
    "sets": [
      "MYSTERY",
      "FOSSIL"
    ],
    "id": "RAICHU_LV45",
    "hp": 90,
    "stage": "STAGE1",
    "preEvoName": "PikachuName",
    "attacks": [
      {
        "energy": [
          "LIGHTNING",
          4
        ],
        "name": "GigashockName",
        "description": "GigashockDescription",
        "descriptionCont": "NONE",
        "damage": 30,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "RaichuGigashockEffectCommands",
        "flags": {
          "flags1": "DAMAGE_TO_OPPONENT_BENCH",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 10,
        "animation": "ATK_ANIM_THUNDER_WHOLE_SCREEN"
      },
      {
        "energy": [
          0
        ],
        "name": "NONE",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_NONE"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_FIGHTING",
    "resistance": "NONE",
    "category": "MouseName",
    "pokedexNumber": 26,
    "unknownField1": 0,
    "level": 45,
    "length": [
      2,
      7
    ],
    "weight": 660,
    "description": "RaichuLv45Description",
    "aiInfo": 0
  },
  "MAGNEMITE_LV13": {
    "type": "TYPE_PKMN_LIGHTNING",
    "gfx": "MagnemiteLv13CardGfx",
    "name": "MagnemiteName",
    "rarity": "CIRCLE",
    "sets": [
      "COLOSSEUM",
      "NONE"
    ],
    "id": "MAGNEMITE_LV13",
    "hp": 40,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "LIGHTNING",
          1
        ],
        "name": "ThunderWaveName",
        "description": "MayInflictParalysisDescription",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "MagnemiteThunderWaveEffectCommands",
        "flags": {
          "flags1": "INFLICT_PARALYSIS",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_THUNDER_WAVE"
      },
      {
        "energy": [
          "LIGHTNING",
          1,
          "COLORLESS",
          1
        ],
        "name": "SelfdestructName",
        "description": "MagnemitesSelfdestructDescription",
        "descriptionCont": "NONE",
        "damage": 40,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "MagnemiteSelfdestructEffectCommands",
        "flags": {
          "flags1": "HIGH_RECOIL",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 40,
        "animation": "ATK_ANIM_SELFDESTRUCT"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_FIGHTING",
    "resistance": "NONE",
    "category": "MagnetName",
    "pokedexNumber": 81,
    "unknownField1": 0,
    "level": 13,
    "length": [
      1,
      0
    ],
    "weight": 130,
    "description": "MagnemiteLv13Description",
    "aiInfo": [
      "AI_INFO_UNK_03",
      "HAS_EVOLUTION"
    ]
  },
  "MAGNEMITE_LV15": {
    "type": "TYPE_PKMN_LIGHTNING",
    "gfx": "MagnemiteLv15CardGfx",
    "name": "MagnemiteName",
    "rarity": "CIRCLE",
    "sets": [
      "LABORATORY",
      "GB"
    ],
    "id": "MAGNEMITE_LV15",
    "hp": 40,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "COLORLESS",
          1
        ],
        "name": "TackleName",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_HIT"
      },
      {
        "energy": [
          "LIGHTNING",
          1,
          "COLORLESS",
          1
        ],
        "name": "MagneticStormName",
        "description": "MagneticStormDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "RESIDUAL",
        "effectCommands": "MagnemiteMagneticStormEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "FLAG_2_BIT_5",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_MAGNETIC_STORM"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_FIGHTING",
    "resistance": "NONE",
    "category": "MagnetName",
    "pokedexNumber": 81,
    "unknownField1": 0,
    "level": 15,
    "length": [
      1,
      0
    ],
    "weight": 130,
    "description": "MagnemiteLv15Description",
    "aiInfo": [
      "AI_INFO_UNK_03",
      "HAS_EVOLUTION"
    ]
  },
  "MAGNETON_LV28": {
    "type": "TYPE_PKMN_LIGHTNING",
    "gfx": "MagnetonLv28CardGfx",
    "name": "MagnetonName",
    "rarity": "STAR",
    "sets": [
      "COLOSSEUM",
      "NONE"
    ],
    "id": "MAGNETON_LV28",
    "hp": 60,
    "stage": "STAGE1",
    "preEvoName": "MagnemiteName",
    "attacks": [
      {
        "energy": [
          "LIGHTNING",
          2,
          "COLORLESS",
          1
        ],
        "name": "ThunderWaveName",
        "description": "MayInflictParalysisDescription",
        "descriptionCont": "NONE",
        "damage": 30,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "MagnetonThunderWaveEffectCommands",
        "flags": {
          "flags1": "INFLICT_PARALYSIS",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_THUNDER_WAVE"
      },
      {
        "energy": [
          "LIGHTNING",
          2,
          "COLORLESS",
          2
        ],
        "name": "SelfdestructName",
        "description": "MagnetonLv28sSelfdestructDescription",
        "descriptionCont": "NONE",
        "damage": 80,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "MagnetonLv28SelfdestructEffectCommands",
        "flags": {
          "flags1": "HIGH_RECOIL",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 80,
        "animation": "ATK_ANIM_BIG_SELFDESTRUCTION"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_FIGHTING",
    "resistance": "NONE",
    "category": "MagnetName",
    "pokedexNumber": 82,
    "unknownField1": 0,
    "level": 28,
    "length": [
      3,
      3
    ],
    "weight": 1320,
    "description": "MagnetonLv28Description",
    "aiInfo": 0
  },
  "MAGNETON_LV35": {
    "type": "TYPE_PKMN_LIGHTNING",
    "gfx": "MagnetonLv35CardGfx",
    "name": "MagnetonName",
    "rarity": "STAR",
    "sets": [
      "LABORATORY",
      "FOSSIL"
    ],
    "id": "MAGNETON_LV35",
    "hp": 80,
    "stage": "STAGE1",
    "preEvoName": "MagnemiteName",
    "attacks": [
      {
        "energy": [
          "LIGHTNING",
          1,
          "COLORLESS",
          1
        ],
        "name": "SonicboomName",
        "description": "SonicboomDescription",
        "descriptionCont": "NONE",
        "damage": 20,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "MagnetonSonicboomEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_SONICBOOM"
      },
      {
        "energy": [
          "LIGHTNING",
          4
        ],
        "name": "SelfdestructName",
        "description": "MagnetonLv35sSelfdestructDescription",
        "descriptionCont": "NONE",
        "damage": 100,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "MagnetonLv35SelfdestructEffectCommands",
        "flags": {
          "flags1": "HIGH_RECOIL",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 100,
        "animation": "ATK_ANIM_BIG_SELFDESTRUCTION"
      }
    ],
    "retreatCost": 2,
    "weakness": "WR_FIGHTING",
    "resistance": "NONE",
    "category": "MagnetName",
    "pokedexNumber": 82,
    "unknownField1": 0,
    "level": 35,
    "length": [
      3,
      3
    ],
    "weight": 1320,
    "description": "MagnetonLv35Description",
    "aiInfo": 0
  },
  "VOLTORB": {
    "type": "TYPE_PKMN_LIGHTNING",
    "gfx": "VoltorbCardGfx",
    "name": "VoltorbName",
    "rarity": "CIRCLE",
    "sets": [
      "MYSTERY",
      "NONE"
    ],
    "id": "VOLTORB",
    "hp": 40,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "COLORLESS",
          1
        ],
        "name": "TackleName",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_HIT"
      },
      {
        "energy": [
          0
        ],
        "name": "NONE",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_NONE"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_FIGHTING",
    "resistance": "NONE",
    "category": "BallName",
    "pokedexNumber": 100,
    "unknownField1": 0,
    "level": 10,
    "length": [
      1,
      8
    ],
    "weight": 230,
    "description": "VoltorbDescription",
    "aiInfo": [
      "AI_INFO_UNK_05",
      "HAS_EVOLUTION"
    ]
  },
  "ELECTRODE_LV35": {
    "type": "TYPE_PKMN_LIGHTNING",
    "gfx": "ElectrodeLv35CardGfx",
    "name": "ElectrodeName",
    "rarity": "STAR",
    "sets": [
      "LABORATORY",
      "GB"
    ],
    "id": "ELECTRODE_LV35",
    "hp": 70,
    "stage": "STAGE1",
    "preEvoName": "VoltorbName",
    "attacks": [
      {
        "energy": [
          "LIGHTNING",
          2
        ],
        "name": "SonicboomName",
        "description": "SonicboomDescription",
        "descriptionCont": "NONE",
        "damage": 30,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "ElectrodeSonicboomEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_SONICBOOM"
      },
      {
        "energy": [
          "LIGHTNING",
          3
        ],
        "name": "EnergySpikeName",
        "description": "EnergySpikeDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "RESIDUAL",
        "effectCommands": "ElectrodeEnergySpikeEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "SPECIAL_AI_HANDLING"
        },
        "priority": 0,
        "animation": "ATK_ANIM_GLOW_EFFECT"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_FIGHTING",
    "resistance": "NONE",
    "category": "BallName",
    "pokedexNumber": 101,
    "unknownField1": 0,
    "level": 35,
    "length": [
      3,
      11
    ],
    "weight": 1470,
    "description": "ElectrodeLv35Description",
    "aiInfo": 0
  },
  "ELECTRODE_LV42": {
    "type": "TYPE_PKMN_LIGHTNING",
    "gfx": "ElectrodeLv42CardGfx",
    "name": "ElectrodeName",
    "rarity": "STAR",
    "sets": [
      "MYSTERY",
      "JUNGLE"
    ],
    "id": "ELECTRODE_LV42",
    "hp": 90,
    "stage": "STAGE1",
    "preEvoName": "VoltorbName",
    "attacks": [
      {
        "energy": [
          "COLORLESS",
          2
        ],
        "name": "TackleName",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 20,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_HIT"
      },
      {
        "energy": [
          "LIGHTNING",
          3
        ],
        "name": "ChainLightningName",
        "description": "ChainLightningDescription",
        "descriptionCont": "NONE",
        "damage": 20,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "ElectrodeChainLightningEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "SPECIAL_AI_HANDLING"
        },
        "priority": 0,
        "animation": "ATK_ANIM_CHAIN_LIGHTNING"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_FIGHTING",
    "resistance": "NONE",
    "category": "BallName",
    "pokedexNumber": 101,
    "unknownField1": 0,
    "level": 42,
    "length": [
      3,
      11
    ],
    "weight": 1470,
    "description": "ElectrodeLv42Description",
    "aiInfo": 0
  },
  "ELECTABUZZ_LV20": {
    "type": "TYPE_PKMN_LIGHTNING",
    "gfx": "ElectabuzzLv20CardGfx",
    "name": "ElectabuzzName",
    "rarity": "PROMOSTAR",
    "sets": [
      "PROMOTIONAL",
      "PRO"
    ],
    "id": "ELECTABUZZ_LV20",
    "hp": 60,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "LIGHTNING",
          1
        ],
        "name": "LightScreenName",
        "description": "LightScreenDescription",
        "descriptionCont": "LightScreenDescriptionCont",
        "damage": 0,
        "category": "RESIDUAL",
        "effectCommands": "ElectabuzzLightScreenEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NULLIFY_OR_WEAKEN_ATTACK",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_BARRIER"
      },
      {
        "energy": [
          "COLORLESS",
          2
        ],
        "name": "QuickAttackName",
        "description": "ElectabuzzsQuickAttackDescription",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_PLUS",
        "effectCommands": "ElectabuzzQuickAttackEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_QUICK_ATTACK"
      }
    ],
    "retreatCost": 2,
    "weakness": "WR_FIGHTING",
    "resistance": "NONE",
    "category": "ElectricName",
    "pokedexNumber": 125,
    "unknownField1": 0,
    "level": 20,
    "length": [
      3,
      7
    ],
    "weight": 660,
    "description": "ElectabuzzLv20Description",
    "aiInfo": 0
  },
  "ELECTABUZZ_LV35": {
    "type": "TYPE_PKMN_LIGHTNING",
    "gfx": "ElectabuzzLv35CardGfx",
    "name": "ElectabuzzName",
    "rarity": "STAR",
    "sets": [
      "COLOSSEUM",
      "NONE"
    ],
    "id": "ELECTABUZZ_LV35",
    "hp": 70,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "LIGHTNING",
          1
        ],
        "name": "ThundershockName",
        "description": "MayInflictParalysisDescription",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "ElectabuzzThundershockEffectCommands",
        "flags": {
          "flags1": "INFLICT_PARALYSIS",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_THUNDERSHOCK"
      },
      {
        "energy": [
          "LIGHTNING",
          1,
          "COLORLESS",
          1
        ],
        "name": "ThunderpunchName",
        "description": "ThunderpunchDescription",
        "descriptionCont": "NONE",
        "damage": 30,
        "category": "DAMAGE_PLUS",
        "effectCommands": "ElectabuzzThunderpunchEffectCommands",
        "flags": {
          "flags1": "LOW_RECOIL",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_THUNDERPUNCH"
      }
    ],
    "retreatCost": 2,
    "weakness": "WR_FIGHTING",
    "resistance": "NONE",
    "category": "ElectricName",
    "pokedexNumber": 125,
    "unknownField1": 0,
    "level": 35,
    "length": [
      3,
      7
    ],
    "weight": 660,
    "description": "ElectabuzzLv35Description",
    "aiInfo": 0
  },
  "JOLTEON_LV24": {
    "type": "TYPE_PKMN_LIGHTNING",
    "gfx": "JolteonLv24CardGfx",
    "name": "JolteonName",
    "rarity": "DIAMOND",
    "sets": [
      "MYSTERY",
      "GB"
    ],
    "id": "JOLTEON_LV24",
    "hp": 60,
    "stage": "STAGE1",
    "preEvoName": "EeveeName",
    "attacks": [
      {
        "energy": [
          "COLORLESS",
          2
        ],
        "name": "DoubleKickName",
        "description": "DoubleAttackX20Description",
        "descriptionCont": "NONE",
        "damage": 20,
        "category": "DAMAGE_X",
        "effectCommands": "JolteonDoubleKickEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_HIT"
      },
      {
        "energy": [
          "COLORLESS",
          4
        ],
        "name": "StunNeedleName",
        "description": "MayInflictParalysisDescription",
        "descriptionCont": "NONE",
        "damage": 30,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "JolteonStunNeedleEffectCommands",
        "flags": {
          "flags1": "INFLICT_PARALYSIS",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_NEEDLES"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_FIGHTING",
    "resistance": "NONE",
    "category": "LightningName",
    "pokedexNumber": 135,
    "unknownField1": 0,
    "level": 24,
    "length": [
      2,
      7
    ],
    "weight": 540,
    "description": "JolteonLv24Description",
    "aiInfo": 0
  },
  "JOLTEON_LV29": {
    "type": "TYPE_PKMN_LIGHTNING",
    "gfx": "JolteonLv29CardGfx",
    "name": "JolteonName",
    "rarity": "STAR",
    "sets": [
      "EVOLUTION",
      "JUNGLE"
    ],
    "id": "JOLTEON_LV29",
    "hp": 70,
    "stage": "STAGE1",
    "preEvoName": "EeveeName",
    "attacks": [
      {
        "energy": [
          "COLORLESS",
          2
        ],
        "name": "QuickAttackName",
        "description": "QuickAttackDescription",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_PLUS",
        "effectCommands": "JolteonQuickAttackEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_QUICK_ATTACK"
      },
      {
        "energy": [
          "LIGHTNING",
          2,
          "COLORLESS",
          1
        ],
        "name": "PinMissileName",
        "description": "QuadrupleAttackX20Description",
        "descriptionCont": "NONE",
        "damage": 20,
        "category": "DAMAGE_X",
        "effectCommands": "JolteonPinMissileEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_NEEDLES"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_FIGHTING",
    "resistance": "NONE",
    "category": "LightningName",
    "pokedexNumber": 135,
    "unknownField1": 0,
    "level": 29,
    "length": [
      2,
      7
    ],
    "weight": 540,
    "description": "JolteonLv29Description",
    "aiInfo": 0
  },
  "ZAPDOS_LV40": {
    "type": "TYPE_PKMN_LIGHTNING",
    "gfx": "ZapdosLv40CardGfx",
    "name": "ZapdosName",
    "rarity": "STAR",
    "sets": [
      "MYSTERY",
      "FOSSIL"
    ],
    "id": "ZAPDOS_LV40",
    "hp": 80,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "LIGHTNING",
          4
        ],
        "name": "ThunderstormName",
        "description": "ThunderstormDescription",
        "descriptionCont": "NONE",
        "damage": 40,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "ZapdosThunderstormEffectCommands",
        "flags": {
          "flags1": [
            "LOW_RECOIL",
            "DAMAGE_TO_OPPONENT_BENCH"
          ],
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_THUNDERSTORM"
      },
      {
        "energy": [
          0
        ],
        "name": "NONE",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_NONE"
      }
    ],
    "retreatCost": 2,
    "weakness": "NONE",
    "resistance": "WR_FIGHTING",
    "category": "ElectricName",
    "pokedexNumber": 145,
    "unknownField1": 0,
    "level": 40,
    "length": [
      5,
      3
    ],
    "weight": 1160,
    "description": "ZapdosLv40Description",
    "aiInfo": 0
  },
  "ZAPDOS_LV64": {
    "type": "TYPE_PKMN_LIGHTNING",
    "gfx": "ZapdosLv64CardGfx",
    "name": "ZapdosName",
    "rarity": "STAR",
    "sets": [
      "COLOSSEUM",
      "NONE"
    ],
    "id": "ZAPDOS_LV64",
    "hp": 90,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "LIGHTNING",
          3,
          "COLORLESS",
          1
        ],
        "name": "ThunderName",
        "description": "ZapdosThunderDescription",
        "descriptionCont": "NONE",
        "damage": 60,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "ZapdosThunderEffectCommands",
        "flags": {
          "flags1": "LOW_RECOIL",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_THUNDER"
      },
      {
        "energy": [
          "LIGHTNING",
          4
        ],
        "name": "ThunderboltName",
        "description": "ThunderboltDescription",
        "descriptionCont": "NONE",
        "damage": 100,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "ZapdosThunderboltEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "DISCARD_ENERGY",
          "flags3": "NONE"
        },
        "priority": 9,
        "animation": "ATK_ANIM_THUNDERBOLT"
      }
    ],
    "retreatCost": 3,
    "weakness": "NONE",
    "resistance": "WR_FIGHTING",
    "category": "ElectricName",
    "pokedexNumber": 145,
    "unknownField1": 0,
    "level": 64,
    "length": [
      5,
      3
    ],
    "weight": 1160,
    "description": "ZapdosLv64Description",
    "aiInfo": 0
  },
  "ZAPDOS_LV68": {
    "type": "TYPE_PKMN_LIGHTNING",
    "gfx": "ZapdosLv68CardGfx",
    "name": "ZapdosName",
    "rarity": "STAR",
    "sets": [
      "PROMOTIONAL",
      "GB"
    ],
    "id": "ZAPDOS_LV68",
    "hp": 100,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          0
        ],
        "name": "PealOfThunderName",
        "description": "PealOfThunderDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "POKEMON_POWER",
        "effectCommands": "ZapdosPealOfThunderEffectCommands",
        "flags": {
          "flags1": "DAMAGE_TO_OPPONENT_BENCH",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_PEAL_OF_THUNDER"
      },
      {
        "energy": [
          "LIGHTNING",
          3
        ],
        "name": "BigThunderName",
        "description": "BigThunderDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "RESIDUAL",
        "effectCommands": "ZapdosBigThunderEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "SPECIAL_AI_HANDLING"
        },
        "priority": 0,
        "animation": "ATK_ANIM_BIG_THUNDER"
      }
    ],
    "retreatCost": 2,
    "weakness": "NONE",
    "resistance": "WR_FIGHTING",
    "category": "ElectricName",
    "pokedexNumber": 145,
    "unknownField1": 0,
    "level": 68,
    "length": [
      5,
      3
    ],
    "weight": 1160,
    "description": "ZapdosLv68Description",
    "aiInfo": 0
  },
  "SANDSHREW": {
    "type": "TYPE_PKMN_FIGHTING",
    "gfx": "SandshrewCardGfx",
    "name": "SandshrewName",
    "rarity": "CIRCLE",
    "sets": [
      "EVOLUTION",
      "NONE"
    ],
    "id": "SANDSHREW",
    "hp": 40,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "FIGHTING",
          1
        ],
        "name": "SandAttackName",
        "description": "OpponentAttackMayDoNothingDescription",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "SandshrewSandAttackEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NULLIFY_OR_WEAKEN_ATTACK",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_DARK_GAS"
      },
      {
        "energy": [
          0
        ],
        "name": "NONE",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_NONE"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_GRASS",
    "resistance": "WR_LIGHTNING",
    "category": "MouseName",
    "pokedexNumber": 27,
    "unknownField1": 0,
    "level": 12,
    "length": [
      2,
      0
    ],
    "weight": 260,
    "description": "SandshrewDescription",
    "aiInfo": [
      "AI_INFO_UNK_03",
      "HAS_EVOLUTION"
    ]
  },
  "SANDSLASH": {
    "type": "TYPE_PKMN_FIGHTING",
    "gfx": "SandslashCardGfx",
    "name": "SandslashName",
    "rarity": "DIAMOND",
    "sets": [
      "EVOLUTION",
      "FOSSIL"
    ],
    "id": "SANDSLASH",
    "hp": 70,
    "stage": "STAGE1",
    "preEvoName": "SandshrewName",
    "attacks": [
      {
        "energy": [
          "COLORLESS",
          2
        ],
        "name": "SlashName",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 20,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_SLASH"
      },
      {
        "energy": [
          "FIGHTING",
          2
        ],
        "name": "FurySwipesName",
        "description": "TripleAttackX20Description",
        "descriptionCont": "NONE",
        "damage": 20,
        "category": "DAMAGE_X",
        "effectCommands": "SandslashFurySwipesEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_MULTIPLE_SLASH"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_GRASS",
    "resistance": "WR_LIGHTNING",
    "category": "MouseName",
    "pokedexNumber": 28,
    "unknownField1": 0,
    "level": 33,
    "length": [
      3,
      3
    ],
    "weight": 650,
    "description": "SandslashDescription",
    "aiInfo": 0
  },
  "DIGLETT": {
    "type": "TYPE_PKMN_FIGHTING",
    "gfx": "DiglettCardGfx",
    "name": "DiglettName",
    "rarity": "CIRCLE",
    "sets": [
      "COLOSSEUM",
      "NONE"
    ],
    "id": "DIGLETT",
    "hp": 30,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "FIGHTING",
          1
        ],
        "name": "DigName",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_HIT"
      },
      {
        "energy": [
          "FIGHTING",
          2
        ],
        "name": "MudSlapName",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 30,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_HIT"
      }
    ],
    "retreatCost": 0,
    "weakness": "WR_GRASS",
    "resistance": "WR_LIGHTNING",
    "category": "MoleName",
    "pokedexNumber": 50,
    "unknownField1": 0,
    "level": 8,
    "length": [
      0,
      8
    ],
    "weight": 20,
    "description": "DiglettDescription",
    "aiInfo": [
      "AI_INFO_UNK_03",
      "HAS_EVOLUTION"
    ]
  },
  "DUGTRIO": {
    "type": "TYPE_PKMN_FIGHTING",
    "gfx": "DugtrioCardGfx",
    "name": "DugtrioName",
    "rarity": "STAR",
    "sets": [
      "COLOSSEUM",
      "NONE"
    ],
    "id": "DUGTRIO",
    "hp": 70,
    "stage": "STAGE1",
    "preEvoName": "DiglettName",
    "attacks": [
      {
        "energy": [
          "FIGHTING",
          2,
          "COLORLESS",
          1
        ],
        "name": "SlashName",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 40,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_SLASH"
      },
      {
        "energy": [
          "FIGHTING",
          4
        ],
        "name": "EarthquakeName",
        "description": "EarthquakeDescription",
        "descriptionCont": "NONE",
        "damage": 70,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "DugtrioEarthquakeEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "SPECIAL_AI_HANDLING"
        },
        "priority": 0,
        "animation": "ATK_ANIM_HIT"
      }
    ],
    "retreatCost": 2,
    "weakness": "WR_GRASS",
    "resistance": "WR_LIGHTNING",
    "category": "MoleName",
    "pokedexNumber": 51,
    "unknownField1": 0,
    "level": 36,
    "length": [
      2,
      4
    ],
    "weight": 730,
    "description": "DugtrioDescription",
    "aiInfo": 0
  },
  "MANKEY": {
    "type": "TYPE_PKMN_FIGHTING",
    "gfx": "MankeyCardGfx",
    "name": "MankeyName",
    "rarity": "CIRCLE",
    "sets": [
      "MYSTERY",
      "JUNGLE"
    ],
    "id": "MANKEY",
    "hp": 30,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          0
        ],
        "name": "PeekName",
        "description": "PeekDescription",
        "descriptionCont": "PeekDescriptionCont",
        "damage": 0,
        "category": "POKEMON_POWER",
        "effectCommands": "MankeyPeekEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "FLAG_2_BIT_5",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_PKMN_POWER_1"
      },
      {
        "energy": [
          "COLORLESS",
          1
        ],
        "name": "ScratchName",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_SLASH"
      }
    ],
    "retreatCost": 0,
    "weakness": "WR_PSYCHIC",
    "resistance": "NONE",
    "category": "PigMonkeyName",
    "pokedexNumber": 56,
    "unknownField1": 0,
    "level": 7,
    "length": [
      1,
      8
    ],
    "weight": 620,
    "description": "MankeyDescription",
    "aiInfo": [
      "AI_INFO_BENCH_UTILITY",
      "HAS_EVOLUTION"
    ]
  },
  "PRIMEAPE": {
    "type": "TYPE_PKMN_FIGHTING",
    "gfx": "PrimeapeCardGfx",
    "name": "PrimeapeName",
    "rarity": "DIAMOND",
    "sets": [
      "MYSTERY",
      "JUNGLE"
    ],
    "id": "PRIMEAPE",
    "hp": 70,
    "stage": "STAGE1",
    "preEvoName": "MankeyName",
    "attacks": [
      {
        "energy": [
          "FIGHTING",
          2
        ],
        "name": "FurySwipesName",
        "description": "TripleAttackX20Description",
        "descriptionCont": "NONE",
        "damage": 20,
        "category": "DAMAGE_X",
        "effectCommands": "PrimeapeFurySwipesEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_MULTIPLE_SLASH"
      },
      {
        "energy": [
          "FIGHTING",
          2,
          "COLORLESS",
          1
        ],
        "name": "TantrumName",
        "description": "TantrumDescription",
        "descriptionCont": "NONE",
        "damage": 50,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "PrimeapeTantrumEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "FLAG_2_BIT_7",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_RAMPAGE"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_PSYCHIC",
    "resistance": "NONE",
    "category": "PigMonkeyName",
    "pokedexNumber": 57,
    "unknownField1": 0,
    "level": 35,
    "length": [
      3,
      3
    ],
    "weight": 710,
    "description": "PrimeapeDescription",
    "aiInfo": 0
  },
  "MACHOP": {
    "type": "TYPE_PKMN_FIGHTING",
    "gfx": "MachopCardGfx",
    "name": "MachopName",
    "rarity": "CIRCLE",
    "sets": [
      "COLOSSEUM",
      "NONE"
    ],
    "id": "MACHOP",
    "hp": 50,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "FIGHTING",
          1
        ],
        "name": "LowKickName",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 20,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_HIT"
      },
      {
        "energy": [
          0
        ],
        "name": "NONE",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_NONE"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_PSYCHIC",
    "resistance": "NONE",
    "category": "SuperpowerName",
    "pokedexNumber": 66,
    "unknownField1": 0,
    "level": 20,
    "length": [
      2,
      7
    ],
    "weight": 430,
    "description": "MachopDescription",
    "aiInfo": [
      "AI_INFO_UNK_05",
      "HAS_EVOLUTION"
    ]
  },
  "MACHOKE": {
    "type": "TYPE_PKMN_FIGHTING",
    "gfx": "MachokeCardGfx",
    "name": "MachokeName",
    "rarity": "DIAMOND",
    "sets": [
      "EVOLUTION",
      "NONE"
    ],
    "id": "MACHOKE",
    "hp": 80,
    "stage": "STAGE1",
    "preEvoName": "MachopName",
    "attacks": [
      {
        "energy": [
          "FIGHTING",
          2,
          "COLORLESS",
          1
        ],
        "name": "KarateChopName",
        "description": "KarateChopDescription",
        "descriptionCont": "NONE",
        "damage": 50,
        "category": "DAMAGE_MINUS",
        "effectCommands": "MachokeKarateChopEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "FLAG_2_BIT_7",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_HIT"
      },
      {
        "energy": [
          "FIGHTING",
          2,
          "COLORLESS",
          2
        ],
        "name": "SubmissionName",
        "description": "SubmissionDescription",
        "descriptionCont": "NONE",
        "damage": 60,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "MachokeSubmissionEffectCommands",
        "flags": {
          "flags1": "LOW_RECOIL",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 20,
        "animation": "ATK_ANIM_HIT_RECOIL"
      }
    ],
    "retreatCost": 3,
    "weakness": "WR_PSYCHIC",
    "resistance": "NONE",
    "category": "SuperpowerName",
    "pokedexNumber": 67,
    "unknownField1": 0,
    "level": 40,
    "length": [
      4,
      11
    ],
    "weight": 1550,
    "description": "MachokeDescription",
    "aiInfo": "HAS_EVOLUTION"
  },
  "MACHAMP": {
    "type": "TYPE_PKMN_FIGHTING",
    "gfx": "MachampCardGfx",
    "name": "MachampName",
    "rarity": "STAR",
    "sets": [
      "EVOLUTION",
      "NONE"
    ],
    "id": "MACHAMP",
    "hp": 100,
    "stage": "STAGE2",
    "preEvoName": "MachokeName",
    "attacks": [
      {
        "energy": [
          0
        ],
        "name": "StrikesBackName",
        "description": "StrikesBackDescription",
        "descriptionCont": "StrikesBackDescriptionCont",
        "damage": 0,
        "category": "POKEMON_POWER",
        "effectCommands": "MachampStrikesBackEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_GLOW_EFFECT"
      },
      {
        "energy": [
          "FIGHTING",
          3,
          "COLORLESS",
          1
        ],
        "name": "SeismicTossName",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 60,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_SEISMIC_TOSS"
      }
    ],
    "retreatCost": 3,
    "weakness": "WR_PSYCHIC",
    "resistance": "NONE",
    "category": "SuperpowerName",
    "pokedexNumber": 68,
    "unknownField1": 0,
    "level": 67,
    "length": [
      5,
      3
    ],
    "weight": 2870,
    "description": "MachampDescription",
    "aiInfo": 0
  },
  "GEODUDE": {
    "type": "TYPE_PKMN_FIGHTING",
    "gfx": "GeodudeCardGfx",
    "name": "GeodudeName",
    "rarity": "CIRCLE",
    "sets": [
      "EVOLUTION",
      "FOSSIL"
    ],
    "id": "GEODUDE",
    "hp": 50,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "FIGHTING",
          1,
          "COLORLESS",
          1
        ],
        "name": "StoneBarrageName",
        "description": "StoneBarrageDescription",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_X",
        "effectCommands": "GeodudeStoneBarrageEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_STONE_BARRAGE"
      },
      {
        "energy": [
          0
        ],
        "name": "NONE",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_NONE"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_GRASS",
    "resistance": "NONE",
    "category": "RockName",
    "pokedexNumber": 74,
    "unknownField1": 0,
    "level": 16,
    "length": [
      1,
      4
    ],
    "weight": 440,
    "description": "GeodudeDescription",
    "aiInfo": [
      "AI_INFO_UNK_03",
      "HAS_EVOLUTION"
    ]
  },
  "GRAVELER": {
    "type": "TYPE_PKMN_FIGHTING",
    "gfx": "GravelerCardGfx",
    "name": "GravelerName",
    "rarity": "DIAMOND",
    "sets": [
      "EVOLUTION",
      "FOSSIL"
    ],
    "id": "GRAVELER",
    "hp": 60,
    "stage": "STAGE1",
    "preEvoName": "GeodudeName",
    "attacks": [
      {
        "energy": [
          "FIGHTING",
          2
        ],
        "name": "HardenName",
        "description": "GravelersHardenDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "RESIDUAL",
        "effectCommands": "GravelerHardenEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NULLIFY_OR_WEAKEN_ATTACK",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_PROTECT"
      },
      {
        "energy": [
          "FIGHTING",
          2,
          "COLORLESS",
          1
        ],
        "name": "RockThrowName",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 40,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_ROCK_THROW"
      }
    ],
    "retreatCost": 2,
    "weakness": "WR_GRASS",
    "resistance": "NONE",
    "category": "RockName",
    "pokedexNumber": 75,
    "unknownField1": 0,
    "level": 29,
    "length": [
      3,
      3
    ],
    "weight": 2320,
    "description": "GravelerDescription",
    "aiInfo": "HAS_EVOLUTION"
  },
  "GOLEM": {
    "type": "TYPE_PKMN_FIGHTING",
    "gfx": "GolemCardGfx",
    "name": "GolemName",
    "rarity": "DIAMOND",
    "sets": [
      "EVOLUTION",
      "FOSSIL"
    ],
    "id": "GOLEM",
    "hp": 80,
    "stage": "STAGE2",
    "preEvoName": "GravelerName",
    "attacks": [
      {
        "energy": [
          "FIGHTING",
          3,
          "COLORLESS",
          1
        ],
        "name": "AvalancheName",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 60,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_ROCK_THROW"
      },
      {
        "energy": [
          "FIGHTING",
          4
        ],
        "name": "SelfdestructName",
        "description": "GolemsSelfdestructDescription",
        "descriptionCont": "NONE",
        "damage": 100,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "GolemSelfdestructEffectCommands",
        "flags": {
          "flags1": "HIGH_RECOIL",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 100,
        "animation": "ATK_ANIM_BIG_SELFDESTRUCTION"
      }
    ],
    "retreatCost": 4,
    "weakness": "WR_GRASS",
    "resistance": "NONE",
    "category": "MegatonName",
    "pokedexNumber": 76,
    "unknownField1": 0,
    "level": 36,
    "length": [
      4,
      7
    ],
    "weight": 6620,
    "description": "GolemDescription",
    "aiInfo": 0
  },
  "ONIX": {
    "type": "TYPE_PKMN_FIGHTING",
    "gfx": "OnixCardGfx",
    "name": "OnixName",
    "rarity": "CIRCLE",
    "sets": [
      "LABORATORY",
      "NONE"
    ],
    "id": "ONIX",
    "hp": 90,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "FIGHTING",
          1
        ],
        "name": "RockThrowName",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_ROCK_THROW"
      },
      {
        "energy": [
          "FIGHTING",
          2
        ],
        "name": "HardenName",
        "description": "OnixsHardenDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "RESIDUAL",
        "effectCommands": "OnixHardenEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NULLIFY_OR_WEAKEN_ATTACK",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_PROTECT"
      }
    ],
    "retreatCost": 3,
    "weakness": "WR_GRASS",
    "resistance": "NONE",
    "category": "RockSnakeName",
    "pokedexNumber": 95,
    "unknownField1": 0,
    "level": 12,
    "length": [
      28,
      10
    ],
    "weight": 4630,
    "description": "OnixDescription",
    "aiInfo": 0
  },
  "CUBONE": {
    "type": "TYPE_PKMN_FIGHTING",
    "gfx": "CuboneCardGfx",
    "name": "CuboneName",
    "rarity": "CIRCLE",
    "sets": [
      "EVOLUTION",
      "JUNGLE"
    ],
    "id": "CUBONE",
    "hp": 40,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "COLORLESS",
          1
        ],
        "name": "SnivelName",
        "description": "SnivelDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "CuboneSnivelEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NULLIFY_OR_WEAKEN_ATTACK",
          "flags3": "NONE"
        },
        "priority": 10,
        "animation": "ATK_ANIM_CRY"
      },
      {
        "energy": [
          "FIGHTING",
          2
        ],
        "name": "RageName",
        "description": "CubonesRageDescription",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_PLUS",
        "effectCommands": "CuboneRageEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "BOOST_IF_TAKEN_DAMAGE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_HIT"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_GRASS",
    "resistance": "WR_LIGHTNING",
    "category": "LonelyName",
    "pokedexNumber": 104,
    "unknownField1": 0,
    "level": 13,
    "length": [
      1,
      4
    ],
    "weight": 140,
    "description": "CuboneDescription",
    "aiInfo": [
      "AI_INFO_UNK_03",
      "HAS_EVOLUTION"
    ]
  },
  "MAROWAK_LV26": {
    "type": "TYPE_PKMN_FIGHTING",
    "gfx": "MarowakLv26CardGfx",
    "name": "MarowakName",
    "rarity": "DIAMOND",
    "sets": [
      "LABORATORY",
      "JUNGLE"
    ],
    "id": "MAROWAK_LV26",
    "hp": 60,
    "stage": "STAGE1",
    "preEvoName": "CuboneName",
    "attacks": [
      {
        "energy": [
          "FIGHTING",
          2
        ],
        "name": "BonemerangName",
        "description": "DoubleAttackX30Description",
        "descriptionCont": "NONE",
        "damage": 30,
        "category": "DAMAGE_X",
        "effectCommands": "MarowakBonemerangEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_BONEMERANG"
      },
      {
        "energy": [
          "FIGHTING",
          2,
          "COLORLESS",
          1
        ],
        "name": "CallforFriendName",
        "description": "CallforFriendDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "RESIDUAL",
        "effectCommands": "MarowakCallforFriendEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "SPECIAL_AI_HANDLING"
        },
        "priority": 0,
        "animation": "ATK_ANIM_GLOW_EFFECT"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_GRASS",
    "resistance": "WR_LIGHTNING",
    "category": "BonekeeperName",
    "pokedexNumber": 105,
    "unknownField1": 0,
    "level": 26,
    "length": [
      3,
      3
    ],
    "weight": 990,
    "description": "MarowakLv26Description",
    "aiInfo": 0
  },
  "MAROWAK_LV32": {
    "type": "TYPE_PKMN_FIGHTING",
    "gfx": "MarowakLv32CardGfx",
    "name": "MarowakName",
    "rarity": "DIAMOND",
    "sets": [
      "EVOLUTION",
      "GB"
    ],
    "id": "MAROWAK_LV32",
    "hp": 70,
    "stage": "STAGE1",
    "preEvoName": "CuboneName",
    "attacks": [
      {
        "energy": [
          "FIGHTING",
          1,
          "COLORLESS",
          1
        ],
        "name": "BoneAttackName",
        "description": "BoneAttackDescription",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "MarowakBoneAttackEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NULLIFY_OR_WEAKEN_ATTACK",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_BONEMERANG"
      },
      {
        "energy": [
          "FIGHTING",
          3
        ],
        "name": "WailName",
        "description": "WailDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "RESIDUAL",
        "effectCommands": "MarowakWailEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "SPECIAL_AI_HANDLING"
        },
        "priority": 0,
        "animation": "ATK_ANIM_CRY"
      }
    ],
    "retreatCost": 2,
    "weakness": "WR_GRASS",
    "resistance": "WR_LIGHTNING",
    "category": "BonekeeperName",
    "pokedexNumber": 105,
    "unknownField1": 0,
    "level": 32,
    "length": [
      3,
      3
    ],
    "weight": 990,
    "description": "MarowakLv32Description",
    "aiInfo": 0
  },
  "HITMONLEE": {
    "type": "TYPE_PKMN_FIGHTING",
    "gfx": "HitmonleeCardGfx",
    "name": "HitmonleeName",
    "rarity": "STAR",
    "sets": [
      "LABORATORY",
      "FOSSIL"
    ],
    "id": "HITMONLEE",
    "hp": 60,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "FIGHTING",
          2
        ],
        "name": "StretchKickName",
        "description": "StretchKickDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "RESIDUAL",
        "effectCommands": "HitmonleeStretchKickEffectCommands",
        "flags": {
          "flags1": "DAMAGE_TO_OPPONENT_BENCH",
          "flags2": "FLAG_2_BIT_6",
          "flags3": "NONE"
        },
        "priority": 3,
        "animation": "ATK_ANIM_STRETCH_KICK"
      },
      {
        "energy": [
          "FIGHTING",
          3
        ],
        "name": "HighJumpKickName",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 50,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_PUNCH"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_PSYCHIC",
    "resistance": "NONE",
    "category": "KickingName",
    "pokedexNumber": 106,
    "unknownField1": 0,
    "level": 30,
    "length": [
      4,
      11
    ],
    "weight": 1100,
    "description": "HitmonleeDescription",
    "aiInfo": 0
  },
  "HITMONCHAN": {
    "type": "TYPE_PKMN_FIGHTING",
    "gfx": "HitmonchanCardGfx",
    "name": "HitmonchanName",
    "rarity": "STAR",
    "sets": [
      "COLOSSEUM",
      "NONE"
    ],
    "id": "HITMONCHAN",
    "hp": 70,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "FIGHTING",
          1
        ],
        "name": "JabName",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 20,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_PUNCH"
      },
      {
        "energy": [
          "FIGHTING",
          2,
          "COLORLESS",
          1
        ],
        "name": "SpecialPunch",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 40,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_PUNCH"
      }
    ],
    "retreatCost": 2,
    "weakness": "WR_PSYCHIC",
    "resistance": "NONE",
    "category": "PunchingName",
    "pokedexNumber": 107,
    "unknownField1": 0,
    "level": 33,
    "length": [
      4,
      7
    ],
    "weight": 1110,
    "description": "HitmonchanDescription",
    "aiInfo": 0
  },
  "RHYHORN": {
    "type": "TYPE_PKMN_FIGHTING",
    "gfx": "RhyhornCardGfx",
    "name": "RhyhornName",
    "rarity": "CIRCLE",
    "sets": [
      "MYSTERY",
      "JUNGLE"
    ],
    "id": "RHYHORN",
    "hp": 70,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "COLORLESS",
          1
        ],
        "name": "LeerName",
        "description": "LeerDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "RhyhornLeerEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NULLIFY_OR_WEAKEN_ATTACK",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_NONE"
      },
      {
        "energy": [
          "FIGHTING",
          1,
          "COLORLESS",
          2
        ],
        "name": "HornAttackName",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 30,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_HIT"
      }
    ],
    "retreatCost": 3,
    "weakness": "WR_GRASS",
    "resistance": "WR_LIGHTNING",
    "category": "SpikeName",
    "pokedexNumber": 111,
    "unknownField1": 0,
    "level": 18,
    "length": [
      3,
      3
    ],
    "weight": 2540,
    "description": "RhyhornDescription",
    "aiInfo": "HAS_EVOLUTION"
  },
  "RHYDON": {
    "type": "TYPE_PKMN_FIGHTING",
    "gfx": "RhydonCardGfx",
    "name": "RhydonName",
    "rarity": "DIAMOND",
    "sets": [
      "MYSTERY",
      "JUNGLE"
    ],
    "id": "RHYDON",
    "hp": 100,
    "stage": "STAGE1",
    "preEvoName": "RhyhornName",
    "attacks": [
      {
        "energy": [
          "FIGHTING",
          1,
          "COLORLESS",
          2
        ],
        "name": "HornAttackName",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 30,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_HIT"
      },
      {
        "energy": [
          "FIGHTING",
          4
        ],
        "name": "RamName",
        "description": "RamDescription",
        "descriptionCont": "RamDescriptionCont",
        "damage": 50,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "RhydonRamEffectCommands",
        "flags": {
          "flags1": "LOW_RECOIL",
          "flags2": "SWITCH_OPPONENT_POKEMON",
          "flags3": "NONE"
        },
        "priority": 20,
        "animation": "ATK_ANIM_HIT_RECOIL"
      }
    ],
    "retreatCost": 3,
    "weakness": "WR_GRASS",
    "resistance": "WR_LIGHTNING",
    "category": "DrillName",
    "pokedexNumber": 112,
    "unknownField1": 0,
    "level": 48,
    "length": [
      6,
      3
    ],
    "weight": 2650,
    "description": "RhydonDescription",
    "aiInfo": 0
  },
  "KABUTO": {
    "type": "TYPE_PKMN_FIGHTING",
    "gfx": "KabutoCardGfx",
    "name": "KabutoName",
    "rarity": "CIRCLE",
    "sets": [
      "MYSTERY",
      "FOSSIL"
    ],
    "id": "KABUTO",
    "hp": 30,
    "stage": "STAGE1",
    "preEvoName": "MysteriousFossilName",
    "attacks": [
      {
        "energy": [
          0
        ],
        "name": "KabutoArmorName",
        "description": "KabutoArmorDescription",
        "descriptionCont": "KabutoArmorDescriptionCont",
        "damage": 0,
        "category": "POKEMON_POWER",
        "effectCommands": "KabutoKabutoArmorEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_PKMN_POWER_1"
      },
      {
        "energy": [
          "COLORLESS",
          1
        ],
        "name": "ScratchName",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_SLASH"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_GRASS",
    "resistance": "NONE",
    "category": "ShellfishName",
    "pokedexNumber": 140,
    "unknownField1": 0,
    "level": 9,
    "length": [
      1,
      8
    ],
    "weight": 250,
    "description": "KabutoDescription",
    "aiInfo": [
      "AI_INFO_UNK_03",
      "HAS_EVOLUTION"
    ]
  },
  "KABUTOPS": {
    "type": "TYPE_PKMN_FIGHTING",
    "gfx": "KabutopsCardGfx",
    "name": "KabutopsName",
    "rarity": "STAR",
    "sets": [
      "MYSTERY",
      "FOSSIL"
    ],
    "id": "KABUTOPS",
    "hp": 60,
    "stage": "STAGE2",
    "preEvoName": "KabutoName",
    "attacks": [
      {
        "energy": [
          "FIGHTING",
          2
        ],
        "name": "SharpSickleName",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 30,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_SONICBOOM"
      },
      {
        "energy": [
          "FIGHTING",
          4
        ],
        "name": "AbsorbName",
        "description": "AbsorbDescription",
        "descriptionCont": "AbsorbDescriptionCont",
        "damage": 40,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "KabutopsAbsorbEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "HEAL_USER",
          "flags3": "NONE"
        },
        "priority": 2,
        "animation": "ATK_ANIM_DRAIN"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_GRASS",
    "resistance": "NONE",
    "category": "ShellfishName",
    "pokedexNumber": 141,
    "unknownField1": 0,
    "level": 30,
    "length": [
      4,
      3
    ],
    "weight": 890,
    "description": "KabutopsDescription",
    "aiInfo": 0
  },
  "AERODACTYL": {
    "type": "TYPE_PKMN_FIGHTING",
    "gfx": "AerodactylCardGfx",
    "name": "AerodactylName",
    "rarity": "STAR",
    "sets": [
      "MYSTERY",
      "FOSSIL"
    ],
    "id": "AERODACTYL",
    "hp": 60,
    "stage": "STAGE1",
    "preEvoName": "MysteriousFossilName",
    "attacks": [
      {
        "energy": [
          0
        ],
        "name": "PrehistoricPowerName",
        "description": "PrehistoricPowerDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "POKEMON_POWER",
        "effectCommands": "AerodactylPrehistoricPowerEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_PKMN_POWER_1"
      },
      {
        "energy": [
          "COLORLESS",
          3
        ],
        "name": "WingAttackName",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 30,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_HIT"
      }
    ],
    "retreatCost": 2,
    "weakness": "WR_GRASS",
    "resistance": "WR_FIGHTING",
    "category": "FossilName",
    "pokedexNumber": 142,
    "unknownField1": 0,
    "level": 28,
    "length": [
      5,
      11
    ],
    "weight": 1300,
    "description": "AerodactylDescription",
    "aiInfo": "AI_INFO_BENCH_UTILITY"
  },
  "ABRA": {
    "type": "TYPE_PKMN_PSYCHIC",
    "gfx": "AbraCardGfx",
    "name": "AbraName",
    "rarity": "CIRCLE",
    "sets": [
      "COLOSSEUM",
      "NONE"
    ],
    "id": "ABRA",
    "hp": 30,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "PSYCHIC",
          1
        ],
        "name": "PsyshockName",
        "description": "MayInflictParalysisDescription",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "AbraPsyshockEffectCommands",
        "flags": {
          "flags1": "INFLICT_PARALYSIS",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_PSYCHIC_HIT"
      },
      {
        "energy": [
          0
        ],
        "name": "NONE",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_NONE"
      }
    ],
    "retreatCost": 0,
    "weakness": "WR_PSYCHIC",
    "resistance": "NONE",
    "category": "PsiName",
    "pokedexNumber": 63,
    "unknownField1": 0,
    "level": 10,
    "length": [
      2,
      11
    ],
    "weight": 430,
    "description": "AbraDescription",
    "aiInfo": "HAS_EVOLUTION"
  },
  "KADABRA": {
    "type": "TYPE_PKMN_PSYCHIC",
    "gfx": "KadabraCardGfx",
    "name": "KadabraName",
    "rarity": "DIAMOND",
    "sets": [
      "COLOSSEUM",
      "NONE"
    ],
    "id": "KADABRA",
    "hp": 60,
    "stage": "STAGE1",
    "preEvoName": "AbraName",
    "attacks": [
      {
        "energy": [
          "PSYCHIC",
          2
        ],
        "name": "RecoverName",
        "description": "KadabrasRecoverDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "RESIDUAL",
        "effectCommands": "KadabraRecoverEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "DISCARD_ENERGY",
          "flags3": "NONE"
        },
        "priority": 3,
        "animation": "ATK_ANIM_RECOVER"
      },
      {
        "energy": [
          "PSYCHIC",
          2,
          "COLORLESS",
          1
        ],
        "name": "SuperPsiName",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 50,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_PSYCHIC_HIT"
      }
    ],
    "retreatCost": 3,
    "weakness": "WR_PSYCHIC",
    "resistance": "NONE",
    "category": "PsiName",
    "pokedexNumber": 64,
    "unknownField1": 0,
    "level": 38,
    "length": [
      4,
      3
    ],
    "weight": 1250,
    "description": "KadabraDescription",
    "aiInfo": "HAS_EVOLUTION"
  },
  "ALAKAZAM": {
    "type": "TYPE_PKMN_PSYCHIC",
    "gfx": "AlakazamCardGfx",
    "name": "AlakazamName",
    "rarity": "STAR",
    "sets": [
      "MYSTERY",
      "NONE"
    ],
    "id": "ALAKAZAM",
    "hp": 80,
    "stage": "STAGE2",
    "preEvoName": "KadabraName",
    "attacks": [
      {
        "energy": [
          0
        ],
        "name": "DamageSwapName",
        "description": "DamageSwapDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "POKEMON_POWER",
        "effectCommands": "AlakazamDamageSwapEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_PKMN_POWER_1"
      },
      {
        "energy": [
          "PSYCHIC",
          3
        ],
        "name": "ConfuseRayName",
        "description": "MayInflictConfusionDescription",
        "descriptionCont": "NONE",
        "damage": 30,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "AlakazamConfuseRayEffectCommands",
        "flags": {
          "flags1": "INFLICT_CONFUSION",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_CONFUSE_RAY"
      }
    ],
    "retreatCost": 3,
    "weakness": "WR_PSYCHIC",
    "resistance": "NONE",
    "category": "PsiName",
    "pokedexNumber": 65,
    "unknownField1": 0,
    "level": 42,
    "length": [
      4,
      11
    ],
    "weight": 1060,
    "description": "AlakazamDescription",
    "aiInfo": 0
  },
  "SLOWPOKE_LV9": {
    "type": "TYPE_PKMN_PSYCHIC",
    "gfx": "SlowpokeLv9CardGfx",
    "name": "SlowpokeName",
    "rarity": "PROMOSTAR",
    "sets": [
      "PROMOTIONAL",
      "PRO"
    ],
    "id": "SLOWPOKE_LV9",
    "hp": 40,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "COLORLESS",
          1
        ],
        "name": "HeadbuttName",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_HIT"
      },
      {
        "energy": [
          "PSYCHIC",
          2
        ],
        "name": "AmnesiaName",
        "description": "SlowpokesAmnesiaDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "SlowpokeAmnesiaEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "FLAG_2_BIT_6",
          "flags3": "NONE"
        },
        "priority": 2,
        "animation": "ATK_ANIM_AMNESIA"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_PSYCHIC",
    "resistance": "NONE",
    "category": "DopeyName",
    "pokedexNumber": 79,
    "unknownField1": 0,
    "level": 9,
    "length": [
      3,
      11
    ],
    "weight": 790,
    "description": "SlowpokeLv9Description",
    "aiInfo": [
      "AI_INFO_UNK_03",
      "HAS_EVOLUTION"
    ]
  },
  "SLOWPOKE_LV18": {
    "type": "TYPE_PKMN_PSYCHIC",
    "gfx": "SlowpokeLv18CardGfx",
    "name": "SlowpokeName",
    "rarity": "CIRCLE",
    "sets": [
      "LABORATORY",
      "FOSSIL"
    ],
    "id": "SLOWPOKE_LV18",
    "hp": 50,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "COLORLESS",
          1
        ],
        "name": "SpacingOutName",
        "description": "SpacingOutDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "RESIDUAL",
        "effectCommands": "SlowpokeSpacingOutEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "HEAL_USER",
          "flags3": "NONE"
        },
        "priority": 1,
        "animation": "ATK_ANIM_NONE"
      },
      {
        "energy": [
          "PSYCHIC",
          2
        ],
        "name": "ScavengeName",
        "description": "ScavengeDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "RESIDUAL",
        "effectCommands": "SlowpokeScavengeEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "DISCARD_ENERGY",
          "flags3": "NONE"
        },
        "priority": 2,
        "animation": "ATK_ANIM_GLOW_EFFECT"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_PSYCHIC",
    "resistance": "NONE",
    "category": "DopeyName",
    "pokedexNumber": 79,
    "unknownField1": 0,
    "level": 18,
    "length": [
      3,
      11
    ],
    "weight": 790,
    "description": "SlowpokeLv9Description",
    "aiInfo": "HAS_EVOLUTION"
  },
  "SLOWBRO": {
    "type": "TYPE_PKMN_PSYCHIC",
    "gfx": "SlowbroCardGfx",
    "name": "SlowbroName",
    "rarity": "DIAMOND",
    "sets": [
      "LABORATORY",
      "FOSSIL"
    ],
    "id": "SLOWBRO",
    "hp": 60,
    "stage": "STAGE1",
    "preEvoName": "SlowpokeName",
    "attacks": [
      {
        "energy": [
          0
        ],
        "name": "StrangeBehaviorName",
        "description": "StrangeBehaviorDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "POKEMON_POWER",
        "effectCommands": "SlowbroStrangeBehaviorEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "FLAG_2_BIT_6",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_PKMN_POWER_1"
      },
      {
        "energy": [
          "PSYCHIC",
          2
        ],
        "name": "PsyshockName",
        "description": "MayInflictParalysisDescription",
        "descriptionCont": "NONE",
        "damage": 20,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "SlowbroPsyshockEffectCommands",
        "flags": {
          "flags1": "INFLICT_PARALYSIS",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_PSYCHIC_HIT"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_PSYCHIC",
    "resistance": "NONE",
    "category": "HermitcrabName",
    "pokedexNumber": 80,
    "unknownField1": 0,
    "level": 26,
    "length": [
      5,
      3
    ],
    "weight": 1730,
    "description": "SlowbroDescription",
    "aiInfo": "AI_INFO_BENCH_UTILITY"
  },
  "GASTLY_LV8": {
    "type": "TYPE_PKMN_PSYCHIC",
    "gfx": "GastlyLv8CardGfx",
    "name": "GastlyName",
    "rarity": "CIRCLE",
    "sets": [
      "EVOLUTION",
      "NONE"
    ],
    "id": "GASTLY_LV8",
    "hp": 30,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "PSYCHIC",
          1
        ],
        "name": "SleepingGasName",
        "description": "MayInflictSleepDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "GastlySleepingGasEffectCommands",
        "flags": {
          "flags1": "INFLICT_SLEEP",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_SLEEPING_GAS"
      },
      {
        "energy": [
          "PSYCHIC",
          1,
          "COLORLESS",
          1
        ],
        "name": "DestinyBondName",
        "description": "DestinyBondDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "RESIDUAL",
        "effectCommands": "GastlyDestinyBondEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "SPECIAL_AI_HANDLING"
        },
        "priority": 3,
        "animation": "ATK_ANIM_GLOW_EFFECT"
      }
    ],
    "retreatCost": 0,
    "weakness": "NONE",
    "resistance": "WR_FIGHTING",
    "category": "GasName",
    "pokedexNumber": 92,
    "unknownField1": 0,
    "level": 8,
    "length": [
      4,
      3
    ],
    "weight": 2,
    "description": "GastlyLv8Description",
    "aiInfo": "HAS_EVOLUTION"
  },
  "GASTLY_LV17": {
    "type": "TYPE_PKMN_PSYCHIC",
    "gfx": "GastlyLv17CardGfx",
    "name": "GastlyName",
    "rarity": "DIAMOND",
    "sets": [
      "LABORATORY",
      "FOSSIL"
    ],
    "id": "GASTLY_LV17",
    "hp": 50,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "PSYCHIC",
          1
        ],
        "name": "LickName",
        "description": "MayInflictParalysisDescription",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "GastlyLickEffectCommands",
        "flags": {
          "flags1": "INFLICT_PARALYSIS",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_GOO"
      },
      {
        "energy": [
          "PSYCHIC",
          2
        ],
        "name": "EnergyConversionName",
        "description": "EnergyConversionDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "RESIDUAL",
        "effectCommands": "GastlyEnergyConversionEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "SPECIAL_AI_HANDLING"
        },
        "priority": 10,
        "animation": "ATK_ANIM_ENERGY_CONVERSION"
      }
    ],
    "retreatCost": 0,
    "weakness": "NONE",
    "resistance": "WR_FIGHTING",
    "category": "GasName",
    "pokedexNumber": 92,
    "unknownField1": 0,
    "level": 17,
    "length": [
      4,
      3
    ],
    "weight": 2,
    "description": "GastlyLv17Description",
    "aiInfo": [
      "AI_INFO_UNK_03",
      "HAS_EVOLUTION"
    ]
  },
  "HAUNTER_LV17": {
    "type": "TYPE_PKMN_PSYCHIC",
    "gfx": "HaunterLv17CardGfx",
    "name": "HaunterName",
    "rarity": "STAR",
    "sets": [
      "LABORATORY",
      "FOSSIL"
    ],
    "id": "HAUNTER_LV17",
    "hp": 50,
    "stage": "STAGE1",
    "preEvoName": "GastlyName",
    "attacks": [
      {
        "energy": [
          0
        ],
        "name": "TransparencyName",
        "description": "TransparencyDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "POKEMON_POWER",
        "effectCommands": "HaunterTransparencyEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_PKMN_POWER_1"
      },
      {
        "energy": [
          "PSYCHIC",
          1,
          "COLORLESS",
          1
        ],
        "name": "NightmareName",
        "description": "InflictSleepDescription",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "HaunterNightmareEffectCommands",
        "flags": {
          "flags1": "INFLICT_SLEEP",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_NIGHTMARE"
      }
    ],
    "retreatCost": 0,
    "weakness": "NONE",
    "resistance": "WR_FIGHTING",
    "category": "GasName",
    "pokedexNumber": 93,
    "unknownField1": 0,
    "level": 17,
    "length": [
      5,
      3
    ],
    "weight": 2,
    "description": "HaunterDescription",
    "aiInfo": "HAS_EVOLUTION"
  },
  "HAUNTER_LV22": {
    "type": "TYPE_PKMN_PSYCHIC",
    "gfx": "HaunterLv22CardGfx",
    "name": "HaunterName",
    "rarity": "DIAMOND",
    "sets": [
      "EVOLUTION",
      "NONE"
    ],
    "id": "HAUNTER_LV22",
    "hp": 60,
    "stage": "STAGE1",
    "preEvoName": "GastlyName",
    "attacks": [
      {
        "energy": [
          "PSYCHIC",
          1
        ],
        "name": "HypnosisName",
        "description": "InflictSleepDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "HaunterHypnosisEffectCommands",
        "flags": {
          "flags1": "INFLICT_SLEEP",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_HYPNOSIS"
      },
      {
        "energy": [
          "PSYCHIC",
          2
        ],
        "name": "DreamEaterName",
        "description": "DreamEaterDescription",
        "descriptionCont": "NONE",
        "damage": 50,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "HaunterDreamEaterEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_PSYCHIC_HIT"
      }
    ],
    "retreatCost": 1,
    "weakness": "NONE",
    "resistance": "WR_FIGHTING",
    "category": "GasName",
    "pokedexNumber": 93,
    "unknownField1": 0,
    "level": 22,
    "length": [
      5,
      3
    ],
    "weight": 2,
    "description": "HaunterDescription",
    "aiInfo": "HAS_EVOLUTION"
  },
  "GENGAR": {
    "type": "TYPE_PKMN_PSYCHIC",
    "gfx": "GengarCardGfx",
    "name": "GengarName",
    "rarity": "STAR",
    "sets": [
      "EVOLUTION",
      "FOSSIL"
    ],
    "id": "GENGAR",
    "hp": 80,
    "stage": "STAGE2",
    "preEvoName": "HaunterName",
    "attacks": [
      {
        "energy": [
          0
        ],
        "name": "CurseName",
        "description": "CurseDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "POKEMON_POWER",
        "effectCommands": "GengarCurseEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_PKMN_POWER_1"
      },
      {
        "energy": [
          "PSYCHIC",
          3
        ],
        "name": "DarkMindName",
        "description": "DarkMindDescription",
        "descriptionCont": "NONE",
        "damage": 30,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "GengarDarkMindEffectCommands",
        "flags": {
          "flags1": "DAMAGE_TO_OPPONENT_BENCH",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 10,
        "animation": "ATK_ANIM_DARK_MIND"
      }
    ],
    "retreatCost": 1,
    "weakness": "NONE",
    "resistance": "WR_FIGHTING",
    "category": "ShadowName",
    "pokedexNumber": 94,
    "unknownField1": 0,
    "level": 38,
    "length": [
      4,
      11
    ],
    "weight": 890,
    "description": "GengarDescription",
    "aiInfo": "AI_INFO_BENCH_UTILITY"
  },
  "DROWZEE": {
    "type": "TYPE_PKMN_PSYCHIC",
    "gfx": "DrowzeeCardGfx",
    "name": "DrowzeeName",
    "rarity": "CIRCLE",
    "sets": [
      "MYSTERY",
      "NONE"
    ],
    "id": "DROWZEE",
    "hp": 50,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "COLORLESS",
          1
        ],
        "name": "PoundName",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_HIT"
      },
      {
        "energy": [
          "PSYCHIC",
          2
        ],
        "name": "ConfuseRayName",
        "description": "MayInflictConfusionDescription",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "DrowzeeConfuseRayEffectCommands",
        "flags": {
          "flags1": "INFLICT_CONFUSION",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_CONFUSE_RAY"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_PSYCHIC",
    "resistance": "NONE",
    "category": "HypnosisName",
    "pokedexNumber": 96,
    "unknownField1": 0,
    "level": 12,
    "length": [
      3,
      3
    ],
    "weight": 710,
    "description": "DrowzeeDescription",
    "aiInfo": [
      "AI_INFO_UNK_03",
      "HAS_EVOLUTION"
    ]
  },
  "HYPNO": {
    "type": "TYPE_PKMN_PSYCHIC",
    "gfx": "HypnoCardGfx",
    "name": "HypnoName",
    "rarity": "STAR",
    "sets": [
      "LABORATORY",
      "FOSSIL"
    ],
    "id": "HYPNO",
    "hp": 90,
    "stage": "STAGE1",
    "preEvoName": "DrowzeeName",
    "attacks": [
      {
        "energy": [
          "PSYCHIC",
          1
        ],
        "name": "ProphecyName",
        "description": "ProphecyDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "RESIDUAL",
        "effectCommands": "HypnoProphecyEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "FLAG_2_BIT_5",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_GLOW_EFFECT"
      },
      {
        "energy": [
          "PSYCHIC",
          3
        ],
        "name": "DarkMindName",
        "description": "DarkMindDescription",
        "descriptionCont": "NONE",
        "damage": 30,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "HypnoDarkMindEffectCommands",
        "flags": {
          "flags1": "DAMAGE_TO_OPPONENT_BENCH",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 10,
        "animation": "ATK_ANIM_DARK_MIND"
      }
    ],
    "retreatCost": 2,
    "weakness": "WR_PSYCHIC",
    "resistance": "NONE",
    "category": "HypnosisName",
    "pokedexNumber": 97,
    "unknownField1": 0,
    "level": 36,
    "length": [
      5,
      3
    ],
    "weight": 1670,
    "description": "HypnoDescription",
    "aiInfo": 0
  },
  "MR_MIME": {
    "type": "TYPE_PKMN_PSYCHIC",
    "gfx": "MrMimeCardGfx",
    "name": "MrMimeName",
    "rarity": "STAR",
    "sets": [
      "LABORATORY",
      "JUNGLE"
    ],
    "id": "MR_MIME",
    "hp": 40,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          0
        ],
        "name": "InvisibleWallName",
        "description": "InvisibleWallDescription",
        "descriptionCont": "InvisibleWallDescriptionCont",
        "damage": 0,
        "category": "POKEMON_POWER",
        "effectCommands": "MrMimeInvisibleWallEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_GLOW_EFFECT"
      },
      {
        "energy": [
          "PSYCHIC",
          1,
          "COLORLESS",
          1
        ],
        "name": "MeditateName",
        "description": "MrMimesMeditateDescription",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_PLUS",
        "effectCommands": "MrMimeMeditateEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_PSYCHIC_HIT"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_PSYCHIC",
    "resistance": "NONE",
    "category": "BarrierName",
    "pokedexNumber": 122,
    "unknownField1": 0,
    "level": 28,
    "length": [
      4,
      3
    ],
    "weight": 1200,
    "description": "MrMimeDescription",
    "aiInfo": "AI_INFO_UNK_03"
  },
  "JYNX": {
    "type": "TYPE_PKMN_PSYCHIC",
    "gfx": "JynxCardGfx",
    "name": "JynxName",
    "rarity": "DIAMOND",
    "sets": [
      "EVOLUTION",
      "NONE"
    ],
    "id": "JYNX",
    "hp": 70,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "PSYCHIC",
          1
        ],
        "name": "DoubleslapName",
        "description": "DoubleAttackX10Description",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_X",
        "effectCommands": "JynxDoubleslapEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_HIT"
      },
      {
        "energy": [
          "PSYCHIC",
          2,
          "COLORLESS",
          1
        ],
        "name": "MeditateName",
        "description": "JynxsMeditateDescription",
        "descriptionCont": "NONE",
        "damage": 20,
        "category": "DAMAGE_PLUS",
        "effectCommands": "JynxMeditateEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_PSYCHIC_HIT"
      }
    ],
    "retreatCost": 2,
    "weakness": "WR_PSYCHIC",
    "resistance": "NONE",
    "category": "HumanShapeName",
    "pokedexNumber": 124,
    "unknownField1": 0,
    "level": 23,
    "length": [
      4,
      7
    ],
    "weight": 900,
    "description": "JynxDescription",
    "aiInfo": 0
  },
  "MEWTWO_LV53": {
    "type": "TYPE_PKMN_PSYCHIC",
    "gfx": "MewtwoLv53CardGfx",
    "name": "MewtwoName",
    "rarity": "STAR",
    "sets": [
      "LABORATORY",
      "NONE"
    ],
    "id": "MEWTWO_LV53",
    "hp": 60,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "PSYCHIC",
          1,
          "COLORLESS",
          1
        ],
        "name": "PsychicName",
        "description": "PsychicDescription",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_PLUS",
        "effectCommands": "MewtwoPsychicEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_PSYCHIC_HIT"
      },
      {
        "energy": [
          "PSYCHIC",
          2
        ],
        "name": "BarrierName",
        "description": "BarrierDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "RESIDUAL",
        "effectCommands": "MewtwoBarrierEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": [
            "NULLIFY_OR_WEAKEN_ATTACK",
            "DISCARD_ENERGY"
          ],
          "flags3": "NONE"
        },
        "priority": 2,
        "animation": "ATK_ANIM_BARRIER"
      }
    ],
    "retreatCost": 3,
    "weakness": "WR_PSYCHIC",
    "resistance": "NONE",
    "category": "GeneticName",
    "pokedexNumber": 150,
    "unknownField1": 0,
    "level": 53,
    "length": [
      6,
      7
    ],
    "weight": 2690,
    "description": "MewtwoLv53Description",
    "aiInfo": 0
  },
  "MEWTWO_LV60": {
    "type": "TYPE_PKMN_PSYCHIC",
    "gfx": "MewtwoLv60CardGfx",
    "name": "MewtwoName",
    "rarity": "PROMOSTAR",
    "sets": [
      "PROMOTIONAL",
      "PRO"
    ],
    "id": "MEWTWO_LV60",
    "hp": 70,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "PSYCHIC",
          1
        ],
        "name": "EnergyAbsorptionName",
        "description": "EnergyAbsorptionDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "RESIDUAL",
        "effectCommands": "MewtwoLv60EnergyAbsorptionEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "SPECIAL_AI_HANDLING"
        },
        "priority": 0,
        "animation": "ATK_ANIM_GLOW_EFFECT"
      },
      {
        "energy": [
          "PSYCHIC",
          2,
          "COLORLESS",
          1
        ],
        "name": "PsyburnName",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 40,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_PSYCHIC_HIT"
      }
    ],
    "retreatCost": 2,
    "weakness": "WR_PSYCHIC",
    "resistance": "NONE",
    "category": "GeneticName",
    "pokedexNumber": 150,
    "unknownField1": 0,
    "level": 60,
    "length": [
      6,
      7
    ],
    "weight": 2690,
    "description": "MewtwoLv60Description",
    "aiInfo": 0
  },
  "MEWTWO_ALT_LV60": {
    "type": "TYPE_PKMN_PSYCHIC",
    "gfx": "MewtwoAltLV60CardGfx",
    "name": "MewtwoName",
    "rarity": "PROMOSTAR",
    "sets": [
      "PROMOTIONAL",
      "PRO"
    ],
    "id": "MEWTWO_ALT_LV60",
    "hp": 70,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "PSYCHIC",
          1
        ],
        "name": "EnergyAbsorptionName",
        "description": "EnergyAbsorptionDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "RESIDUAL",
        "effectCommands": "MewtwoAltLV60EnergyAbsorptionEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "SPECIAL_AI_HANDLING"
        },
        "priority": 0,
        "animation": "ATK_ANIM_GLOW_EFFECT"
      },
      {
        "energy": [
          "PSYCHIC",
          2,
          "COLORLESS",
          1
        ],
        "name": "PsyburnName",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 40,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_PSYCHIC_HIT"
      }
    ],
    "retreatCost": 2,
    "weakness": "WR_PSYCHIC",
    "resistance": "NONE",
    "category": "GeneticName",
    "pokedexNumber": 150,
    "unknownField1": 0,
    "level": 60,
    "length": [
      6,
      7
    ],
    "weight": 2690,
    "description": "MewtwoLv60Description",
    "aiInfo": 0
  },
  "MEW_LV8": {
    "type": "TYPE_PKMN_PSYCHIC",
    "gfx": "MewLv8CardGfx",
    "name": "MewName",
    "rarity": "PROMOSTAR",
    "sets": [
      "PROMOTIONAL",
      "PRO"
    ],
    "id": "MEW_LV8",
    "hp": 40,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          0
        ],
        "name": "NeutralizingShieldName",
        "description": "NeutralizingShieldDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "POKEMON_POWER",
        "effectCommands": "MewNeutralizingShieldEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_PKMN_POWER_1"
      },
      {
        "energy": [
          "PSYCHIC",
          1
        ],
        "name": "PsyshockName",
        "description": "MayInflictParalysisDescription",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "MewPsyshockEffectCommands",
        "flags": {
          "flags1": "INFLICT_PARALYSIS",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_PSYCHIC_HIT"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_PSYCHIC",
    "resistance": "NONE",
    "category": "NewSpeciesName",
    "pokedexNumber": 151,
    "unknownField1": 0,
    "level": 8,
    "length": [
      1,
      4
    ],
    "weight": 90,
    "description": "MewLv8Description",
    "aiInfo": "AI_INFO_UNK_03"
  },
  "MEW_LV15": {
    "type": "TYPE_PKMN_PSYCHIC",
    "gfx": "MewLv15CardGfx",
    "name": "MewName",
    "rarity": "STAR",
    "sets": [
      "PROMOTIONAL",
      "GB"
    ],
    "id": "MEW_LV15",
    "hp": 50,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "PSYCHIC",
          1,
          "COLORLESS",
          1
        ],
        "name": "MysteryAttackName",
        "description": "MysteryAttackDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "MewMysteryAttackEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_HIT_EFFECT"
      },
      {
        "energy": [
          0
        ],
        "name": "NONE",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_NONE"
      }
    ],
    "retreatCost": 0,
    "weakness": "WR_PSYCHIC",
    "resistance": "NONE",
    "category": "NewSpeciesName",
    "pokedexNumber": 151,
    "unknownField1": 0,
    "level": 15,
    "length": [
      1,
      4
    ],
    "weight": 90,
    "description": "MewLv15Description",
    "aiInfo": 0
  },
  "MEW_LV23": {
    "type": "TYPE_PKMN_PSYCHIC",
    "gfx": "MewLv23CardGfx",
    "name": "MewName",
    "rarity": "STAR",
    "sets": [
      "MYSTERY",
      "FOSSIL"
    ],
    "id": "MEW_LV23",
    "hp": 50,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "PSYCHIC",
          1
        ],
        "name": "PsywaveName",
        "description": "PsywaveDescription",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_X",
        "effectCommands": "MewPsywaveEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_PSYCHIC_HIT"
      },
      {
        "energy": [
          "PSYCHIC",
          2
        ],
        "name": "DevolutionBeamName",
        "description": "DevolutionBeamDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "RESIDUAL",
        "effectCommands": "MewDevolutionBeamEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "SPECIAL_AI_HANDLING"
        },
        "priority": 0,
        "animation": "ATK_ANIM_NONE"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_PSYCHIC",
    "resistance": "NONE",
    "category": "NewSpeciesName",
    "pokedexNumber": 151,
    "unknownField1": 0,
    "level": 23,
    "length": [
      1,
      4
    ],
    "weight": 90,
    "description": "MewLv8Description",
    "aiInfo": "AI_INFO_UNK_08"
  },
  "PIDGEY": {
    "type": "TYPE_PKMN_COLORLESS",
    "gfx": "PidgeyCardGfx",
    "name": "PidgeyName",
    "rarity": "CIRCLE",
    "sets": [
      "EVOLUTION",
      "NONE"
    ],
    "id": "PIDGEY",
    "hp": 40,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "COLORLESS",
          2
        ],
        "name": "WhirlwindName",
        "description": "WhirlwindDescription",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "PidgeyWhirlwindEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "SWITCH_OPPONENT_POKEMON",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_WHIRLWIND"
      },
      {
        "energy": [
          0
        ],
        "name": "NONE",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_NONE"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_LIGHTNING",
    "resistance": "WR_FIGHTING",
    "category": "TinyBirdName",
    "pokedexNumber": 16,
    "unknownField1": 0,
    "level": 8,
    "length": [
      1,
      0
    ],
    "weight": 40,
    "description": "PidgeyDescription",
    "aiInfo": [
      "AI_INFO_ENCOURAGE_EVO",
      "HAS_EVOLUTION"
    ]
  },
  "PIDGEOTTO": {
    "type": "TYPE_PKMN_COLORLESS",
    "gfx": "PidgeottoCardGfx",
    "name": "PidgeottoName",
    "rarity": "STAR",
    "sets": [
      "EVOLUTION",
      "NONE"
    ],
    "id": "PIDGEOTTO",
    "hp": 60,
    "stage": "STAGE1",
    "preEvoName": "PidgeyName",
    "attacks": [
      {
        "energy": [
          "COLORLESS",
          2
        ],
        "name": "WhirlwindName",
        "description": "WhirlwindDescription",
        "descriptionCont": "NONE",
        "damage": 20,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "PidgeottoWhirlwindEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "SWITCH_OPPONENT_POKEMON",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_WHIRLWIND"
      },
      {
        "energy": [
          "COLORLESS",
          3
        ],
        "name": "MirrorMoveName",
        "description": "PidgeottosMirrorMoveDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "PidgeottoMirrorMoveEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "FLAG_2_BIT_6",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_MIRROR_MOVE"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_LIGHTNING",
    "resistance": "WR_FIGHTING",
    "category": "BirdName",
    "pokedexNumber": 17,
    "unknownField1": 0,
    "level": 36,
    "length": [
      3,
      7
    ],
    "weight": 660,
    "description": "PidgeottoDescription",
    "aiInfo": "HAS_EVOLUTION"
  },
  "PIDGEOT_LV38": {
    "type": "TYPE_PKMN_COLORLESS",
    "gfx": "PidgeotLv38CardGfx",
    "name": "PidgeotName",
    "rarity": "STAR",
    "sets": [
      "LABORATORY",
      "GB"
    ],
    "id": "PIDGEOT_LV38",
    "hp": 80,
    "stage": "STAGE2",
    "preEvoName": "PidgeottoName",
    "attacks": [
      {
        "energy": [
          "COLORLESS",
          3
        ],
        "name": "SlicingWindName",
        "description": "SlicingWildDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "RESIDUAL",
        "effectCommands": "PidgeotSlicingWindEffectCommands",
        "flags": {
          "flags1": "DAMAGE_TO_OPPONENT_BENCH",
          "flags2": "FLAG_2_BIT_6",
          "flags3": "NONE"
        },
        "priority": 2,
        "animation": "ATK_ANIM_WHIRLWIND_ZIGZAG"
      },
      {
        "energy": [
          "COLORLESS",
          4
        ],
        "name": "GaleName",
        "description": "GaleDescription",
        "descriptionCont": "NONE",
        "damage": 20,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "PidgeotGaleEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": [
            "SWITCH_OPPONENT_POKEMON",
            "FLAG_2_BIT_7"
          ],
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_GLOW_EFFECT"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_LIGHTNING",
    "resistance": "WR_FIGHTING",
    "category": "BirdName",
    "pokedexNumber": 18,
    "unknownField1": 0,
    "level": 38,
    "length": [
      4,
      11
    ],
    "weight": 870,
    "description": "PidgeotLv38Description",
    "aiInfo": 0
  },
  "PIDGEOT_LV40": {
    "type": "TYPE_PKMN_COLORLESS",
    "gfx": "PidgeotLv40CardGfx",
    "name": "PidgeotName",
    "rarity": "STAR",
    "sets": [
      "EVOLUTION",
      "JUNGLE"
    ],
    "id": "PIDGEOT_LV40",
    "hp": 80,
    "stage": "STAGE2",
    "preEvoName": "PidgeottoName",
    "attacks": [
      {
        "energy": [
          "COLORLESS",
          2
        ],
        "name": "WingAttackName",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 20,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_HIT"
      },
      {
        "energy": [
          "COLORLESS",
          3
        ],
        "name": "HurricaneName",
        "description": "HurricaneDescription",
        "descriptionCont": "NONE",
        "damage": 30,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "PidgeotHurricaneEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "FLAG_2_BIT_7",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_WHIRLWIND"
      }
    ],
    "retreatCost": 0,
    "weakness": "WR_LIGHTNING",
    "resistance": "WR_FIGHTING",
    "category": "BirdName",
    "pokedexNumber": 18,
    "unknownField1": 0,
    "level": 40,
    "length": [
      4,
      11
    ],
    "weight": 870,
    "description": "PidgeotLv40Description",
    "aiInfo": 0
  },
  "RATTATA": {
    "type": "TYPE_PKMN_COLORLESS",
    "gfx": "RattataCardGfx",
    "name": "RattataName",
    "rarity": "CIRCLE",
    "sets": [
      "COLOSSEUM",
      "NONE"
    ],
    "id": "RATTATA",
    "hp": 30,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "COLORLESS",
          1
        ],
        "name": "BiteName",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 20,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_HIT"
      },
      {
        "energy": [
          0
        ],
        "name": "NONE",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_NONE"
      }
    ],
    "retreatCost": 0,
    "weakness": "WR_FIGHTING",
    "resistance": "WR_PSYCHIC",
    "category": "RatName",
    "pokedexNumber": 19,
    "unknownField1": 0,
    "level": 9,
    "length": [
      1,
      0
    ],
    "weight": 80,
    "description": "RattataDescription",
    "aiInfo": [
      "AI_INFO_UNK_03",
      "HAS_EVOLUTION"
    ]
  },
  "RATICATE": {
    "type": "TYPE_PKMN_COLORLESS",
    "gfx": "RaticateCardGfx",
    "name": "RaticateName",
    "rarity": "DIAMOND",
    "sets": [
      "COLOSSEUM",
      "NONE"
    ],
    "id": "RATICATE",
    "hp": 60,
    "stage": "STAGE1",
    "preEvoName": "RattataName",
    "attacks": [
      {
        "energy": [
          "COLORLESS",
          1
        ],
        "name": "BiteName",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 20,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_HIT"
      },
      {
        "energy": [
          "COLORLESS",
          3
        ],
        "name": "SuperFangName",
        "description": "SuperFangDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "RaticateSuperFangEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_HIT"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_FIGHTING",
    "resistance": "WR_PSYCHIC",
    "category": "RatName",
    "pokedexNumber": 20,
    "unknownField1": 0,
    "level": 41,
    "length": [
      2,
      4
    ],
    "weight": 410,
    "description": "RaticateDescription",
    "aiInfo": "AI_INFO_UNK_03"
  },
  "SPEAROW": {
    "type": "TYPE_PKMN_COLORLESS",
    "gfx": "SpearowCardGfx",
    "name": "SpearowName",
    "rarity": "CIRCLE",
    "sets": [
      "LABORATORY",
      "JUNGLE"
    ],
    "id": "SPEAROW",
    "hp": 50,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "COLORLESS",
          1
        ],
        "name": "PeckName",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_HIT"
      },
      {
        "energy": [
          "COLORLESS",
          3
        ],
        "name": "MirrorMoveName",
        "description": "SpearowsMirrorMoveDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "SpearowMirrorMoveEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "FLAG_2_BIT_6",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_MIRROR_MOVE"
      }
    ],
    "retreatCost": 0,
    "weakness": "WR_LIGHTNING",
    "resistance": "WR_FIGHTING",
    "category": "TinyBirdName",
    "pokedexNumber": 21,
    "unknownField1": 0,
    "level": 13,
    "length": [
      1,
      0
    ],
    "weight": 40,
    "description": "SpearowDescription",
    "aiInfo": [
      "AI_INFO_UNK_03",
      "HAS_EVOLUTION"
    ]
  },
  "FEAROW": {
    "type": "TYPE_PKMN_COLORLESS",
    "gfx": "FearowCardGfx",
    "name": "FearowName",
    "rarity": "DIAMOND",
    "sets": [
      "LABORATORY",
      "JUNGLE"
    ],
    "id": "FEAROW",
    "hp": 70,
    "stage": "STAGE1",
    "preEvoName": "SpearowName",
    "attacks": [
      {
        "energy": [
          "COLORLESS",
          3
        ],
        "name": "AgilityName",
        "description": "FearowsAgilityDescription",
        "descriptionCont": "NONE",
        "damage": 20,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "FearowAgilityEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NULLIFY_OR_WEAKEN_ATTACK",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_QUICK_ATTACK"
      },
      {
        "energy": [
          "COLORLESS",
          4
        ],
        "name": "DrillPeckName",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 40,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_DRILL"
      }
    ],
    "retreatCost": 0,
    "weakness": "WR_LIGHTNING",
    "resistance": "WR_FIGHTING",
    "category": "BeakName",
    "pokedexNumber": 22,
    "unknownField1": 0,
    "level": 27,
    "length": [
      3,
      11
    ],
    "weight": 840,
    "description": "FearowDescription",
    "aiInfo": 0
  },
  "CLEFAIRY": {
    "type": "TYPE_PKMN_COLORLESS",
    "gfx": "ClefairyCardGfx",
    "name": "ClefairyName",
    "rarity": "STAR",
    "sets": [
      "MYSTERY",
      "NONE"
    ],
    "id": "CLEFAIRY",
    "hp": 40,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "COLORLESS",
          1
        ],
        "name": "SingName",
        "description": "MayInflictSleepDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "ClefairySingEffectCommands",
        "flags": {
          "flags1": "INFLICT_SLEEP",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_SING"
      },
      {
        "energy": [
          "COLORLESS",
          3
        ],
        "name": "MetronomeName",
        "description": "ClefairysMetronomeDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "RESIDUAL",
        "effectCommands": "ClefairyMetronomeEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "FLAG_2_BIT_6",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_NONE"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_FIGHTING",
    "resistance": "WR_PSYCHIC",
    "category": "FairyName",
    "pokedexNumber": 35,
    "unknownField1": 0,
    "level": 14,
    "length": [
      2,
      0
    ],
    "weight": 170,
    "description": "ClefairyDescription",
    "aiInfo": [
      "AI_INFO_ENCOURAGE_EVO",
      "HAS_EVOLUTION"
    ]
  },
  "CLEFABLE": {
    "type": "TYPE_PKMN_COLORLESS",
    "gfx": "ClefableCardGfx",
    "name": "ClefableName",
    "rarity": "STAR",
    "sets": [
      "LABORATORY",
      "JUNGLE"
    ],
    "id": "CLEFABLE",
    "hp": 70,
    "stage": "STAGE1",
    "preEvoName": "ClefairyName",
    "attacks": [
      {
        "energy": [
          "COLORLESS",
          1
        ],
        "name": "MetronomeName",
        "description": "ClefablesMetronomeDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "RESIDUAL",
        "effectCommands": "ClefableMetronomeEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "FLAG_2_BIT_6",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_NONE"
      },
      {
        "energy": [
          "COLORLESS",
          2
        ],
        "name": "MinimizeName",
        "description": "ClefablesMinimizeDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "RESIDUAL",
        "effectCommands": "ClefableMinimizeEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NULLIFY_OR_WEAKEN_ATTACK",
          "flags3": "NONE"
        },
        "priority": 20,
        "animation": "ATK_ANIM_PROTECT"
      }
    ],
    "retreatCost": 2,
    "weakness": "WR_FIGHTING",
    "resistance": "WR_PSYCHIC",
    "category": "FairyName",
    "pokedexNumber": 36,
    "unknownField1": 0,
    "level": 34,
    "length": [
      4,
      3
    ],
    "weight": 880,
    "description": "ClefableDescription",
    "aiInfo": 0
  },
  "JIGGLYPUFF_LV12": {
    "type": "TYPE_PKMN_COLORLESS",
    "gfx": "JigglypuffLv12CardGfx",
    "name": "JigglypuffName",
    "rarity": "PROMOSTAR",
    "sets": [
      "PROMOTIONAL",
      "PRO"
    ],
    "id": "JIGGLYPUFF_LV12",
    "hp": 50,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "COLORLESS",
          1
        ],
        "name": "FirstAidName",
        "description": "FirstAidDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "RESIDUAL",
        "effectCommands": "JigglypuffFirstAidEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "HEAL_USER",
          "flags3": "NONE"
        },
        "priority": 1,
        "animation": "ATK_ANIM_RECOVER"
      },
      {
        "energy": [
          "COLORLESS",
          3
        ],
        "name": "DoubleEdgeName",
        "description": "JigglypuffsDoubleEdgeDescription",
        "descriptionCont": "NONE",
        "damage": 40,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "JigglypuffDoubleEdgeEffectCommands",
        "flags": {
          "flags1": "LOW_RECOIL",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 20,
        "animation": "ATK_ANIM_HIT_RECOIL"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_FIGHTING",
    "resistance": "WR_PSYCHIC",
    "category": "BalloonName",
    "pokedexNumber": 39,
    "unknownField1": 0,
    "level": 12,
    "length": [
      1,
      8
    ],
    "weight": 120,
    "description": "JigglypuffLv12Description",
    "aiInfo": "HAS_EVOLUTION"
  },
  "JIGGLYPUFF_LV13": {
    "type": "TYPE_PKMN_COLORLESS",
    "gfx": "JigglypuffLv13CardGfx",
    "name": "JigglypuffName",
    "rarity": "CIRCLE",
    "sets": [
      "EVOLUTION",
      "GB"
    ],
    "id": "JIGGLYPUFF_LV13",
    "hp": 50,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "COLORLESS",
          1
        ],
        "name": "FriendshipSongName",
        "description": "FriendshipSongDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "RESIDUAL",
        "effectCommands": "JigglypuffFriendshipSongEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "SPECIAL_AI_HANDLING"
        },
        "priority": 0,
        "animation": "ATK_ANIM_NONE"
      },
      {
        "energy": [
          "COLORLESS",
          2
        ],
        "name": "ExpandName",
        "description": "ExpandDescription",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "JigglypuffExpandEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NULLIFY_OR_WEAKEN_ATTACK",
          "flags3": "NONE"
        },
        "priority": 10,
        "animation": "ATK_ANIM_EXPAND"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_FIGHTING",
    "resistance": "WR_PSYCHIC",
    "category": "BalloonName",
    "pokedexNumber": 39,
    "unknownField1": 0,
    "level": 13,
    "length": [
      1,
      8
    ],
    "weight": 120,
    "description": "JigglypuffLv13Description",
    "aiInfo": "HAS_EVOLUTION"
  },
  "JIGGLYPUFF_LV14": {
    "type": "TYPE_PKMN_COLORLESS",
    "gfx": "JigglypuffLv14CardGfx",
    "name": "JigglypuffName",
    "rarity": "CIRCLE",
    "sets": [
      "COLOSSEUM",
      "JUNGLE"
    ],
    "id": "JIGGLYPUFF_LV14",
    "hp": 60,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "COLORLESS",
          1
        ],
        "name": "LullabyName",
        "description": "InflictSleepDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "JigglypuffLullabyEffectCommands",
        "flags": {
          "flags1": "INFLICT_SLEEP",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_LULLABY"
      },
      {
        "energy": [
          "COLORLESS",
          2
        ],
        "name": "PoundName",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 20,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_HIT"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_FIGHTING",
    "resistance": "WR_PSYCHIC",
    "category": "BalloonName",
    "pokedexNumber": 39,
    "unknownField1": 0,
    "level": 14,
    "length": [
      1,
      8
    ],
    "weight": 120,
    "description": "JigglypuffLv14Description",
    "aiInfo": "HAS_EVOLUTION"
  },
  "WIGGLYTUFF": {
    "type": "TYPE_PKMN_COLORLESS",
    "gfx": "WigglytuffCardGfx",
    "name": "WigglytuffName",
    "rarity": "STAR",
    "sets": [
      "COLOSSEUM",
      "JUNGLE"
    ],
    "id": "WIGGLYTUFF",
    "hp": 80,
    "stage": "STAGE1",
    "preEvoName": "JigglypuffName",
    "attacks": [
      {
        "energy": [
          "COLORLESS",
          1
        ],
        "name": "LullabyName",
        "description": "InflictSleepDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "WigglytuffLullabyEffectCommands",
        "flags": {
          "flags1": "INFLICT_SLEEP",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_LULLABY"
      },
      {
        "energy": [
          "COLORLESS",
          3
        ],
        "name": "DoTheWaveName",
        "description": "DoTheWaveDescription",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_PLUS",
        "effectCommands": "WigglytuffDoTheWaveEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_HIT"
      }
    ],
    "retreatCost": 2,
    "weakness": "WR_FIGHTING",
    "resistance": "WR_PSYCHIC",
    "category": "BalloonName",
    "pokedexNumber": 40,
    "unknownField1": 0,
    "level": 36,
    "length": [
      3,
      3
    ],
    "weight": 260,
    "description": "WigglytuffDescription",
    "aiInfo": 0
  },
  "MEOWTH_LV14": {
    "type": "TYPE_PKMN_COLORLESS",
    "gfx": "MeowthLv14CardGfx",
    "name": "MeowthName",
    "rarity": "CIRCLE",
    "sets": [
      "COLOSSEUM",
      "GB"
    ],
    "id": "MEOWTH_LV14",
    "hp": 50,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "COLORLESS",
          2
        ],
        "name": "CatPunchName",
        "description": "CatPunchDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "RESIDUAL",
        "effectCommands": "MeowthCatPunchEffectCommands",
        "flags": {
          "flags1": "DAMAGE_TO_OPPONENT_BENCH",
          "flags2": "FLAG_2_BIT_6",
          "flags3": "NONE"
        },
        "priority": 2,
        "animation": "ATK_ANIM_CAT_PUNCH"
      },
      {
        "energy": [
          0
        ],
        "name": "NONE",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_NONE"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_FIGHTING",
    "resistance": "WR_PSYCHIC",
    "category": "ScratchCatName",
    "pokedexNumber": 52,
    "unknownField1": 0,
    "level": 14,
    "length": [
      1,
      4
    ],
    "weight": 90,
    "description": "MeowthLv14Description",
    "aiInfo": "HAS_EVOLUTION"
  },
  "MEOWTH_LV15": {
    "type": "TYPE_PKMN_COLORLESS",
    "gfx": "MeowthLv15CardGfx",
    "name": "MeowthName",
    "rarity": "CIRCLE",
    "sets": [
      "MYSTERY",
      "JUNGLE"
    ],
    "id": "MEOWTH_LV15",
    "hp": 50,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "COLORLESS",
          2
        ],
        "name": "PayDayName",
        "description": "PayDayDescription",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "MeowthPayDayEffectCommands",
        "flags": {
          "flags1": "DRAW_CARD",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_HIT"
      },
      {
        "energy": [
          0
        ],
        "name": "NONE",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_NONE"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_FIGHTING",
    "resistance": "WR_PSYCHIC",
    "category": "ScratchCatName",
    "pokedexNumber": 52,
    "unknownField1": 0,
    "level": 15,
    "length": [
      1,
      4
    ],
    "weight": 90,
    "description": "MeowthLv15Description",
    "aiInfo": "HAS_EVOLUTION"
  },
  "PERSIAN": {
    "type": "TYPE_PKMN_COLORLESS",
    "gfx": "PersianCardGfx",
    "name": "PersianName",
    "rarity": "DIAMOND",
    "sets": [
      "MYSTERY",
      "JUNGLE"
    ],
    "id": "PERSIAN",
    "hp": 70,
    "stage": "STAGE1",
    "preEvoName": "MeowthName",
    "attacks": [
      {
        "energy": [
          "COLORLESS",
          2
        ],
        "name": "ScratchName",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 20,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_SLASH"
      },
      {
        "energy": [
          "COLORLESS",
          3
        ],
        "name": "PounceName",
        "description": "PounceDescription",
        "descriptionCont": "NONE",
        "damage": 30,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "PersianPounceEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NULLIFY_OR_WEAKEN_ATTACK",
          "flags3": "NONE"
        },
        "priority": 10,
        "animation": "ATK_ANIM_HIT"
      }
    ],
    "retreatCost": 0,
    "weakness": "WR_FIGHTING",
    "resistance": "WR_PSYCHIC",
    "category": "ClassyCatName",
    "pokedexNumber": 53,
    "unknownField1": 0,
    "level": 25,
    "length": [
      3,
      3
    ],
    "weight": 710,
    "description": "PersianDescription",
    "aiInfo": 0
  },
  "FARFETCHD": {
    "type": "TYPE_PKMN_COLORLESS",
    "gfx": "FarfetchdCardGfx",
    "name": "FarfetchdName",
    "rarity": "DIAMOND",
    "sets": [
      "MYSTERY",
      "NONE"
    ],
    "id": "FARFETCHD",
    "hp": 50,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "COLORLESS",
          1
        ],
        "name": "LeekSlapName",
        "description": "LeekSlapDescription",
        "descriptionCont": "NONE",
        "damage": 30,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "FarfetchdLeekSlapEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_WHIP"
      },
      {
        "energy": [
          "COLORLESS",
          3
        ],
        "name": "PotSmashName",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 30,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_POT_SMASH"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_LIGHTNING",
    "resistance": "WR_FIGHTING",
    "category": "WildDuckName",
    "pokedexNumber": 83,
    "unknownField1": 0,
    "level": 20,
    "length": [
      2,
      7
    ],
    "weight": 330,
    "description": "FarfetchdDescription",
    "aiInfo": "AI_INFO_UNK_03"
  },
  "DODUO": {
    "type": "TYPE_PKMN_COLORLESS",
    "gfx": "DoduoCardGfx",
    "name": "DoduoName",
    "rarity": "CIRCLE",
    "sets": [
      "LABORATORY",
      "NONE"
    ],
    "id": "DODUO",
    "hp": 50,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "COLORLESS",
          1
        ],
        "name": "FuryAttackName",
        "description": "DoubleAttackX10Description",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_X",
        "effectCommands": "DoduoFuryAttackEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_MULTIPLE_SLASH"
      },
      {
        "energy": [
          0
        ],
        "name": "NONE",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_NONE"
      }
    ],
    "retreatCost": 0,
    "weakness": "WR_LIGHTNING",
    "resistance": "WR_FIGHTING",
    "category": "TwinBirdName",
    "pokedexNumber": 84,
    "unknownField1": 0,
    "level": 10,
    "length": [
      4,
      7
    ],
    "weight": 860,
    "description": "DoduoDescription",
    "aiInfo": [
      "AI_INFO_UNK_03",
      "HAS_EVOLUTION"
    ]
  },
  "DODRIO": {
    "type": "TYPE_PKMN_COLORLESS",
    "gfx": "DodrioCardGfx",
    "name": "DodrioName",
    "rarity": "DIAMOND",
    "sets": [
      "LABORATORY",
      "JUNGLE"
    ],
    "id": "DODRIO",
    "hp": 70,
    "stage": "STAGE1",
    "preEvoName": "DoduoName",
    "attacks": [
      {
        "energy": [
          0
        ],
        "name": "RetreatAidName",
        "description": "RetreatAidDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "POKEMON_POWER",
        "effectCommands": "DodrioRetreatAidEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_PKMN_POWER_1"
      },
      {
        "energy": [
          "COLORLESS",
          3
        ],
        "name": "RageName",
        "description": "DodriosRageDescription",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_PLUS",
        "effectCommands": "DodrioRageEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "BOOST_IF_TAKEN_DAMAGE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_BIG_HIT"
      }
    ],
    "retreatCost": 0,
    "weakness": "WR_LIGHTNING",
    "resistance": "WR_FIGHTING",
    "category": "TriplebirdName",
    "pokedexNumber": 85,
    "unknownField1": 0,
    "level": 28,
    "length": [
      5,
      11
    ],
    "weight": 1880,
    "description": "DodrioDescription",
    "aiInfo": "AI_INFO_BENCH_UTILITY"
  },
  "LICKITUNG": {
    "type": "TYPE_PKMN_COLORLESS",
    "gfx": "LickitungCardGfx",
    "name": "LickitungName",
    "rarity": "DIAMOND",
    "sets": [
      "MYSTERY",
      "JUNGLE"
    ],
    "id": "LICKITUNG",
    "hp": 90,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "COLORLESS",
          1
        ],
        "name": "TongueWrapName",
        "description": "MayInflictParalysisDescription",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "LickitungTongueWrapEffectCommands",
        "flags": {
          "flags1": "INFLICT_PARALYSIS",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_GOO"
      },
      {
        "energy": [
          "COLORLESS",
          2
        ],
        "name": "SupersonicName",
        "description": "MayInflictConfusionDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "LickitungSupersonicEffectCommands",
        "flags": {
          "flags1": "INFLICT_CONFUSION",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_SUPERSONIC"
      }
    ],
    "retreatCost": 3,
    "weakness": "WR_FIGHTING",
    "resistance": "WR_PSYCHIC",
    "category": "LickingName",
    "pokedexNumber": 108,
    "unknownField1": 0,
    "level": 26,
    "length": [
      3,
      11
    ],
    "weight": 1440,
    "description": "LickitungDescription",
    "aiInfo": 0
  },
  "CHANSEY": {
    "type": "TYPE_PKMN_COLORLESS",
    "gfx": "ChanseyCardGfx",
    "name": "ChanseyName",
    "rarity": "STAR",
    "sets": [
      "COLOSSEUM",
      "NONE"
    ],
    "id": "CHANSEY",
    "hp": 120,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "COLORLESS",
          2
        ],
        "name": "ScrunchName",
        "description": "ScrunchDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "RESIDUAL",
        "effectCommands": "ChanseyScrunchEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NULLIFY_OR_WEAKEN_ATTACK",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_NONE"
      },
      {
        "energy": [
          "COLORLESS",
          4
        ],
        "name": "DoubleEdgeName",
        "description": "ChanseysDoubleEdgeDescription",
        "descriptionCont": "NONE",
        "damage": 80,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "ChanseyDoubleEdgeEffectCommands",
        "flags": {
          "flags1": "HIGH_RECOIL",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 80,
        "animation": "ATK_ANIM_HIT_RECOIL"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_FIGHTING",
    "resistance": "WR_PSYCHIC",
    "category": "EggName",
    "pokedexNumber": 113,
    "unknownField1": 0,
    "level": 55,
    "length": [
      3,
      7
    ],
    "weight": 760,
    "description": "ChanseyDescription",
    "aiInfo": "AI_INFO_UNK_08"
  },
  "KANGASKHAN": {
    "type": "TYPE_PKMN_COLORLESS",
    "gfx": "KangaskhanCardGfx",
    "name": "KangaskhanName",
    "rarity": "STAR",
    "sets": [
      "COLOSSEUM",
      "JUNGLE"
    ],
    "id": "KANGASKHAN",
    "hp": 90,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "COLORLESS",
          1
        ],
        "name": "FetchName",
        "description": "FetchDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "RESIDUAL",
        "effectCommands": "KangaskhanFetchEffectCommands",
        "flags": {
          "flags1": "DRAW_CARD",
          "flags2": "NONE",
          "flags3": "SPECIAL_AI_HANDLING"
        },
        "priority": 0,
        "animation": "ATK_ANIM_GLOW_EFFECT"
      },
      {
        "energy": [
          "COLORLESS",
          4
        ],
        "name": "CometPunchName",
        "description": "QuadrupleAttackX20Description",
        "descriptionCont": "NONE",
        "damage": 20,
        "category": "DAMAGE_X",
        "effectCommands": "KangaskhanCometPunchEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_PUNCH"
      }
    ],
    "retreatCost": 3,
    "weakness": "WR_FIGHTING",
    "resistance": "WR_PSYCHIC",
    "category": "ParentName",
    "pokedexNumber": 115,
    "unknownField1": 0,
    "level": 40,
    "length": [
      7,
      3
    ],
    "weight": 1760,
    "description": "KangaskhanDescription",
    "aiInfo": 0
  },
  "TAUROS": {
    "type": "TYPE_PKMN_COLORLESS",
    "gfx": "TaurosCardGfx",
    "name": "TaurosName",
    "rarity": "DIAMOND",
    "sets": [
      "MYSTERY",
      "JUNGLE"
    ],
    "id": "TAUROS",
    "hp": 60,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "COLORLESS",
          2
        ],
        "name": "StompName",
        "description": "StompDescription",
        "descriptionCont": "NONE",
        "damage": 20,
        "category": "DAMAGE_PLUS",
        "effectCommands": "TaurosStompEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "FLAG_2_BIT_6",
          "flags3": "NONE"
        },
        "priority": 1,
        "animation": "ATK_ANIM_HIT"
      },
      {
        "energy": [
          "COLORLESS",
          3
        ],
        "name": "RampageName",
        "description": "RampageDescription",
        "descriptionCont": "NONE",
        "damage": 20,
        "category": "DAMAGE_PLUS",
        "effectCommands": "TaurosRampageEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "BOOST_IF_TAKEN_DAMAGE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_RAMPAGE"
      }
    ],
    "retreatCost": 2,
    "weakness": "WR_FIGHTING",
    "resistance": "WR_PSYCHIC",
    "category": "WildBullName",
    "pokedexNumber": 128,
    "unknownField1": 0,
    "level": 32,
    "length": [
      4,
      7
    ],
    "weight": 1950,
    "description": "TaurosDescription",
    "aiInfo": 0
  },
  "DITTO": {
    "type": "TYPE_PKMN_COLORLESS",
    "gfx": "DittoCardGfx",
    "name": "DittoName",
    "rarity": "STAR",
    "sets": [
      "LABORATORY",
      "GB"
    ],
    "id": "DITTO",
    "hp": 50,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "COLORLESS",
          1
        ],
        "name": "PoundName",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_HIT"
      },
      {
        "energy": [
          "COLORLESS",
          3
        ],
        "name": "MorphName",
        "description": "MorphDescription",
        "descriptionCont": "MorphDescriptionCont",
        "damage": 0,
        "category": "RESIDUAL",
        "effectCommands": "DittoMorphEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "FLAG_2_BIT_6",
          "flags3": "NONE"
        },
        "priority": 3,
        "animation": "ATK_ANIM_GLOW_EFFECT"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_FIGHTING",
    "resistance": "WR_PSYCHIC",
    "category": "TransformName",
    "pokedexNumber": 132,
    "unknownField1": 0,
    "level": 19,
    "length": [
      1,
      0
    ],
    "weight": 90,
    "description": "DittoDescription",
    "aiInfo": 0
  },
  "EEVEE": {
    "type": "TYPE_PKMN_COLORLESS",
    "gfx": "EeveeCardGfx",
    "name": "EeveeName",
    "rarity": "CIRCLE",
    "sets": [
      "EVOLUTION",
      "JUNGLE"
    ],
    "id": "EEVEE",
    "hp": 50,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "COLORLESS",
          1
        ],
        "name": "TailWagName",
        "description": "TailWagDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "EeveeTailWagEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NULLIFY_OR_WEAKEN_ATTACK",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_NONE"
      },
      {
        "energy": [
          "COLORLESS",
          2
        ],
        "name": "QuickAttackName",
        "description": "QuickAttackDescription",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_PLUS",
        "effectCommands": "EeveeQuickAttackEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_QUICK_ATTACK"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_FIGHTING",
    "resistance": "WR_PSYCHIC",
    "category": "EvolutionName",
    "pokedexNumber": 133,
    "unknownField1": 0,
    "level": 12,
    "length": [
      1,
      0
    ],
    "weight": 140,
    "description": "EeveeDescription",
    "aiInfo": [
      "AI_INFO_BENCH_UTILITY",
      "HAS_EVOLUTION"
    ]
  },
  "PORYGON": {
    "type": "TYPE_PKMN_COLORLESS",
    "gfx": "PorygonCardGfx",
    "name": "PorygonName",
    "rarity": "DIAMOND",
    "sets": [
      "LABORATORY",
      "NONE"
    ],
    "id": "PORYGON",
    "hp": 30,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "COLORLESS",
          1
        ],
        "name": "Conversion1Name",
        "description": "Conversion1Description",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "PorygonConversion1EffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "SPECIAL_AI_HANDLING"
        },
        "priority": 0,
        "animation": "ATK_ANIM_GLOW_EFFECT"
      },
      {
        "energy": [
          "COLORLESS",
          2
        ],
        "name": "Conversion2Name",
        "description": "Conversion2Description",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "RESIDUAL",
        "effectCommands": "PorygonConversion2EffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "SPECIAL_AI_HANDLING"
        },
        "priority": 0,
        "animation": "ATK_ANIM_GLOW_EFFECT"
      }
    ],
    "retreatCost": 1,
    "weakness": "WR_FIGHTING",
    "resistance": "WR_PSYCHIC",
    "category": "VirtualName",
    "pokedexNumber": 137,
    "unknownField1": 0,
    "level": 12,
    "length": [
      2,
      7
    ],
    "weight": 800,
    "description": "PorygonDescription",
    "aiInfo": 0
  },
  "SNORLAX": {
    "type": "TYPE_PKMN_COLORLESS",
    "gfx": "SnorlaxCardGfx",
    "name": "SnorlaxName",
    "rarity": "STAR",
    "sets": [
      "COLOSSEUM",
      "JUNGLE"
    ],
    "id": "SNORLAX",
    "hp": 90,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          0
        ],
        "name": "ThickSkinnedName",
        "description": "ThickSkinnedDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "POKEMON_POWER",
        "effectCommands": "SnorlaxThickSkinnedEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_GLOW_EFFECT"
      },
      {
        "energy": [
          "COLORLESS",
          4
        ],
        "name": "BodySlamName",
        "description": "MayInflictParalysisDescription",
        "descriptionCont": "NONE",
        "damage": 30,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "SnorlaxBodySlamEffectCommands",
        "flags": {
          "flags1": "INFLICT_PARALYSIS",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_BIG_HIT"
      }
    ],
    "retreatCost": 4,
    "weakness": "WR_FIGHTING",
    "resistance": "WR_PSYCHIC",
    "category": "SleepingName",
    "pokedexNumber": 143,
    "unknownField1": 0,
    "level": 20,
    "length": [
      6,
      11
    ],
    "weight": 10140,
    "description": "SnorlaxDescription",
    "aiInfo": 0
  },
  "DRATINI": {
    "type": "TYPE_PKMN_COLORLESS",
    "gfx": "DratiniCardGfx",
    "name": "DratiniName",
    "rarity": "DIAMOND",
    "sets": [
      "MYSTERY",
      "NONE"
    ],
    "id": "DRATINI",
    "hp": 40,
    "stage": "BASIC",
    "preEvoName": "NONE",
    "attacks": [
      {
        "energy": [
          "COLORLESS",
          1
        ],
        "name": "PoundName",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 10,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_HIT"
      },
      {
        "energy": [
          0
        ],
        "name": "NONE",
        "description": "NONE",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "NONE",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_NONE"
      }
    ],
    "retreatCost": 1,
    "weakness": "NONE",
    "resistance": "WR_PSYCHIC",
    "category": "DragonName",
    "pokedexNumber": 147,
    "unknownField1": 0,
    "level": 10,
    "length": [
      5,
      11
    ],
    "weight": 70,
    "description": "DratiniDescription",
    "aiInfo": [
      "AI_INFO_ENCOURAGE_EVO",
      "HAS_EVOLUTION"
    ]
  },
  "DRAGONAIR": {
    "type": "TYPE_PKMN_COLORLESS",
    "gfx": "DragonairCardGfx",
    "name": "DragonairName",
    "rarity": "STAR",
    "sets": [
      "MYSTERY",
      "NONE"
    ],
    "id": "DRAGONAIR",
    "hp": 80,
    "stage": "STAGE1",
    "preEvoName": "DratiniName",
    "attacks": [
      {
        "energy": [
          "COLORLESS",
          3
        ],
        "name": "SlamName",
        "description": "DoubleAttackX30Description",
        "descriptionCont": "NONE",
        "damage": 30,
        "category": "DAMAGE_X",
        "effectCommands": "DragonairSlamEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_HIT"
      },
      {
        "energy": [
          "COLORLESS",
          4
        ],
        "name": "HyperBeamName",
        "description": "Discard1EnergyFromTargetDescription",
        "descriptionCont": "NONE",
        "damage": 20,
        "category": "DAMAGE_NORMAL",
        "effectCommands": "DragonairHyperBeamEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "SPECIAL_AI_HANDLING"
        },
        "priority": 0,
        "animation": "ATK_ANIM_HYPER_BEAM"
      }
    ],
    "retreatCost": 2,
    "weakness": "NONE",
    "resistance": "WR_PSYCHIC",
    "category": "DragonName",
    "pokedexNumber": 148,
    "unknownField1": 0,
    "level": 33,
    "length": [
      13,
      1
    ],
    "weight": 360,
    "description": "DragonairDescription",
    "aiInfo": "HAS_EVOLUTION"
  },
  "DRAGONITE_LV41": {
    "type": "TYPE_PKMN_COLORLESS",
    "gfx": "DragoniteLv41CardGfx",
    "name": "DragoniteName",
    "rarity": "STAR",
    "sets": [
      "PROMOTIONAL",
      "GB"
    ],
    "id": "DRAGONITE_LV41",
    "hp": 100,
    "stage": "STAGE2",
    "preEvoName": "DragonairName",
    "attacks": [
      {
        "energy": [
          0
        ],
        "name": "HealingWindName",
        "description": "HealingWindDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "POKEMON_POWER",
        "effectCommands": "DragoniteHealingWindEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_HEALING_WIND"
      },
      {
        "energy": [
          "COLORLESS",
          3
        ],
        "name": "SlamName",
        "description": "DoubleAttackX30Description",
        "descriptionCont": "NONE",
        "damage": 30,
        "category": "DAMAGE_X",
        "effectCommands": "DragoniteLv41SlamEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_HIT"
      }
    ],
    "retreatCost": 2,
    "weakness": "NONE",
    "resistance": "WR_FIGHTING",
    "category": "DragonName",
    "pokedexNumber": 149,
    "unknownField1": 0,
    "level": 41,
    "length": [
      7,
      3
    ],
    "weight": 4630,
    "description": "DragoniteLv41Description",
    "aiInfo": 0
  },
  "DRAGONITE_LV45": {
    "type": "TYPE_PKMN_COLORLESS",
    "gfx": "DragoniteLv45CardGfx",
    "name": "DragoniteName",
    "rarity": "STAR",
    "sets": [
      "MYSTERY",
      "FOSSIL"
    ],
    "id": "DRAGONITE_LV45",
    "hp": 100,
    "stage": "STAGE2",
    "preEvoName": "DragonairName",
    "attacks": [
      {
        "energy": [
          0
        ],
        "name": "StepInName",
        "description": "StepInDescription",
        "descriptionCont": "NONE",
        "damage": 0,
        "category": "POKEMON_POWER",
        "effectCommands": "DragoniteStepInEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_GLOW_EFFECT"
      },
      {
        "energy": [
          "COLORLESS",
          4
        ],
        "name": "SlamName",
        "description": "DoubleAttackX40Description",
        "descriptionCont": "NONE",
        "damage": 40,
        "category": "DAMAGE_X",
        "effectCommands": "DragoniteLv45SlamEffectCommands",
        "flags": {
          "flags1": "NONE",
          "flags2": "NONE",
          "flags3": "NONE"
        },
        "priority": 0,
        "animation": "ATK_ANIM_HIT"
      }
    ],
    "retreatCost": 1,
    "weakness": "NONE",
    "resistance": "WR_FIGHTING",
    "category": "DragonName",
    "pokedexNumber": 149,
    "unknownField1": 0,
    "level": 45,
    "length": [
      7,
      3
    ],
    "weight": 4630,
    "description": "DragoniteDescription",
    "aiInfo": 0
  }
}