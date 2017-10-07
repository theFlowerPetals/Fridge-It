const initialState = {
  name: ''
}

const dummyReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'CHANGE_NAME': {
      return Object.assign({}, state, {name: action.payload});
    }
    default: {
      return state;
    }
  }
}

export default dummyReducer;