'use strict';

module.exports = [
  { name: 'armor_use', base: 0 },
  { name: 'brawling', base: 0 },
  { name: 'one_handed_edged', base: 0 },
  { name: 'one_handed_blunt', base: 0 },
  { name: 'two_handed', base: 0 },
  { name: 'polearm', base: 0 },
  { name: 'ranged', base: 0 },
  { name: 'thrown', base: 0 },
  { name: 'combat_maneuvers', base: 0 },
  { name: 'shield_use', base: 0 },
  { name: 'climbing', base: 0 },
  { name: 'swimming', base: 0 },
  { name: 'disarm_traps', base: 0 },
  { name: 'pick_locks', base: 0 },
  { name: 'stalk_and_hide', base: 0 },
  { name: 'perception', base: 0 },
  { name: 'ambush', base: 0 },

  { name: 'spell_aim', base: 0 },
  { name: 'physical_training', base: 0 },
  { name: 'mana_share', base: 0 },
  { name: 'magic_item_use', base: 0 },
  { name: 'scroll_reading', base: 0 },
  { name: 'harness_power', base: 0 },
  { name: 'first_aid', base: 0 },

  { name: 'major_elemental', base: 0 },
  { name: 'minor_elemental', base: 0 },

  { name: 'major_spiritual', base: 0 },
  { name: 'minor_spiritual', base: 0 },

  { name: 'cleric_base', base: 0 },
  { name: 'wizard_base', base: 0 },
  { name: 'empath_base', base: 0 },
  { name: 'sorcerer_base', base: 0 },
  { name: 'ranger_base', base: 0 },
  { name: 'paladin_base', base: 0 },
  { name: 'bard_base', base: 0 },

  // These are the base attributes
  { name: 'logic', base: 0 },
  { name: 'reflexes', base: 0 },
  { name: 'quickness', base: 0 },
  { name: 'aura', base: 0 },
  { name: 'constitution', base: 0 },
  { name: 'dexterity', base: 0 },
  { name: 'discipline', base: 0 },
  { name: 'charisma', base: 0 },
  { name: 'strength', base: 0 },
  { name: 'intelligence', base: 0 },
  { name: 'wisdom', base: 0 },
  {
    name: 'health',
    base: 100,
    formula: {
      requires: [],
      fn: function (character, health) {
        return health + (character.level * 2) + (character.getAttribute('constitution')/10);
      },
    },
  },
  { name: 'energy', base: 100 },
  { name: 'mana', base: 0 },
  { name: 'stamina', base: 0 },
  {
    name: 'AS',
    base: 0,
    formula: {
      requires: [],
      fn: function (character, AS) {
        return AS + (character.getAttribute('strength'));
      },
    },
  },
  { name: 'DS', base: 0 },
  { name: 'critical', base: 0 },
];
