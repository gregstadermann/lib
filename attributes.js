'use strict';

module.exports = [
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
  { name: 'strength', base: 0 },
  { name: 'agility', base: 0 },
  { name: 'intellect', base: 0 },
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
