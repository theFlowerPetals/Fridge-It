import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import message from './messageReducers';
import search from './searchReducers';
import fridge from './fridgeReducers';
import items from './itemReducers';
import auth from './authReducers';
import voice from './voiceReducers';
import dummy from './dummyReducer';
import mukbang from './mukbangReducer';


const FridgeApp = combineReducers({
  auth,
  message,
  search,
  fridge,
  items,
  voice,
  dummy,
  mukbang,
  routing: routerReducer,
});

export default FridgeApp;