const usernameReducer = (state = "", action) => {
  switch (action.type) {
    case "CHANGEUSERNAME":
      console.log(action.data);
      return action.data;

    case "REMOVEUSERNAME":
      console.log(action.data);
      return "";

    default:
      return state;
  }
};

export default usernameReducer;
