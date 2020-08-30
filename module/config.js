// Namespace Configuration Values
export const FANHUNTER = {};

// ASCII Artwork
FANHUNTER.ASCII = `
    _________    _   ____  ____  ___   __________________ 
   / ____/   |  / | / / / / / / / / | / /_  __/ ____/ __ \\
  / /_  / /| | /  |/ / /_/ / / / /  |/ / / / / __/ / /_/ /
 / __/ / ___ |/ /|  / __  / /_/ / /|  / / / / /___/ _, _/ 
/_/   /_/  |_/_/ |_/_/ /_/\\____/_/ |_/ /_/ /_____/_/ |_|  
                                                          
`;


/**
 * The set of Ability Scores used within the system
 * @type {Object}
 */
FANHUNTER.abilities = {
  "str": "FANHUNTER3E.AbilityStr",
  "dex": "FANHUNTER3E.AbilityDex",
  "con": "FANHUNTER3E.AbilityCon",
  "int": "FANHUNTER3E.AbilityInt",
  "wis": "FANHUNTER3E.AbilityWis",
  "cha": "FANHUNTER3E.AbilityCha"
};

FANHUNTER.abilityAbbreviations = {
  "str": "FANHUNTER3E.AbilityStrAbbr",
  "dex": "FANHUNTER3E.AbilityDexAbbr",
  "con": "FANHUNTER3E.AbilityConAbbr",
  "int": "FANHUNTER3E.AbilityIntAbbr",
  "wis": "FANHUNTER3E.AbilityWisAbbr",
  "cha": "FANHUNTER3E.AbilityChaAbbr"
};

/* -------------------------------------------- */

/**
 * Character alignment options
 * @type {Object}
 */
FANHUNTER.alignments = {
  'lg': "FANHUNTER3E.AlignmentLG",
  'ng': "FANHUNTER3E.AlignmentNG",
  'cg': "FANHUNTER3E.AlignmentCG",
  'ln': "FANHUNTER3E.AlignmentLN",
  'tn': "FANHUNTER3E.AlignmentTN",
  'cn': "FANHUNTER3E.AlignmentCN",
  'le': "FANHUNTER3E.AlignmentLE",
  'ne': "FANHUNTER3E.AlignmentNE",
  'ce': "FANHUNTER3E.AlignmentCE"
};


FANHUNTER.weaponProficiencies = {
  "sim": "FANHUNTER3E.WeaponSimpleProficiency",
  "mar": "FANHUNTER3E.WeaponMartialProficiency"
};

FANHUNTER.toolProficiencies = {
  "art": "FANHUNTER3E.ToolArtisans",
  "disg": "FANHUNTER3E.ToolDisguiseKit",
  "forg": "FANHUNTER3E.ToolForgeryKit",
  "game": "FANHUNTER3E.ToolGamingSet",
  "herb": "FANHUNTER3E.ToolHerbalismKit",
  "music": "FANHUNTER3E.ToolMusicalInstrument",
  "navg": "FANHUNTER3E.ToolNavigators",
  "pois": "FANHUNTER3E.ToolPoisonersKit",
  "thief": "FANHUNTER3E.ToolThieves",
  "vehicle": "FANHUNTER3E.ToolVehicle"
};


/* -------------------------------------------- */

/**
 * This Object defines the various lengths of time which can occur
 * @type {Object}
 */
FANHUNTER.timePeriods = {
  "inst": "FANHUNTER3E.TimeInst",
  "turn": "FANHUNTER3E.TimeTurn",
  "round": "FANHUNTER3E.TimeRound",
  "minute": "FANHUNTER3E.TimeMinute",
  "hour": "FANHUNTER3E.TimeHour",
  "day": "FANHUNTER3E.TimeDay",
  "month": "FANHUNTER3E.TimeMonth",
  "year": "FANHUNTER3E.TimeYear",
  "perm": "FANHUNTER3E.TimePerm",
  "spec": "FANHUNTER3E.Special"
};


/* -------------------------------------------- */

/**
 * This describes the ways that an ability can be activated
 * @type {Object}
 */
