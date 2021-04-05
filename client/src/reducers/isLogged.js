const loggedReducer = (state = false, action) => {
  switch (action.type) {
    case "LOGIN":
      console.log("Logged in!" + action.type);
      return true;

    case "LOGOUT":
      console.log("Logout triggererd" + action.type);
      return false;

    default:
      console.log("default triggererd" + action.type);
      return state;
  }
};

export default loggedReducer;
