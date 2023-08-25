let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=151';

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
    let button = document.createElement("button");
  
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
      loadDetails(pokedexEntry);
    };
  };

  //loading pokemon from API
  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name.charAt(0).toUpperCase() + item.name.slice(1),
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
      showModal(pokemon);
    }).catch(function (e) {
      console.error(e);
    });
    };

  function showModal (pokedexEntry) {
    let modalContainer = document.querySelector ('#modal-container');

    //Clear all existing modal content
    modalContainer.innerHTML = '';
    let modal = document.createElement('div');
    modal.classList.add('modal');

    //Add new modal content
    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal);

    let titleElement = document.createElement('h1');
    titleElement.innerText = pokedexEntry.name;

    let imageElement = document.createElement('img');
    imageElement.classList.add('modal-img');
    imageElement.src = pokedexEntry.imageUrl;

    let contentElement = document.createElement('p');
    contentElement.innerText = `Height: ${pokedexEntry.height}`;


    modalContainer.appendChild(modal);

    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    modal.appendChild(imageElement);
    modal.appendChild(closeButtonElement);

    modalContainer.classList.add ('is-visible');

    modalContainer.addEventListener('click', (e) => {
      let target = e.target;
      if (target === modalContainer) {
        hideModal();
      }
    });

    function hideModal () {
      let modalContainer = document.querySelector ('#modal-container');
      modalContainer.classList.remove('is-visible');
    }

    window.addEventListener ('keydown', (e) => {
      let modalContainer = document.querySelector('#modal-container');
      if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
        hideModal();
      }
    });
  };

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