FANHUNTER.abilityActivationTypes = {
  "none": "FANHUNTER3E.None",
  "action": "FANHUNTER3E.Action",
  "bonus": "FANHUNTER3E.BonusAction",
  "reaction": "FANHUNTER3E.Reaction",
  "minute": FANHUNTER.timePeriods.minute,
  "hour": FANHUNTER.timePeriods.hour,
  "day": FANHUNTER.timePeriods.day,
  "special": FANHUNTER.timePeriods.spec,
  "legendary": "FANHUNTER3E.LegAct",
  "lair": "FANHUNTER3E.LairAct",
  "crew": "FANHUNTER3E.VehicleCrewAction"
};

/* -------------------------------------------- */


FANHUNTER.abilityConsumptionTypes = {
  "ammo": "FANHUNTER3E.ConsumeAmmunition",
  "attribute": "FANHUNTER3E.ConsumeAttribute",
  "material": "FANHUNTER3E.ConsumeMaterial",
  "charges": "FANHUNTER3E.ConsumeCharges"
};


/* -------------------------------------------- */

// Creature Sizes
FANHUNTER.actorSizes = {
  "tiny": "FANHUNTER3E.SizeTiny",
  "sm": "FANHUNTER3E.SizeSmall",
  "med": "FANHUNTER3E.SizeMedium",
  "lg": "FANHUNTER3E.SizeLarge",
  "huge": "FANHUNTER3E.SizeHuge",
  "grg": "FANHUNTER3E.SizeGargantuan"
};

FANHUNTER.tokenSizes = {
  "tiny": 1,
  "sm": 1,
  "med": 1,
  "lg": 2,
  "huge": 3,
  "grg": 4
};

/* -------------------------------------------- */

/**
 * Classification types for item action types
 * @type {Object}
 */
FANHUNTER.itemActionTypes = {
  "mwak": "FANHUNTER3E.ActionMWAK",
  "rwak": "FANHUNTER3E.ActionRWAK",
  "msak": "FANHUNTER3E.ActionMSAK",
  "rsak": "FANHUNTER3E.ActionRSAK",
  "save": "FANHUNTER3E.ActionSave",
  "heal": "FANHUNTER3E.ActionHeal",
  "abil": "FANHUNTER3E.ActionAbil",
  "util": "FANHUNTER3E.ActionUtil",
  "other": "FANHUNTER3E.ActionOther"
};

/* -------------------------------------------- */

FANHUNTER.itemCapacityTypes = {
  "items": "FANHUNTER3E.ItemContainerCapacityItems",
  "weight": "FANHUNTER3E.ItemContainerCapacityWeight"
};

/* -------------------------------------------- */

/**
 * Enumerate the lengths of time over which an item can have limited use ability
 * @type {Object}
 */
FANHUNTER.limitedUsePeriods = {
  "sr": "FANHUNTER3E.ShortRest",
  "lr": "FANHUNTER3E.LongRest",
  "day": "FANHUNTER3E.Day",
  "charges": "FANHUNTER3E.Charges"
};


/* -------------------------------------------- */

/**
 * The set of equipment types for armor, clothing, and other objects which can ber worn by the character
 * @type {Object}
 */
FANHUNTER.equipmentTypes = {
  "light": "FANHUNTER3E.EquipmentLight",
  "medium": "FANHUNTER3E.EquipmentMedium",
  "heavy": "FANHUNTER3E.EquipmentHeavy",
  "bonus": "FANHUNTER3E.EquipmentBonus",
  "natural": "FANHUNTER3E.EquipmentNatural",
  "shield": "FANHUNTER3E.EquipmentShield",
  "clothing": "FANHUNTER3E.EquipmentClothing",
  "trinket": "FANHUNTER3E.EquipmentTrinket",
  "vehicle": "FANHUNTER3E.EquipmentVehicle"
};


/* -------------------------------------------- */

/**
 * The set of Armor Proficiencies which a character may have
 * @type {Object}
 */
FANHUNTER.armorProficiencies = {
  "lgt": FANHUNTER.equipmentTypes.light,
  "med": FANHUNTER.equipmentTypes.medium,
  "hvy": FANHUNTER.equipmentTypes.heavy,
  "shl": "FANHUNTER3E.EquipmentShieldProficiency"
};


/* -------------------------------------------- */

/**
 * Enumerate the valid consumable types which are recognized by the system
 * @type {Object}
 */
