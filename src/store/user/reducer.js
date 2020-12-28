import * as actionTypes from './constants';
import produce from 'immer';

const defaultState = {
  user: {}
};

export default produce((draft, action) => {
  switch(action.type) {
    case actionTypes.GET_USER_SUCCESS:
      console.log('action', action);
      return draft;
    case actionTypes.LOGIN_USERNAME:
      draft.user = action.data;
      return draft;
    case actionTypes.LOGIN_USERNAME_SUCCESS:
      return
    default:
      return draft;
  }
}, defaultState);