
export function makePeer(secondaryId) {
  return function(dispatch) {
    dispatch({ type: 'MAKE_CONNECTION', payload: secondaryId });
  }
};
