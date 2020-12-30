import produce from 'immer';
import { combineReducers } from 'redux-immer';

import { reducer as userReducer } from './user';

export default combineReducers(produce, {
  user: userReducer
});