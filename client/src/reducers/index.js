import { combineReducers } from "Redux";
import counterReducer from "./counter.";
import loggedReducer from "./isLogged.";

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
});
