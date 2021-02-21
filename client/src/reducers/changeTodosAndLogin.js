const todosReducerAndLogin = (state = [], action) => {
  switch (action.type) {
    case "CHANGETODOSANDLOGIN":
      console.log(action.data);
      return action.data;

    default:
      return [];
  }
};

export default todosReducerAndLogin;
