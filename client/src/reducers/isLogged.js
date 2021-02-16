const loggedReducer = (state = false, action) => {
  switch (action.type) {
    case "LOGIN":
      console.log(action.data);
      return true;

    case "LOGOUT":
      return false;

    default:
      return false;
  }
};

export default loggedReducer;
