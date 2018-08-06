(() => {
  'use strict';

  const ELECTRIC = 'electric';
  const PLANT = 'plant';
  const FIRE = 'fire';
  const WATER = 'water';
  const FIGHT = 'fight';
  const NORMAL = 'normal';

  const getWeakness = (_type) => {
    switch (_type) {
      case (ELECTRIC):
        return NORMAL;
      case (FIRE):
        return WATER;
      case (PLANT):
        return FIRE;
      case (WATER):
        return ELECTRIC;
      case (FIGHT):
        return PLANT;
      case (NORMAL):
        return FIGHT;
      default:
        return NORMAL;
    }
  }

  module.exports = {
    ELECTRIC: ELECTRIC,
    PLANT: PLANT,
    FIRE: FIRE,
    WATER: WATER,
    FIGHT: FIGHT,
    NORMAL: NORMAL,
    getWeakness: getWeakness
  }
})();
