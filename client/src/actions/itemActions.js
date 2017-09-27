import axios from 'axios';

export function getItems(fridgeId) {
  return function(dispatch) {
    axios.get('/api/items/' + fridgeId)
      .then(({ data }) => {
        dispatch({type: 'FETCH_ITEMS_FULFILLED', payload: data})
      })
      .catch(err => { 
        dispatch({type: 'FETCH_ITEMS_REJECTED', payload: err})
      })
  }
}

export function addItem(item, fridgeId) {
  return function(dispatch) {
    axios.post('/api/items', {
      name: item.name,
      quantity: item.quantity,
      type: item.type,
      fridgeId: fridgeId
    })
      .then(({ data }) => {
        dispatch({type: 'POST_ITEM_FULFILLED', payload: data})
      })
      .catch(err => { 
        dispatch({type: 'POST_ITEM_REJECTED', payload: err})
      })
  }
}

export function updateItem(item, id) {
  return function(dispatch) {
    axios.post('api/items/' + id, {
      name: item.name,
      quantity: item.quantity, 
      type: item.type
    }) 
    .then(({ data }) => {
      dispatch({type: 'UPDATE_ITEM_FULFILLED', payload: data})
    })
    .catch(err => {
      dispatch({type: 'UPDATE_ITEM_REJECTED', payload: err})
    })
  }
}

export function deleteItem(id) {
  return function(dispatch) {
    axios.delete('api/items/' + id)
      .then((response) => {
        dispatch({type: 'DELETE_ITEM_FULFILLED', payload: response.data})
      })
      .catch(err => {
        dispatch({type: 'DELETE_ITEM_REJECTED', payload: err})
      })
  }
}
