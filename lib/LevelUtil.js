'use strict';

/**
 * Extra difficulty factor to level
 * @param {number} level
 * @private
 */
const reduction = level => {
  let val;
  switch (true) {
    case (level <= 10):
      val = 1;
      break;
    case (level >= 11 && level <= 27):
      val = 1 - (level - 10) / 100;
      break;
    case (level >= 28 && level <= 59):
      val = 0.82;
      break;
    default:
      val = 1;
  }
  return val;
};

/**
 * Difficulty modifier starting around level 30
 * @return int
 * @private
 * @param level
 */
const diff = level => {
  switch (true) {
    case (level <= 28):
      return 0;
    case (level === 29):
      return 1;
    case (level === 30):
      return 3;
    case (level === 31):
      return 6;
    case (level >= 32):
    case (level <= 59):
      return 5 * (level - 30);
  }
};

/**
 * @namespace
 */
const LevelUtil = {
  /**
   * Get the exp that a mob gives
   * @return int
   * @param npcLevel
   * @param playerLevel
   */
  //mobExp: (npcLevel, playerLevel) => 100 + (npcLevel-playerLevel) * 10,
  mobExp: (npcLevel, playerLevel) => 100 + (npcLevel - playerLevel * 10),

  /**
   * Helper to get the amount of experience a player needs to level
   * @return int
   * @memberof! LevelUtil
   * @param level
   * @param playerLevel
   */
  expToLevel: (level,playerLevel) => Math.floor(
      ((4 * level) + diff(level))
      * LevelUtil.mobExp(level, playerLevel)
      * reduction(level)),
};

module.exports = LevelUtil;
