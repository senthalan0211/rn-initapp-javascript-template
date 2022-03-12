export const login = userToken => {
  return {
    type: 'LOGIN',
    userToken: userToken,
  };
};

export const logout = () => {
  return {
    type: 'LOGOUT',
  };
};
