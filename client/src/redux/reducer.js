// import {
//   GET_POKEMONS,
//   GET_TYPES,
//   GET_POKEMON_NAME,
//   GET_POKEMON_ID,
//   // FILTER_POKEMONS_TYPES,
//   // FILTER_POKEMONS_CREATED,
//   // SORT_POKEMONS_NAME,
//   // SORT_POKEMONS_ATTACK,
//   ORDERS,
//   POST_POKEMON,
//   CLEAR,
//   FILTERS,
//   // filterPokemonsCreated,
// } from "./actions";

// const initialState = {
//   pokemons: [],
//   allPokemons: [],
//   types: [],
//   detail: [],
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case GET_POKEMONS:
//       return {
//         ...state,
//         pokemons: action.payload,
//         allPokemons: action.payload,
//       };
//     case GET_TYPES:
//       return {
//         ...state,
//         types: action.payload,
//       };
//     case GET_POKEMON_NAME:
//       return {
//         ...state,
//         pokemons: action.payload,
//       };

//     case GET_POKEMON_ID:
//       return {
//         ...state,
//         detail: action.payload,
//       };
//     case POST_POKEMON:
//       return {
//         ...state,
//       };

//     // case SORT_POKEMONS_NAME:
//     //   const aux1 = state.pokemons;
//     //   let sorted1 =
//     //     action.payload === "asc"
//     //       ? aux1.sort((a, b) => a.name.localeCompare(b.name))
//     //       : aux1.sort((a, b) => b.name.localeCompare(a.name));
//     //   return {
//     //     ...state,
//     //     pokemons: sorted1,
//     //   };

//     // case SORT_POKEMONS_ATTACK:
//     //   let aux2 = state.pokemons;
//     //   let sorted2 =
//     //     action.payload === "asc"
//     //       ? aux2.sort((a, b) => b.attack - a.attack)
//     //       : aux2.sort((a, b) => a.attack - b.attack);
//     //   return {
//     //     ...state,
//     //     pokemons: sorted2,
//     //   };

//     case ORDERS:
//       const aux1 = state.pokemons;

//       if (action.payload === "nameAsc") {
//         aux1.sort((a, b) => a.name.localeCompare(b.name));
//       }
//       if (action.payload === "nameDesc") {
//         aux1.sort((a, b) => b.name.localeCompare(a.name));
//       }

//       if (action.payload === "attAsc") {
//         aux1.sort((a, b) => b.attack - a.attack);
//       }
//       if (action.payload === "attDesc") {
//         aux1.sort((a, b) => a.attack - b.attack);
//       }
//       return {
//         ...state,
//         pokemons: aux1,
//       };

//     case FILTERS:
//       let aux3 = state.allPokemons;
//       console.log(action.payload.typeSelect);
//       console.log(action.payload.createdSelect);
//       let filterpokemonstypes =
//         action.payload.typeSelect === "All"
//           ? aux3
//           : aux3.filter(
//               (pokemon) =>
//                 pokemon.types.map((type) => type.name)[0] ===
//                   action.payload.typeSelect ||
//                 pokemon.types.map((type) => type.name)[1] ===
//                   action.payload.typeSelect
//             );

//       const aux4 = filterpokemonstypes;
//       console.log(aux4);
//       console.log(filterpokemonstypes);

//       let filterpokemonscreated =
//         action.payload.createdSelect === "created"
//           ? aux4.filter((pokemon) => typeof pokemon.id !== "number")
//           : aux4.filter((pokemon) => typeof pokemon.id === "number");

//       console.log(filterpokemonscreated);
//       console.log(filterpokemonscreated.length);

//       if (filterpokemonscreated.length === 0) {
//         alert("No pokemon of such type");
//       }
//       return {
//         ...state,
//         pokemons:
//           action.payload.createdSelect === "All" ? aux4 : filterpokemonscreated,
//       };

