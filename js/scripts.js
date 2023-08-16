let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  //adding each pokemon onto list
  function add(pokemon) {
    pokemonList.push(pokemon);
  };

  //grabs pokemon from repository
  function getAll() {
    return pokemonList;
  };

  function addListItem(pokedexEntry) {

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
    button.addEventListener('click', function() {
      showDetails(pokedexEntry);
    });
  
    //appending button to list items
    listItem.appendChild(button);
  
    //appending list items to list
    list.appendChild(listItem);
  
    //passing pokemon object as parameter when called
    function showDetails(pokedexEntry) {
      loadDetails(pokedexEntry).then(function () {
        console.log(pokedexEntry);
      });
    };
  };

  //loading pokemon from API
  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  };

  //loading details of pokemon
  function loadDetails(pokemon) {
    let url = pokemon.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      pokemon.imageUrl = details.sprites.front_default;
      pokemon.height = details.height;
      pokemon.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
    }

  return {
    add: add,
    getAll: getAll,
    addListItem : addListItem,
    loadList: loadList,
    loadDetails: loadDetails
  };
})();

//adding pokemon to list
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokedexEntry) {
    pokemonRepository.addListItem(pokedexEntry);
  });
});