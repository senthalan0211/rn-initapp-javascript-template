export const setisSeenIntro = isSeenIntro => {
  return {
    type: 'IS_SEEN_INTRO',
    isSeenIntro: isSeenIntro,
  };
};
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
