let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=96&offset=809";

  //grabs pokemon from repository
  function getAll() {
    return pokemonList;
  }

  //adding each pokemon onto list
  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  //loading pokemon from API
  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name.charAt(0).toUpperCase() + item.name.slice(1),
            detailsUrl: item.url,
          };
          add(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  function addListItem(pokedexEntry) {
    //setting list to variable
    let list = document.querySelector(".list");
    //creating list items
    let listItem = document.createElement("li");
    listItem.classList.add("list-group-item");
    //appending list items to list
    list.appendChild(listItem);

    //creating button for list items
    let button = document.createElement("button");
    //adding names to pokemon inside buttons
    button.innerText = `${pokedexEntry.name}`;
    //adding a class to the buttons
    button.classList.add("btn", "btn-primary", "btn-lg");
    button.setAttribute("data-target", "#pokedexModal");
    button.setAttribute("data-toggle", "modal");
    //adding click event listener to buttons
    button.addEventListener("click", function () {
      showDetails(pokedexEntry);
    });
    //appending button to list items
    listItem.appendChild(button);
  }

  //loading details of pokemon
  function loadDetails(pokemon) {
    let url = pokemon.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        pokemon.imageUrl = details.sprites.front_default;
        pokemon.height = details.height;
        pokemon.types = details.types;
        showModal(pokemon);
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  function showDetails(pokedexEntry) {
    loadDetails(pokedexEntry).then(function () {
      showModal(pokedexEntry);
    });
  }

  function showModal(pokedexEntry) {
    let modalBody = $(".modal-body");
    let modalTitle = $(".modal-title");
    let modalHeader = $(".modal-header");

    // clear existing content of the modal
    modalTitle.empty();
    modalBody.empty();

    // creating element for name in modal content
    let nameElement = $(
      '<h1 class="modal-title">' + pokedexEntry.name + "</h1>",
    );
    let imageElement = $('<img class="modal-img">');
    imageElement.attr("src", pokedexEntry.imageUrl);
    let heightElement = $("<p>" + "height : " + pokedexEntry.height + "</p>");

    modalTitle.append(nameElement);
    modalBody.append(imageElement);
    modalBody.append(heightElement);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
  };
})();

//adding pokemon to list
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokedexEntry) {
    pokemonRepository.addListItem(pokedexEntry);
  });
});
