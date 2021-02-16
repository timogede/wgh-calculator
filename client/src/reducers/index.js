import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import todosReducer from "./changeTodos";
import { combineReducers } from "redux";

const allReducer = combineReducers({
  counterReducer,
  loggedReducer,
  todosReducer,
});

export default allReducer;
