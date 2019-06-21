import swal from 'sweetalert'

const initialState = {
  trainerInfo: {
    name: "",
    age: ""
  },
  ownPokemons: {
    favorite: false,
    catched: [],
  }
};
const toCapitalLetter = name => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

export const trainer = (state = initialState, action) => {
  switch (action.type) {
    case "CATCH_POKEMON": {
        swal("Congrats", toCapitalLetter(action.payload.name) + " was caught", "success")
      return { ...state, catched: initialState.ownPokemons.catched.push(action.payload) };
    }
    case "RELEASE_POKEMONS": {
        return { ...state, catched: initialState.ownPokemons.catched = [] };
      }
    default:
      return state;
  }
};
