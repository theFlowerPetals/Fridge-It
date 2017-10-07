const initialState = {
  uri: [],
  nutrients: [],
  items: []
}


const voiceReducer = (state=initialState, action) => {
  switch(action.type) {

    case 'GET_NEW_URI_FULFILLED': {
      return Object.assign({}, state, {uri: action.payload});
    }

    case 'GET_NUTRIENTS_FULFILLED': {
      return Object.assign({}, state, {nutrients: action.payload});
    }

    case 'GET_ALL_ITEMS': {
      return Object.assign({}, state, {items: action.payload});
    }

    case 'GET_ITEM_BY_TYPE': {
      return Object.assign({}, state, {items: action.payload});
    }
    
  }

  return state;
}

export default voiceReducer;