let pokemonRepository = (function () {
  let pokemonList = [];
  function add(pokemon){
    pokemonList.push(pokemon);
  };
  function getAll(){
    return pokemonList;
  };
  return {
    add: add,
    getAll: getAll
  };
})();

pokemonRepository.add({
  name: "Bulbasaur",
  height: 0.7,
  type: ["grass", "poison"]
});

pokemonRepository.add({
  name: "Squirtle",
  height: 0.5,
  type: ["water"]
});

pokemonRepository.add({
  name: "Wartortle",
  height: 1,
  type: ["water"]
});

pokemonRepository.add({
  name: "Blastoise",
  height: 1.6,
  type: ["water"]
});

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function(pokedexEntry){
  //Add pokemon name
  document.write(`<b>${pokedexEntry.name}</b><br>`);

  //Pokemon Height
  document.write(`Height: ${pokedexEntry.height}`);

  //big pokemon
   if (pokedexEntry.height > 1) {
    document.write(` - Wow that's big!`);
  };

  document.write(`<br>`);

  //Add Pokemon type
  document.write(`Type: ${pokedexEntry.type[0]}`);

  //Second type if needed
  if (pokedexEntry.type[1] !== undefined) {
    document.write(` and ${pokedexEntry.type[1]}`);
  };

  document.write(`<br><br>`);
});