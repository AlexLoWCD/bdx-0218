(() => {
  'use strict';

  let Pokemon = require('./pokemon').Pokemon;
  let types = require('./types');
  const listPokemons = [];

  const pikachu = new Pokemon('Pikachu', types.ELECTRIC, 60, {name:'éclair', power: 25});
  const bulbizarre = new Pokemon('Bulbizarre', types.PLANT, 60, {name:'fouet liane', power: 20});
  const salameche = new Pokemon('Salamèche', types.FIRE, 50, {name:'flamèche', power: 30});
  const carapuce = new Pokemon('Carapuce', types.WATER, 50, {name:'pistolet à O', power: 20});
  const machoc = new Pokemon('Machoc', types.FIGHT, 50, {name:'balayage', power: 30});
  const canarticho = new Pokemon('Canarticho', types.NORMAL, 60, {name:'coup d\'oignon', power: 20});
  const evoli = new Pokemon('Evoli', types.NORMAL, 60, {name:'coup rapide', power: 20});
  const voltali = new Pokemon('Voltali', types.ELECTRIC, 80, {name:'frappe éclaire', power: 25});
  const piroli = new Pokemon('Piroli', types.FIRE, 90, {name:'enflammer', power: 35});
  const aquali = new Pokemon('Aquali', types.WATER, 90, {name:'hydo éclaboussure', power: 30});
  const tygnon = new Pokemon('Tygnon', types.FIGHT, 70, {name:'punch spécial', power: 20});
  const noadkoko = new Pokemon('Noadkoko', types.PLANT, 80, {name:'super eggsplosion', power: 30});

  listPokemons.push(pikachu);
  listPokemons.push(bulbizarre);
  listPokemons.push(salameche);
  listPokemons.push(carapuce);
  listPokemons.push(machoc);
  listPokemons.push(canarticho);
  listPokemons.push(evoli);
  listPokemons.push(voltali);
  listPokemons.push(piroli);
  listPokemons.push(aquali);
  listPokemons.push(tygnon);
  listPokemons.push(noadkoko);

  module.exports = {
    listPokemons: listPokemons
  }
})();
