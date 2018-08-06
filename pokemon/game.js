(() => {
  'use strict';

  let prompt = require('prompt-sync')();
  let Pokemon = require('./pokemon').Pokemon;
  let listPokemons = require('./list_pokemons').listPokemons;
  let Dresseur = require('./dresseur').Dresseur;

  const getAvailablePokemon = (_d1, _d2) => {
    return listPokemons.filter(p => _d1.pokemons.indexOf(p) === -1 && _d2.pokemons.indexOf(p) === -1);
  }

  /* Création des dresseurs */

  const nameD1 = prompt('Nom du dresseur 1 : ');
  const d1 = new Dresseur(nameD1);

  const nameD2 = prompt('Nom du dresseur 2 : ');
  const d2 = new Dresseur(nameD2);

  /* Choix des Pokemons */

  const choosePokemon = (_dresseur) => {
    // On affiche la liste des pokémons disponibles
    const availablePokemons = getAvailablePokemon(d1, d2).map(p => {
      const indexPokemon = listPokemons.indexOf(p);
      const namePokemon = p.name;
      return ` [${indexPokemon}]:${namePokemon} `;
    }).join("||");

    console.log("");
    console.log("--------------------------------------");
    console.log("");
    console.log(`Choisissez un Pokemon disponible : ${availablePokemons}`);

    const index = prompt('Choisir un pokemon (index) : ');
    _dresseur.addPokemon(listPokemons[index])
  };

  let i = 0;

  do {
    if (i % 2 == 0) {
      choosePokemon(d1);
    } else {
      choosePokemon(d2);
    }
    i++;
  } while (i < 6);

  console.log("");
  console.log("--------------------------------------");
  console.log("");

  /* Début du combat */

  const goToFight = (_dresseur, _cible) => {
    // On check si le dresseur a un pokemon en combat
    if (_dresseur.currentPokemon === null || _dresseur.currentPokemon.isKo) {
      selectPokemon(_dresseur);
    }

    // On check si la cible a un pokemon en combat
    if (_cible.currentPokemon === null || _cible.currentPokemon.isKo) {
      selectPokemon(_cible);
    }

    // On demande au dresseur ce qu'il veux faire : (1: Attaquer, 2: Changer de Pokemon, 3: Passer son tour)
    console.log(`Dresseur ${_dresseur.name}, que veux-tu faire? (1: Attaquer, 2: Changer de Pokemon, 3: Passer son tour)`);
    const choiceDresseur = prompt('[Choix] : ');
    switch (choiceDresseur) {
      case "1":
        const attack = _dresseur.currentPokemon.attackPokemon(_cible.currentPokemon);
        console.log(attack);
        const isAlive = _cible.currentPokemon.checkIsAlive();
        if (isAlive !== '') {
          console.log(isAlive);
        }
        break;
      case "2":
        selectPokemon(_dresseur);
        break;
      case "3":
      default:
        console.log(`Dresseur ${_dresseur.name} passe son tour...`);
    }
    console.log("");
    console.log("");
  }

  const selectPokemon = (_dresseur) => {
    // On demande au dresseur de choisir un pokemon
    const availablePokemons = _dresseur.pokemons.filter(p => !p.isKo).map(p => {
      const indexPokemon = _dresseur.pokemons.indexOf(p);
      const namePokemon = p.name;
      return ` [${indexPokemon}]:${namePokemon} `;
    }).join("||");

    console.log(`Dresseur ${_dresseur.name},choisit un Pokemon : ${availablePokemons}`);
    const indexPokemon = prompt('[index] : ');
    _dresseur.currentPokemon = _dresseur.pokemons[indexPokemon];

    console.log("");
    console.log("--------------------------------------");
    console.log("");
  }

  let turn = 0;
  do {
    (turn % 2 == 0) ? goToFight(d1, d2): goToFight(d2, d1);
    turn++;
  } while (!d1.isDefeated() && !d2.isDefeated());

  console.log("");
  console.log("--------------------------------------");
  console.log("");

  console.log(`${(d2.isDefeated()) ? d1.name : d2.name} est victorieux!!`);
})();
