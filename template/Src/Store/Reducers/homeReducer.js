const initialHomeState = {
  /* Add your parameters to store to redux and mention its types to the
     HomeState type in ReducerTypes.types.tsx file */
};

const clearHomeState = () => {
  return {
    ...initialHomeState, // Clear Redux Data
  };
};

export default function (state = initialHomeState, action) {
  switch (action.type) {
    // add homeState Actions Here
    case 'CLEAR_HOME_STATE':
      return clearHomeState();
    default:
      return state;
  }
}