FANHUNTER.consumableTypes = {
  "ammo": "FANHUNTER3E.ConsumableAmmunition",
  "potion": "FANHUNTER3E.ConsumablePotion",
  "poison": "FANHUNTER3E.ConsumablePoison",
  "food": "FANHUNTER3E.ConsumableFood",
  "scroll": "FANHUNTER3E.ConsumableScroll",
  "wand": "FANHUNTER3E.ConsumableWand",
  "rod": "FANHUNTER3E.ConsumableRod",
  "trinket": "FANHUNTER3E.ConsumableTrinket"
};

/* -------------------------------------------- */

/**
 * The valid currency denominations supported by the 5e system
 * @type {Object}
 */
FANHUNTER.currencies = {
  "pp": "FANHUNTER3E.CurrencyPP",
  "gp": "FANHUNTER3E.CurrencyGP",
  "ep": "FANHUNTER3E.CurrencyEP",
  "sp": "FANHUNTER3E.CurrencySP",
  "cp": "FANHUNTER3E.CurrencyCP",
};


/**
 * Define the upwards-conversion rules for registered currency types
 * @type {{string, object}}
 */
FANHUNTER.currencyConversion = {
  cp: {into: "sp", each: 10},
  sp: {into: "ep", each: 5 },
  ep: {into: "gp", each: 2 },
  gp: {into: "pp", each: 10}
};

/* -------------------------------------------- */


// Damage Types
FANHUNTER.damageTypes = {
  "acid": "FANHUNTER3E.DamageAcid",
  "bludgeoning": "FANHUNTER3E.DamageBludgeoning",
  "cold": "FANHUNTER3E.DamageCold",
  "fire": "FANHUNTER3E.DamageFire",
  "force": "FANHUNTER3E.DamageForce",
  "lightning": "FANHUNTER3E.DamageLightning",
  "necrotic": "FANHUNTER3E.DamageNecrotic",
  "piercing": "FANHUNTER3E.DamagePiercing",
  "poison": "FANHUNTER3E.DamagePoison",
  "psychic": "FANHUNTER3E.DamagePsychic",
  "radiant": "FANHUNTER3E.DamageRadiant",
  "slashing": "FANHUNTER3E.DamageSlashing",
  "thunder": "FANHUNTER3E.DamageThunder"
};

// Damage Resistance Types
FANHUNTER.damageResistanceTypes = mergeObject(duplicate(FANHUNTER.damageTypes), {
  "physical": "FANHUNTER3E.DamagePhysical"
});


/* -------------------------------------------- */

FANHUNTER.distanceUnits = {
  "none": "FANHUNTER3E.None",
  "self": "FANHUNTER3E.DistSelf",
  "touch": "FANHUNTER3E.DistTouch",
  "ft": "FANHUNTER3E.DistFt",
  "mi": "FANHUNTER3E.DistMi",
  "spec": "FANHUNTER3E.Special",
  "any": "FANHUNTER3E.DistAny"
};

/* -------------------------------------------- */


/**
 * Configure aspects of encumbrance calculation so that it could be configured by modules
 * @type {Object}
 */
FANHUNTER.encumbrance = {
  currencyPerWeight: 50,
  strMultiplier: 15,
  vehicleWeightMultiplier: 2000 // 2000 lbs in a ton
};

/* -------------------------------------------- */

/**
 * This Object defines the types of single or area targets which can be applied
 * @type {Object}
 */
FANHUNTER.targetTypes = {
  "none": "FANHUNTER3E.None",
  "self": "FANHUNTER3E.TargetSelf",
  "creature": "FANHUNTER3E.TargetCreature",
  "ally": "FANHUNTER3E.TargetAlly",
  "enemy": "FANHUNTER3E.TargetEnemy",
  "object": "FANHUNTER3E.TargetObject",
  "space": "FANHUNTER3E.TargetSpace",
  "radius": "FANHUNTER3E.TargetRadius",
  "sphere": "FANHUNTER3E.TargetSphere",
  "cylinder": "FANHUNTER3E.TargetCylinder",
  "cone": "FANHUNTER3E.TargetCone",
  "square": "FANHUNTER3E.TargetSquare",
  "cube": "FANHUNTER3E.TargetCube",
  "line": "FANHUNTER3E.TargetLine",
  "wall": "FANHUNTER3E.TargetWall"
};


/* -------------------------------------------- */


/**
 * Map the subset of target types which produce a template area of effect
 * The keys are FANHUNTER3E target types and the values are MeasuredTemplate shape types
 * @type {Object}
 */
