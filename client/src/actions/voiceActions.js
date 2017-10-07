import axios from 'axios';

export function getAllItems(fridgeId) {
  return function(dispatch) {
    axios.get(`api/items/${fridgeId}`)
    .then((results) => {
      dispatch({type: 'GET_ALL_ITEMS', payload: results.data});
    })
    .catch(err => {
      dispatch({type: 'GET_ALL_ITEMS_REJECTED', payload: err});
    })
  }
}

export function getItemByType(fridgeId, type) {
  return function(dispatch) {
    axios.get(`api/items/${fridgeId}/${type}`)
    .then((results) => {
      dispatch({type: 'GET_ITEM_BY_TYPE', payload: results.data});
    })
    .catch(err => {
      dispatch({type: 'GET_ITEM_BY_TYPE_REJECTED', payload: err});
    })
  }
}

export function getUri(item) {
  return function(dispatch) {
    axios.post('api/uri/items', {
      item: item
    })
    .then((results) => {
      dispatch({type: 'GET_NEW_URI_FULFILLED', payload: results.data});
    })
    .catch(err => {
      dispatch({type: 'GET_NEW_URI_REJECTED', payload: err})
    })
  }

}

export function getNutrients(measureUri, foodUri) {
  return function(dispatch) {
    axios.post('api/nutrients', {
      measureUri: measureUri,
      foodUri: foodUri
    })
    .then((results) => {
      dispatch({type: 'GET_NUTRIENTS_FULFILLED', payload: results.data});
    })
    .catch(err => {
      dispatch({type: 'GET_NUTRIENTS_REJECTED', payload: err})
    })
  }
}