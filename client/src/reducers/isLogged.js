const loggedReducer = (state = false, action) => {
  switch (action.type) {
    case "LOGIN":
      return true;

    case "LOGOUT":
      console.log("Logout triggererd" + action.type);
      return false;

    default:
      console.log("default triggererd" + action.type);
      return false;
  }
};

export default loggedReducer;
