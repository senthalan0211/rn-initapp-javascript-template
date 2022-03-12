const initialAuthState = {
  userToken: null,
};

const login = (state, action) => {
  return {
    ...state,
    userToken: action.userToken,
  };
};

const logout = () => {
  return {
    ...initialAuthState,
  };
};

export default function (state = initialAuthState, action) {
  switch (action.type) {
    case 'LOGIN':
      return login(state, action);
    case 'LOGOUT':
      return logout();
    default:
      return state;
  }
}
