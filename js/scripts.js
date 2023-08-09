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

//adding pokemon to list
pokemonRepository.getAll().forEach(function (pokedexEntry, index) {
  pokemonRepository.addListItem(pokedexEntry, index);
});