FANHUNTER.areaTargetTypes = {
  cone: "cone",
  cube: "rect",
  cylinder: "circle",
  line: "ray",
  radius: "circle",
  sphere: "circle",
  square: "rect",
  wall: "ray"
};


/* -------------------------------------------- */

// Healing Types
FANHUNTER.healingTypes = {
  "healing": "FANHUNTER3E.Healing",
  "temphp": "FANHUNTER3E.HealingTemp"
};


/* -------------------------------------------- */


/**
 * Enumerate the denominations of hit dice which can apply to classes
 * @type {Array.<string>}
 */
FANHUNTER.hitDieTypes = ["d6", "d8", "d10", "d12"];


/* -------------------------------------------- */

/**
 * Character senses options
 * @type {Object}
 */
FANHUNTER.senses = {
  "bs": "FANHUNTER3E.SenseBS",
  "dv": "FANHUNTER3E.SenseDV",
  "ts": "FANHUNTER3E.SenseTS",
  "tr": "FANHUNTER3E.SenseTR"
};


/* -------------------------------------------- */

/**
 * The set of skill which can be trained
 * @type {Object}
 */
FANHUNTER.skills = {
  "acr": "FANHUNTER3E.SkillAcr",
  "ani": "FANHUNTER3E.SkillAni",
  "arc": "FANHUNTER3E.SkillArc",
  "ath": "FANHUNTER3E.SkillAth",
  "dec": "FANHUNTER3E.SkillDec",
  "his": "FANHUNTER3E.SkillHis",
  "ins": "FANHUNTER3E.SkillIns",
  "itm": "FANHUNTER3E.SkillItm",
  "inv": "FANHUNTER3E.SkillInv",
  "med": "FANHUNTER3E.SkillMed",
  "nat": "FANHUNTER3E.SkillNat",
  "prc": "FANHUNTER3E.SkillPrc",
  "prf": "FANHUNTER3E.SkillPrf",
  "per": "FANHUNTER3E.SkillPer",
  "rel": "FANHUNTER3E.SkillRel",
  "slt": "FANHUNTER3E.SkillSlt",
  "ste": "FANHUNTER3E.SkillSte",
  "sur": "FANHUNTER3E.SkillSur"
};


/* -------------------------------------------- */

FANHUNTER.spellPreparationModes = {
  "always": "FANHUNTER3E.SpellPrepAlways",
  "atwill": "FANHUNTER3E.SpellPrepAtWill",
  "innate": "FANHUNTER3E.SpellPrepInnate",
  "pact": "FANHUNTER3E.PactMagic",
  "prepared": "FANHUNTER3E.SpellPrepPrepared"
};

FANHUNTER.spellUpcastModes = ["always", "pact", "prepared"];


FANHUNTER.spellProgression = {
  "none": "FANHUNTER3E.SpellNone",
  "full": "FANHUNTER3E.SpellProgFull",
  "half": "FANHUNTER3E.SpellProgHalf",
  "third": "FANHUNTER3E.SpellProgThird",
  "pact": "FANHUNTER3E.SpellProgPact",
  "artificer": "FANHUNTER3E.SpellProgArt"
};

/* -------------------------------------------- */

/**
 * The available choices for how spell damage scaling may be computed
 * @type {Object}
 */
FANHUNTER.spellScalingModes = {
  "none": "FANHUNTER3E.SpellNone",
  "cantrip": "FANHUNTER3E.SpellCantrip",
  "level": "FANHUNTER3E.SpellLevel"
};

/* -------------------------------------------- */


/**
 * Define the set of types which a weapon item can take
 * @type {Object}
 */
FANHUNTER.weaponTypes = {
  "simpleM": "FANHUNTER3E.WeaponSimpleM",
  "simpleR": "FANHUNTER3E.WeaponSimpleR",
  "martialM": "FANHUNTER3E.WeaponMartialM",
  "martialR": "FANHUNTER3E.WeaponMartialR",
  "natural": "FANHUNTER3E.WeaponNatural",
  "improv": "FANHUNTER3E.WeaponImprov",
  "siege": "FANHUNTER3E.WeaponSiege"
};


/* -------------------------------------------- */

/**
 * Define the set of weapon property flags which can exist on a weapon
 * @type {Object}
 */
