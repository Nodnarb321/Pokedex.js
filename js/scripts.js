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

for(let i=0; i < pokemonList.length; i++) {

  document.write (
    '<br>'
  )

  if(pokemonList[i].height > 1) {
    document.write (
      pokemonList[i].name + ' (Height: ' + pokemonList[i].height + ') - Wow that\'s big!'
    )
  }
  else if(pokemonList[i].height <= 1) {
    document.write (
      pokemonList[i].name + ' (Height: ' + pokemonList[i].height + ')'
    )
  }
}