//     // case FILTERS:
//     //   //filtrar por temperamentos
//     //   let dogsFilteredTemp;
//     //   if (state.filterByTemperamValue === "all") {
//     //     dogsFilteredTemp = state.allDogsBackup;
//     //   } else {
//     //     dogsFilteredTemp = state.allDogsBackup.filter(
//     //       (dog) =>
//     //         dog.temperament &&
//     //         dog.temperament.includes(state.filterByTemperamValue)
//     //     );
//     //   }
//     //   // filtrar por origin
//     //   let dogsFiltered;
//     //   switch (state.filterApiBdValue) {
//     //     case "API":
//     //       dogsFiltered = dogsFilteredTemp.filter((dog) => dog.origin === "API");
//     //       break;
//     //     case "BD":
//     //       dogsFiltered = dogsFilteredTemp.filter((dog) => dog.origin === "BD");
//     //       break;
//     //     case "all":
//     //       dogsFiltered = dogsFilteredTemp;
//     //       break;
//     //     default:
//     //       return state;

//     // case FILTER_POKEMONS_TYPES:
//     //   let aux3 = state.allPokemons;
//     //   let filterpokemonstypes =
//     //     action.payload === "All"
//     //       ? aux3
//     //       : aux3.filter(
//     //           (pokemon) =>
//     //             pokemon.types.map((type) => type.name)[0] === action.payload ||
//     //             pokemon.types.map((type) => type.name)[1] === action.payload
//     //         );
//     //   if (filterpokemonstypes.length === 0) {
//     //     filterpokemonstypes = aux3;
//     //     alert("No pokemon of such type");
//     //   }
//     //   return {
//     //     ...state,
//     //     pokemons: filterpokemonstypes,
//     //   };
//     // case FILTER_POKEMONS_CREATED:
//     //   const aux4 = state.allPokemons;
//     //   let filterpokemonscreated =
//     //     action.payload === "created"
//     //       ? aux4.filter((pokemon) => typeof pokemon.id !== "number")
//     //       : aux4.filter((pokemon) => typeof pokemon.id === "number");
//     //   return {
//     //     ...state,
//     //     pokemons: action.payload === "All" ? aux4 : filterpokemonscreated,
//     //   };

//     case CLEAR:
//       return {
//         ...state,
//         detail: action.payload,
//       };
//     default:
//       return {
//         ...state,
//       };
//   }
// };

// export default reducer;

import {
  GET_POKEMONS,
  GET_TYPES,
  GET_POKEMON_NAME,
  GET_POKEMON_ID,
  // FILTER_POKEMONS_TYPES,
  // FILTER_POKEMONS_CREATED,
  // SORT_POKEMONS_NAME,
  // SORT_POKEMONS_ATTACK,
  // ORDERS,
  POST_POKEMON,
  CLEAR,
  FILTERS,
  // filterPokemonsCreated,
} from "./actions";