FANHUNTER.weaponProperties = {
  "amm": "FANHUNTER3E.WeaponPropertiesAmm",
  "hvy": "FANHUNTER3E.WeaponPropertiesHvy",
  "fin": "FANHUNTER3E.WeaponPropertiesFin",
  "fir": "FANHUNTER3E.WeaponPropertiesFir",
  "foc": "FANHUNTER3E.WeaponPropertiesFoc",
  "lgt": "FANHUNTER3E.WeaponPropertiesLgt",
  "lod": "FANHUNTER3E.WeaponPropertiesLod",
  "rch": "FANHUNTER3E.WeaponPropertiesRch",
  "rel": "FANHUNTER3E.WeaponPropertiesRel",
  "ret": "FANHUNTER3E.WeaponPropertiesRet",
  "spc": "FANHUNTER3E.WeaponPropertiesSpc",
  "thr": "FANHUNTER3E.WeaponPropertiesThr",
  "two": "FANHUNTER3E.WeaponPropertiesTwo",
  "ver": "FANHUNTER3E.WeaponPropertiesVer"
};


// Spell Components
FANHUNTER.spellComponents = {
  "V": "FANHUNTER3E.ComponentVerbal",
  "S": "FANHUNTER3E.ComponentSomatic",
  "M": "FANHUNTER3E.ComponentMaterial"
};

// Spell Schools
FANHUNTER.spellSchools = {
  "abj": "FANHUNTER3E.SchoolAbj",
  "con": "FANHUNTER3E.SchoolCon",
  "div": "FANHUNTER3E.SchoolDiv",
  "enc": "FANHUNTER3E.SchoolEnc",
  "evo": "FANHUNTER3E.SchoolEvo",
  "ill": "FANHUNTER3E.SchoolIll",
  "nec": "FANHUNTER3E.SchoolNec",
  "trs": "FANHUNTER3E.SchoolTrs"
};

// Spell Levels
FANHUNTER.spellLevels = {
  0: "FANHUNTER3E.SpellLevel0",
  1: "FANHUNTER3E.SpellLevel1",
  2: "FANHUNTER3E.SpellLevel2",
  3: "FANHUNTER3E.SpellLevel3",
  4: "FANHUNTER3E.SpellLevel4",
  5: "FANHUNTER3E.SpellLevel5",
  6: "FANHUNTER3E.SpellLevel6",
  7: "FANHUNTER3E.SpellLevel7",
  8: "FANHUNTER3E.SpellLevel8",
  9: "FANHUNTER3E.SpellLevel9"
};

// Spell Scroll Compendium UUIDs
FANHUNTER.spellScrollIds = {
  0: 'Compendium.FANHUNTER3E.items.rQ6sO7HDWzqMhSI3',
  1: 'Compendium.FANHUNTER3E.items.9GSfMg0VOA2b4uFN',
  2: 'Compendium.FANHUNTER3E.items.XdDp6CKh9qEvPTuS',
  3: 'Compendium.FANHUNTER3E.items.hqVKZie7x9w3Kqds',
  4: 'Compendium.FANHUNTER3E.items.DM7hzgL836ZyUFB1',
  5: 'Compendium.FANHUNTER3E.items.wa1VF8TXHmkrrR35',
  6: 'Compendium.FANHUNTER3E.items.tI3rWx4bxefNCexS',
  7: 'Compendium.FANHUNTER3E.items.mtyw4NS1s7j2EJaD',
  8: 'Compendium.FANHUNTER3E.items.aOrinPg7yuDZEuWr',
  9: 'Compendium.FANHUNTER3E.items.O4YbkJkLlnsgUszZ'
};

/**
 * Define the standard slot progression by character level.
 * The entries of this array represent the spell slot progression for a full spell-caster.
 * @type {Array[]}
 */
FANHUNTER.SPELL_SLOT_TABLE = [
  [2],
  [3],
  [4, 2],
  [4, 3],
  [4, 3, 2],
  [4, 3, 3],
  [4, 3, 3, 1],
  [4, 3, 3, 2],
  [4, 3, 3, 3, 1],
  [4, 3, 3, 3, 2],
  [4, 3, 3, 3, 2, 1],
  [4, 3, 3, 3, 2, 1],
  [4, 3, 3, 3, 2, 1, 1],
  [4, 3, 3, 3, 2, 1, 1],
  [4, 3, 3, 3, 2, 1, 1, 1],
  [4, 3, 3, 3, 2, 1, 1, 1],
  [4, 3, 3, 3, 2, 1, 1, 1, 1],
  [4, 3, 3, 3, 3, 1, 1, 1, 1],
  [4, 3, 3, 3, 3, 2, 1, 1, 1],
  [4, 3, 3, 3, 3, 2, 2, 1, 1]
];

