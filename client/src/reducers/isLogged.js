const loggedReducer = (state = false, action) => {
  switch (action.type) {
    case "LOGIN":
      console.log("Login triggererd" + action.type);
      return Object.assign({"test"}, state, true);

    case "LOGOUT":
      console.log("Logout triggererd" + action.type);
      return false;

    default:
      console.log("default triggererd" + action.type);
      return false;
  }
};

export default loggedReducer;