const initialState = {
  pokemons: [],
  allPokemons: [],
  types: [],
  detail: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        allPokemons: action.payload,
      };
    case GET_TYPES:
      return {
        ...state,
        types: action.payload,
      };
    case GET_POKEMON_NAME:
      return {
        ...state,
        pokemons: action.payload,
      };

    case GET_POKEMON_ID:
      return {
        ...state,
        detail: action.payload,
      };
    case POST_POKEMON:
      return {
        ...state,
      };

    // case SORT_POKEMONS_NAME:
    //   const aux1 = state.pokemons;
    //   let sorted1 =
    //     action.payload === "asc"
    //       ? aux1.sort((a, b) => a.name.localeCompare(b.name))
    //       : aux1.sort((a, b) => b.name.localeCompare(a.name));
    //   return {
    //     ...state,
    //     pokemons: sorted1,
    //   };

    // case SORT_POKEMONS_ATTACK:
    //   let aux2 = state.pokemons;
    //   let sorted2 =
    //     action.payload === "asc"
    //       ? aux2.sort((a, b) => b.attack - a.attack)
    //       : aux2.sort((a, b) => a.attack - b.attack);
    //   return {
    //     ...state,
    //     pokemons: sorted2,
    //   };

    // case ORDERS:
    //   const aux1 = state.pokemons;

    //   if (action.payload === "nameAsc") {
    //     aux1.sort((a, b) => a.name.localeCompare(b.name));
    //   }
    //   if (action.payload === "nameDesc") {
    //     aux1.sort((a, b) => b.name.localeCompare(a.name));
    //   }

    //   if (action.payload === "attAsc") {
    //     aux1.sort((a, b) => b.attack - a.attack);
    //   }
    //   if (action.payload === "attDesc") {
    //     aux1.sort((a, b) => a.attack - b.attack);
    //   }
    //   return {
    //     ...state,
    //     pokemons: aux1,
    //   };

    case FILTERS:
      const aux1 = state.allPokemons;

      console.log("estoy aca" + aux1);

      if (action.payload.sortSelect === "nameAsc") {
        aux1.sort((a, b) => a.name.localeCompare(b.name));
      }
      if (action.payload.sortSelect === "nameDesc") {
        aux1.sort((a, b) => b.name.localeCompare(a.name));
      }

      if (action.payload.sortSelect === "attAsc") {
        aux1.sort((a, b) => b.attack - a.attack);
      }
      if (action.payload.sortSelect === "attDesc") {
        aux1.sort((a, b) => a.attack - b.attack);
      }

      let aux3 = aux1;
      console.log(action.payload.typeSelect);
      console.log(action.payload.createdSelect);
      let filterpokemonstypes =
        action.payload.typeSelect === "All"
          ? aux3
          : aux3.filter(
              (pokemon) =>
                pokemon.types.map((type) => type.name)[0] ===
                  action.payload.typeSelect ||
                pokemon.types.map((type) => type.name)[1] ===
                  action.payload.typeSelect
            );

      const aux4 = filterpokemonstypes;
      console.log(aux4);
      console.log(filterpokemonstypes);

      let filterpokemonscreated =
        action.payload.createdSelect === "created"
          ? aux4.filter((pokemon) => typeof pokemon.id !== "number")
          : aux4.filter((pokemon) => typeof pokemon.id === "number");

      console.log(filterpokemonscreated);
      console.log(filterpokemonscreated.length);

      if (filterpokemonscreated.length === 0) {
        alert("No pokemon of such type");
      }

      return {
        ...state,
        pokemons:
          action.payload.createdSelect === "All" ? aux4 : filterpokemonscreated,
      };

    // case FILTERS:
    //   //filtrar por temperamentos
    //   let dogsFilteredTemp;
    //   if (state.filterByTemperamValue === "all") {
    //     dogsFilteredTemp = state.allDogsBackup;
    //   } else {
    //     dogsFilteredTemp = state.allDogsBackup.filter(
    //       (dog) =>
    //         dog.temperament &&
    //         dog.temperament.includes(state.filterByTemperamValue)
    //     );
    //   }
    //   // filtrar por origin
    //   let dogsFiltered;
    //   switch (state.filterApiBdValue) {
    //     case "API":
    //       dogsFiltered = dogsFilteredTemp.filter((dog) => dog.origin === "API");
    //       break;
    //     case "BD":
    //       dogsFiltered = dogsFilteredTemp.filter((dog) => dog.origin === "BD");
    //       break;
    //     case "all":
    //       dogsFiltered = dogsFilteredTemp;
    //       break;
    //     default:
    //       return state;

    // case FILTER_POKEMONS_TYPES:
    //   let aux3 = state.allPokemons;
    //   let filterpokemonstypes =
    //     action.payload === "All"
    //       ? aux3
    //       : aux3.filter(
    //           (pokemon) =>
    //             pokemon.types.map((type) => type.name)[0] === action.payload ||
    //             pokemon.types.map((type) => type.name)[1] === action.payload
    //         );
    //   if (filterpokemonstypes.length === 0) {
    //     filterpokemonstypes = aux3;
    //     alert("No pokemon of such type");
    //   }
    //   return {
    //     ...state,
    //     pokemons: filterpokemonstypes,
    //   };
    // case FILTER_POKEMONS_CREATED:
    //   const aux4 = state.allPokemons;
    //   let filterpokemonscreated =
    //     action.payload === "created"
    //       ? aux4.filter((pokemon) => typeof pokemon.id !== "number")
    //       : aux4.filter((pokemon) => typeof pokemon.id === "number");
    //   return {
    //     ...state,
    //     pokemons: action.payload === "All" ? aux4 : filterpokemonscreated,
    //   };

    case CLEAR:
      return {
        ...state,
        detail: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
