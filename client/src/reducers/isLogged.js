const loggedReducer = (state, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return true;

    case "DECREMENT":
      return state - 1;
  }
};

export default loggedReducer;
