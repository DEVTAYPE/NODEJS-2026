// const getPokemonById = (id) => {
//   const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

const { httpClientPlugin } = require("../plugins");

//   fetch(url)
//     .then((response) => response.json())
//     .then((pokemon) => {
//       console.log(pokemon);
//     })
//     .catch((error) => {
//       console.error("Error fetching Pokémon:", error);
//     });
// };

// ASYTNC AWAIT
// const getPokemonById = async (id) => {
//   try {
//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
//     const response = await fetch(url);
//     const pokemon = await response.json();
//     console.log(pokemon);
//   } catch (error) {
//     console.error("Error fetching Pokémon:", error);
//   }
// };

// HTTP CON ADAPTER, sin inyeccion de dependencias
const getPokemonById = async (id) => {
  try {
    const data = await httpClientPlugin.get(
      `https://pokeapi.co/api/v2/pokemon/${id}`,
    );
    return data;
  } catch (error) {
    return new Error(`Error fetching Pokémon: ${error.message}`);
  }
};

module.exports = { getPokemonById };
