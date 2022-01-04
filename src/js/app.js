import "../scss/app.scss";
import "regenerator-runtime/runtime";

window.addEventListener("DOMContentLoaded", async () => {
  // This block will be executed once the page is loaded and ready

  const ul = document.querySelector("ul");
  const pokemonList = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
    .then((response) => response.json())
    .then((res) => res.results);
  pokemonList.forEach((pokemon) => {
    const eachPokemon = document.createElement("li");
    eachPokemon.innerText = pokemon.name;
    ul.appendChild(eachPokemon);
  });
  document.body.appendChild(ul);
});