/* -------------------------------------------- */

// Polymorph options.
FANHUNTER.polymorphSettings = {
  keepPhysical: 'FANHUNTER3E.PolymorphKeepPhysical',
  keepMental: 'FANHUNTER3E.PolymorphKeepMental',
  keepSaves: 'FANHUNTER3E.PolymorphKeepSaves',
  keepSkills: 'FANHUNTER3E.PolymorphKeepSkills',
  mergeSaves: 'FANHUNTER3E.PolymorphMergeSaves',
  mergeSkills: 'FANHUNTER3E.PolymorphMergeSkills',
  keepClass: 'FANHUNTER3E.PolymorphKeepClass',
  keepFeats: 'FANHUNTER3E.PolymorphKeepFeats',
  keepSpells: 'FANHUNTER3E.PolymorphKeepSpells',
  keepItems: 'FANHUNTER3E.PolymorphKeepItems',
  keepBio: 'FANHUNTER3E.PolymorphKeepBio',
  keepVision: 'FANHUNTER3E.PolymorphKeepVision'
};

/* -------------------------------------------- */

/**
 * Skill, ability, and tool proficiency levels
 * Each level provides a proficiency multiplier
 * @type {Object}
 */
FANHUNTER.proficiencyLevels = {
  0: "FANHUNTER3E.NotProficient",
  1: "FANHUNTER3E.Proficient",
  0.5: "FANHUNTER3E.HalfProficient",
  2: "FANHUNTER3E.Expertise"
};

/* -------------------------------------------- */

/**
 * The amount of cover provided by an object.
 * In cases where multiple pieces of cover are
 * in play, we take the highest value.
 */
FANHUNTER.cover = {
  0: 'FANHUNTER3E.None',
  .5: 'FANHUNTER3E.CoverHalf',
  .75: 'FANHUNTER3E.CoverThreeQuarters',
  1: 'FANHUNTER3E.CoverTotal'
};

/* -------------------------------------------- */


// Condition Types
FANHUNTER.conditionTypes = {
  "blinded": "FANHUNTER3E.ConBlinded",
  "charmed": "FANHUNTER3E.ConCharmed",
  "deafened": "FANHUNTER3E.ConDeafened",
  "diseased": "FANHUNTER3E.ConDiseased",
  "exhaustion": "FANHUNTER3E.ConExhaustion",
  "frightened": "FANHUNTER3E.ConFrightened",
  "grappled": "FANHUNTER3E.ConGrappled",
  "incapacitated": "FANHUNTER3E.ConIncapacitated",
  "invisible": "FANHUNTER3E.ConInvisible",
  "paralyzed": "FANHUNTER3E.ConParalyzed",
  "petrified": "FANHUNTER3E.ConPetrified",
  "poisoned": "FANHUNTER3E.ConPoisoned",
  "prone": "FANHUNTER3E.ConProne",
  "restrained": "FANHUNTER3E.ConRestrained",
  "stunned": "FANHUNTER3E.ConStunned",
  "unconscious": "FANHUNTER3E.ConUnconscious"
};

// Languages
FANHUNTER.languages = {
  "common": "FANHUNTER3E.LanguagesCommon",
  "aarakocra": "FANHUNTER3E.LanguagesAarakocra",
  "abyssal": "FANHUNTER3E.LanguagesAbyssal",
  "aquan": "FANHUNTER3E.LanguagesAquan",
  "auran": "FANHUNTER3E.LanguagesAuran",
  "celestial": "FANHUNTER3E.LanguagesCelestial",
  "deep": "FANHUNTER3E.LanguagesDeepSpeech",
  "draconic": "FANHUNTER3E.LanguagesDraconic",
  "druidic": "FANHUNTER3E.LanguagesDruidic",
  "dwarvish": "FANHUNTER3E.LanguagesDwarvish",
  "elvish": "FANHUNTER3E.LanguagesElvish",
  "giant": "FANHUNTER3E.LanguagesGiant",
  "gith": "FANHUNTER3E.LanguagesGith",
  "gnomish": "FANHUNTER3E.LanguagesGnomish",
  "goblin": "FANHUNTER3E.LanguagesGoblin",
  "gnoll": "FANHUNTER3E.LanguagesGnoll",
  "halfling": "FANHUNTER3E.LanguagesHalfling",
  "ignan": "FANHUNTER3E.LanguagesIgnan",
  "infernal": "FANHUNTER3E.LanguagesInfernal",
  "orc": "FANHUNTER3E.LanguagesOrc",
  "primordial": "FANHUNTER3E.LanguagesPrimordial",
  "sylvan": "FANHUNTER3E.LanguagesSylvan",
  "terran": "FANHUNTER3E.LanguagesTerran",
  "cant": "FANHUNTER3E.LanguagesThievesCant",
  "undercommon": "FANHUNTER3E.LanguagesUndercommon"
};

