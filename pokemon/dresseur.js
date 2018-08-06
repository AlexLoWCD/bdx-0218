(() => {
  'use strict';

  class Dresseur {
    constructor(_name) {
      this.name = _name;
      this.pokemons = [];
      this.currentPokemon = null;
    }

    addPokemon(_pokemon) {
      this.pokemons.push(_pokemon);
    }

    isDefeated() {
      return this.pokemons.filter(p => p.isKo).length === this.pokemons.length;
    }
  }

  module.exports = {
    Dresseur: Dresseur
  };
})();
