'use strict';

module.exports = [
  {
    name: 'armor use',
    base: 0,
    metadata: {
      label: 'Armor Use',
      abbr: 'armor',
      ranks: 0
    },
  },
  {
    name: 'edged weapons',
    base: 0,
    metadata: {
      label: 'Edged Weapons',
      abbr: 'edged',
      ranks: 0
      },
  },
  { name: 'agility', base: 0 },
  { name: 'aura', base: 0 },
  { name: 'constitution', base: 0 },
  { name: 'dexterity', base: 0 },
  { name: 'discipline', base: 0 },
  { name: 'charisma', base: 0 },
  { name: 'intuition', base: 0 },
  { name: 'strength', base: 0 },
  { name: 'intelligence', base: 0 },
  { name: 'wisdom', base: 0 },
  {
    name: 'health',
    base: 100,
    formula: {
      requires: [],
      fn: function (character, health) {
        return health + (character.level ** 2);
      },
    },
  },
  { name: 'energy', base: 100 },
  { name: 'stamina', base: 0 },
  { name: 'armor', base: 0 },
  {
    name: 'AS',
    base: 0,
    formula: {
      requires: [],
      fn: function (character, AS) {
        return AS + (character.getAttribute('strength') ** 2);
      },
    },
  },
  { name: 'DS', base: 0 },
  { name: 'critical', base: 0 },
];
