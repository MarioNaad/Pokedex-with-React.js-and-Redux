import { combineReducers } from "redux";
import {pokemons} from "./pokemons";
import {search} from "./search";
import {trainer} from "./trainer";

const rootReducer = combineReducers({
  data: pokemons,
  search,
  trainer,
});

export default rootReducer;