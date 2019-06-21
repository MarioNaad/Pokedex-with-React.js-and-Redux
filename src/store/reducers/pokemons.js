const initialState = {
  fetching: false,
  fetchingDetails: false,
  pokemons: [],
  details: {
    name: "",
    sprites: {
      front_default: ""
    },
    stats: [0,1,2,3,4,5,],
  },
  regions: {
    kanto: "offset=0&limit=151"
  },
  err: null
};

export const pokemons = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POKEMONS_START": {
      return { ...state, fetching: true };
    }
    case "RECEIVE_POKEMONS": {
      return {
        ...state,
        fetching: false,
        pokemons: action.payload
      };
    }

    case "FETCH_POKEMONS_ERROR": {
      return { ...state, fetching: false, err: action.payload };
    }

    case "FETCH_POKEMONS_DETAILS_START": {
      return { ...state, fetchingDetails: true };
    }
    case "RECEIVE_POKEMONS_DETAILS": {
      return {
        ...state,
        fetchingDetails: false,
        details: action.payload
      };
    }
    case "FETCH_POKEMONS_DETAILS_ERROR": {
      return { ...state, fetchingDetails: false, err: action.payload };
    }
    case "CLEAR_DOM": {
      return { ...state, pokemons: [] };
    }
    case "POKEMON_SEARCH": {
      let search = action.payload
      let pokemons = state.pokemons.filter(p => {
          let pokemonName = p.name.toLowerCase();
          return pokemonName.includes(search);
      })//.slice(0,12); 
      
      return {...state, pokemons,} 
       
      }

    default:
      return state;
  }
};
