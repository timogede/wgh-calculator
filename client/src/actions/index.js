export const login = (data) => {
  return {
    type: "LOGIN",
    data: data,
  };
};

export const logout = () => {
  return {
    type: "LOGOUT",
  };
};

export const changeTodos = (data) => {
  return {
    type: "CHANGETODOS",
    data: data,
  };
};

export const changeUsername = (data) => {
  return {
    type: "CHANGEUSERNAME",
    data: data,
  };
};

export const removeUsername = (data) => {
  return {
    type: "REMOVEUSERNAME",
    data: data,
  };
};

export const changeEmail = (data) => {
  return {
    type: "CHANGEEMAIL",
    data: data,
  };
};

export const removeEmail = (data) => {
  return {
    type: "REMOVEEMAIL",
    data: data,
  };
};
