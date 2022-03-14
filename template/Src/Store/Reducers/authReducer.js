const initialAuthState = {
  userToken: null,
  isSeenIntro: false,
};

const setisSeenIntro = (state, action) => {
  return {
    ...state,
    isSeenIntro: action.isSeenIntro,
  };
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
    case 'IS_SEEN_INTRO':
      return setisSeenIntro(state, action);
    default:
      return state;
  }
}
