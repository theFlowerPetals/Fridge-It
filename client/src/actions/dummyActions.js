
export function changeName(name) {
  return function(dispatch) {
    dispatch({type: 'CHANGE_NAME', payload: 'Mark'});
  }
};

