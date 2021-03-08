const usernameReducer = (state = "", action) => {
  switch (action.type) {
    case "CHANGEEMAIL":
      console.log(action.data);
      return action.data;

    case "REMOVEEMAIL":
      console.log(action.data);
      return "";

    default:
      return state;
  }
};

export default usernameReducer;
