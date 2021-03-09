import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import todosReducer from "./changeTodos";
import emailReducer from "./changeEmail";
import usernameReducer from "./changeUsername";
import profilephotoReducer from "./changeProfilephoto";
import { combineReducers } from "redux";

const allReducer = combineReducers({
  counterReducer,
  loggedReducer,
  todosReducer,
  usernameReducer,
  emailReducer,
  profilephotoReducer,
});

export default allReducer;
