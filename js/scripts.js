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