// Character Level XP Requirements
FANHUNTER.CHARACTER_EXP_LEVELS =  [
  0, 300, 900, 2700, 6500, 14000, 23000, 34000, 48000, 64000, 85000, 100000,
  120000, 140000, 165000, 195000, 225000, 265000, 305000, 355000]
;

// Challenge Rating XP Levels
FANHUNTER.CR_EXP_LEVELS = [
  10, 200, 450, 700, 1100, 1800, 2300, 2900, 3900, 5000, 5900, 7200, 8400, 10000, 11500, 13000, 15000, 18000,
  20000, 22000, 25000, 33000, 41000, 50000, 62000, 75000, 90000, 105000, 120000, 135000, 155000
];

// Configure Optional Character Flags
FANHUNTER.characterFlags = {
  "powerfulBuild": {
    name: "FANHUNTER3E.FlagsPowerfulBuild",
    hint: "FANHUNTER3E.FlagsPowerfulBuildHint",
    section: "Racial Traits",
    type: Boolean
  },
  "savageAttacks": {
    name: "FANHUNTER3E.FlagsSavageAttacks",
    hint: "FANHUNTER3E.FlagsSavageAttacksHint",
    section: "Racial Traits",
    type: Boolean
  },
  "elvenAccuracy": {
    name: "FANHUNTER3E.FlagsElvenAccuracy",
    hint: "FANHUNTER3E.FlagsElvenAccuracyHint",
    section: "Racial Traits",
    type: Boolean
  },
  "halflingLucky": {
    name: "FANHUNTER3E.FlagsHalflingLucky",
    hint: "FANHUNTER3E.FlagsHalflingLuckyHint",
    section: "Racial Traits",
    type: Boolean
  },
  "initiativeAdv": {
    name: "FANHUNTER3E.FlagsInitiativeAdv",
    hint: "FANHUNTER3E.FlagsInitiativeAdvHint",
    section: "Feats",
    type: Boolean
  },
  "initiativeAlert": {
    name: "FANHUNTER3E.FlagsAlert",
    hint: "FANHUNTER3E.FlagsAlertHint",
    section: "Feats",
    type: Boolean
  },
  "jackOfAllTrades": {
    name: "FANHUNTER3E.FlagsJOAT",
    hint: "FANHUNTER3E.FlagsJOATHint",
    section: "Feats",
    type: Boolean
  },
  "observantFeat": {
    name: "FANHUNTER3E.FlagsObservant",
    hint: "FANHUNTER3E.FlagsObservantHint",
    skills: ['prc','inv'],
    section: "Feats",
    type: Boolean
  },
  "reliableTalent": {
    name: "FANHUNTER3E.FlagsReliableTalent",
    hint: "FANHUNTER3E.FlagsReliableTalentHint",
    section: "Feats",
    type: Boolean
  },
  "remarkableAthlete": {
    name: "FANHUNTER3E.FlagsRemarkableAthlete",
    hint: "FANHUNTER3E.FlagsRemarkableAthleteHint",
    abilities: ['str','dex','con'],
    section: "Feats",
    type: Boolean
  },
  "weaponCriticalThreshold": {
    name: "FANHUNTER3E.FlagsCritThreshold",
    hint: "FANHUNTER3E.FlagsCritThresholdHint",
    section: "Feats",
    type: Number,
    placeholder: 20
  }
};

// Configure allowed status flags
FANHUNTER.allowedActorFlags = [
  "isPolymorphed", "originalActor"
].concat(Object.keys(FANHUNTER.characterFlags));
