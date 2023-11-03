// import axios from "axios";
// export const GET_POKEMONS = "GET_POKEMONS";
// export const GET_TYPES = "GET_TYPES";
// // export const FILTER_POKEMONS_TYPES = "FILTER_POKEMONS_TYPES";
// // export const FILTER_POKEMONS_CREATED = "FILTER_POKEMONS_CREATED";
// // export const SORT_POKEMONS_NAME = "SORT_POKEMONS_NAME";
// // export const SORT_POKEMONS_ATTACK = "SORT_POKEMONS_ATTACK";
// export const ORDERS = "ORDERS";
// export const GET_POKEMON_NAME = "GET_POKEMON_NAME";
// export const GET_POKEMON_ID = "GET_POKEMON_ID";
// export const POST_POKEMON = "POST_POKEMON";
// export const CLEAR = "CLEAR";
// export const FILTERS = "FILTERS";

// export const filterAndOrder = (typeSelect, createdSelect) => {
//   return {
//     type: FILTERS,
//     payload: { typeSelect, createdSelect },
//   };
// };

// export const getPokemons = () => {
//   return async (dispatch) => {
//     try {
//       const { data } = await axios.get(`/pokemon`);
//       return dispatch({
//         type: GET_POKEMONS,
//         payload: data,
//       });
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
// };

// export const getTypes = () => {
//   return async (dispatch) => {
//     try {
//       const { data } = await axios.get(`/types`);
//       return dispatch({
//         type: GET_TYPES,
//         payload: data,
//       });
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
// };

// export const getPokemonName = (name) => {
//   return async (dispatch) => {
//     try {
//       const { data } = await axios.get(`/pokemon?name=${name}`);
//       return dispatch({
//         type: GET_POKEMON_NAME,
//         payload: data,
//       });
//     } catch (error) {
//       alert(error.message);
//       console.log(error.message);
//     }
//   };
// };

// export const getPokemonById = (id) => {
//   return async (dispatch) => {
//     try {
//       const { data } = await axios.get(`/pokemon/${id}`);

//       return dispatch({
//         type: GET_POKEMON_ID,
//         payload: data,
//       });
//     } catch (error) {
//       alert(error.message);
//       console.log(error.message);
//     }
//   };
// };

// export const postPokemon = (payload) => {
//   return async () => {
//     try {
//       const { data } = await axios.post("/pokemon", payload);
//       alert("Pokemon created");
//       return data;
//     } catch (error) {
//       alert(error.message);
//       console.log(error.message);
//     }
//   };
// };

// // export const sortPokemonsName = (payload) => {
// //   return {
// //     type: SORT_POKEMONS_NAME,
// //     payload,
// //   };
// // };

// // export const sortPokemonsAttack = (payload) => {
// //   return {
// //     type: SORT_POKEMONS_ATTACK,
// //     payload,
// //   };
// // };
// export const sortPokemons = (payload) => {
//   return {
//     type: ORDERS,
//     payload,
//   };
// };

// // export const filterPokemonsTypes = (payload) => {
// //   return {
// //     type: FILTER_POKEMONS_TYPES,
// //     payload,
// //   };
// // };

// // export const filterPokemonsCreated = (payload) => {
// //   return {
// //     type: FILTER_POKEMONS_CREATED,
// //     payload,
// //   };
// // };

// export const clear = () => {
//   return {
//     type: CLEAR,
//     payload: [],
//   };
// };

import axios from "axios";
export const GET_POKEMONS = "GET_POKEMONS";
export const GET_TYPES = "GET_TYPES";
// export const FILTER_POKEMONS_TYPES = "FILTER_POKEMONS_TYPES";
// export const FILTER_POKEMONS_CREATED = "FILTER_POKEMONS_CREATED";
// export const SORT_POKEMONS_NAME = "SORT_POKEMONS_NAME";
// export const SORT_POKEMONS_ATTACK = "SORT_POKEMONS_ATTACK";
// export const ORDERS = "ORDERS";
export const GET_POKEMON_NAME = "GET_POKEMON_NAME";
export const GET_POKEMON_ID = "GET_POKEMON_ID";
export const POST_POKEMON = "POST_POKEMON";
export const CLEAR = "CLEAR";
export const FILTERS = "FILTERS";

export const filterAndOrder = (sortSelect, typeSelect, createdSelect) => {
  return {
    type: FILTERS,
    payload: { sortSelect, typeSelect, createdSelect },
  };
};

export const getPokemons = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/pokemon`);
      return dispatch({
        type: GET_POKEMONS,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getTypes = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/types`);
      return dispatch({
        type: GET_TYPES,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getPokemonName = (name) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/pokemon?name=${name}`);
      return dispatch({
        type: GET_POKEMON_NAME,
        payload: data,
      });
    } catch (error) {
      alert(error.message);
      console.log(error.message);
    }
  };
};

export const getPokemonById = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/pokemon/${id}`);

      return dispatch({
        type: GET_POKEMON_ID,
        payload: data,
      });
    } catch (error) {
      alert(error.message);
      console.log(error.message);
    }
  };
};

export const postPokemon = (payload) => {
  return async () => {
    try {
      const { data } = await axios.post("/pokemon", payload);
      alert("Pokemon created");
      return data;
    } catch (error) {
      alert(error.message);
      console.log(error.message);
    }
  };
};

// export const sortPokemonsName = (payload) => {
//   return {
//     type: SORT_POKEMONS_NAME,
//     payload,
//   };
// };

// export const sortPokemonsAttack = (payload) => {
//   return {
//     type: SORT_POKEMONS_ATTACK,
//     payload,
//   };
// };
// export const sortPokemons = (payload) => {
//   return {
//     type: ORDERS,
//     payload,
//   };
// };

// export const filterPokemonsTypes = (payload) => {
//   return {
//     type: FILTER_POKEMONS_TYPES,
//     payload,
//   };
// };

// export const filterPokemonsCreated = (payload) => {
//   return {
//     type: FILTER_POKEMONS_CREATED,
//     payload,
//   };
// };

export const clear = () => {
  return {
    type: CLEAR,
    payload: [],
  };
};
