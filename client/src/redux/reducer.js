import {
  GET_POKEMONS,
  GET_TYPES,
  GET_POKEMON_NAME,
  GET_POKEMON_ID,
  POST_POKEMON,
  CLEAR,
  FILTERS,
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

    case FILTERS:
      const aux1 = state.allPokemons;

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
      let filterpokemonscreated =
        action.payload.createdSelect === "created"
          ? aux4.filter((pokemon) => typeof pokemon.id !== "number")
          : aux4.filter((pokemon) => typeof pokemon.id === "number");

      if (filterpokemonscreated.length === 0) {
        alert("No pokemon of such type");
      }

      return {
        ...state,
        pokemons:
          action.payload.createdSelect === "All" ? aux4 : filterpokemonscreated,
      };

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
