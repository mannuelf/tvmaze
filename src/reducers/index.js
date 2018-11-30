import { combineReducers } from 'redux';
import { SET_TV_SHOW } from '../actions';

// a reducer take two params, a state variable and an action,
// we will assign empty state by default to the state variable.
function tvShow(state = [], action) {
  switch(action.type) {
    case SET_TV_SHOW:
      return action.tv_show;
    default:
      return state;
  }
}

const rootReducer = combineReducers({ tvShow });

export default rootReducer;
