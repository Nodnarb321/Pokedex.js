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

let pokemonList = [
  {
    name: "Bulbasaur",
    height:0.7,
    type: ["grass", "poison"]
  },
  {
    name: "Squirtle",
    height:0.5, 
    type: "water"
  },
  {
    name: "Wartortle", 
    height:1, 
    type: "water"
  },
  {
    name: "Blastoise", 
    height:1.6, 
    type: "water"
  }
];

function pokemonFunction(pokemon) {
  document.write (
    '<br>'
  )
  document.write( pokemon.name + ' (Height: ' + pokemon.height + ') ');
}
pokemonList.forEach(pokemonFunction);
