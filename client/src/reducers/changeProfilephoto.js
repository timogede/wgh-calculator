const profilephotoReducer = (state = "", action) => {
  switch (action.type) {
    case "CHANGEPROFILEPHOTO":
      console.log(action.data);
      return action.data;

    case "REMOVEPROFILEPHOTO":
      console.log(action.data);
      return "";

    default:
      return state;
  }
};

export default profilephotoReducer;
