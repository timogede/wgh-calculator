const todosReducer = (state = [], action) => {
  switch (action.type) {
    case "CHANGETODOS":
      console.log(action.data);
      return action.data;

    default:
      return state;
  }
};

export default todosReducer;
