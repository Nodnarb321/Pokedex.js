let pokemonRepository = (function () {
  let pokemonList = [];

  //adding each pokemon onto list
  function add(pokemon){
    pokemonList.push(pokemon);
  };

  //grabs pokemon from repository
  function getAll(){
    return pokemonList;
  };

  function addListItem(pokedexEntry){

    //setting list to variable
    let list = document.querySelector(".list");
  
    //creating list items
    let listItem = document.createElement("li");
  
    //creating button for list items
    let button = document. createElement("button");
  
    //adding names to pokemon inside buttons
    button.innerText = `${pokedexEntry.name}`;
  
    //adding a class to the buttons
    button.classList.add("pokemon-item");
  
    //adding click event listener to buttons
    button.addEventListener('click', function(){
      showListDetails(pokedexEntry);
    });
  
    //appending button to list items
    listItem.appendChild(button);
  
    //appending list items to list
    list.appendChild(listItem);
  
    //passing pokemon object as parameter when called
    function showListDetails(pokedexEntry){
      console.log(pokedexEntry);
    };
  };

  return {
    add: add,
    getAll: getAll,
    addListItem : addListItem
  };
})();

//adding pokemon as list items

pokemonRepository.add({
  name: "Bulbasaur",
  height: 0.7,
  type: ["grass", "poison"],
  url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'
});

pokemonRepository.add({
  name: "Squirtle",
  height: 0.5,
  type: ["water"],
  url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png'
});

pokemonRepository.add({
  name: "Wartortle",
  height: 1,
  type: ["water"],
  url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png'
});

pokemonRepository.add({
  name: "Blastoise",
  height: 1.6,
  type: ["water"],
  url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png'
});

//adding pokemon to list
pokemonRepository.getAll().forEach(function (pokedexEntry) {
  pokemonRepository.addListItem(pokedexEntry);
});

//creating array of images
let pokemonImgArray = [];

//bulbasaur img
const bulbasaur = new Image();
bulbasaur.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png";

//squirtle img
const squirtle = new Image();
squirtle.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png";

//wartortle img
const wartortle = new Image();
wartortle.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png";

//blastoise img
const blastoise = new Image();
blastoise.src = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png";

//pushing each img to the array
pokemonImgArray.push(bulbasaur);
pokemonImgArray.push(squirtle);
pokemonImgArray.push(wartortle);
pokemonImgArray.push(blastoise);

//sending images to the console
console.log(pokemonImgArray);

//sending images to the document
document.body.appendChild(pokemonImgArray[0]);
document.body.appendChild(pokemonImgArray[1]);
document.body.appendChild(pokemonImgArray[2]);
document.body.appendChild(pokemonImgArray[3]);
