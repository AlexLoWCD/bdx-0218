(() => {
  'use strict';

  let types = require('./types');

  class Pokemon {
    constructor(_name, _type, _pv, _attack) {
      this.name = _name;
      this.type = _type;
      this.pv = _pv;
      this.attack = _attack;
      this.isKo = false;
    }

    attackPokemon(_pokemon) {
      let damage = this.attack.power;

      if (types.getWeakness(_pokemon.type) === this.type) {
        damage *= 1.5;
      }

      if (types.getWeakness(this.type) === _pokemon.type) {
        damage *= 0.5;
      }

      _pokemon.getDamages(damage);
      return `${this.name} attaque ${_pokemon.name} avec ${this.attack.name}. Il inflige ${damage} dégâts.`;
    }

    getDamages(_dmg) {
      this.pv -= _dmg;
    }

    checkIsAlive() {
      if (this.pv <= 0) {
        this.isKo = true;
        return `${this.name} est KO.`;
      }
      return '';
    }
  }

  module.exports = {
    Pokemon: Pokemon
  };
})();
