import axios from "axios";
import swal from 'sweetalert';


export const fetchPokemons = region => {
  const API_URL = "https://pokeapi.co/api/v2/pokemon?";
  return async dispatch => {
    dispatch({ type: "FETCH_POKEMONS_START" });
    await axios({ url: `${API_URL}${region}` })
      .then(response => {
        dispatch({ type: "RECEIVE_POKEMONS", payload: response.data.results });
      })
      .catch(error => {
        dispatch({ type: "FETCH_POKEMONS_ERROR", payload: error.message });
      });
  };
};
export const getPokemonsDetails = url => {
  return async dispatch => {
    dispatch({ type: "FETCH_POKEMONS_DETAILS_START" });
    await axios({ url: `${url}` })
      .then(async response => {
        await dispatch({
          type: "RECEIVE_POKEMONS_DETAILS",
          payload: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: "FETCH_POKEMONS_DETAILS_ERROR",
          payload: error.message
        });
      });
  };
};

export const disableSearchBox = value => ({
  type: "DISABLE_SEARCH_BOX",
  payload: value
});

export const catchPokemon = (name, url) => ({
  type: "CATCH_POKEMON",
  payload: {
    name,
    url
  }
});

export const clearDOM = () => {
  return {
    type: "CLEAR_DOM"
  };
};
export const releasePokemons = () => {
  swal("😢","Your Pokemons Were Released")
  return {
    type: "RELEASE_POKEMONS"
  };
};

export const pokemonSearch = (imputValue) => {
  return function(dispatch) {
      dispatch({type: "POKEMON_SEARCH", payload: imputValue})

  }
}