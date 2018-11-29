import { combineReducers } from 'redux';
import { GET_TV_SHOW } from '../actions';

import tv_show from '../data/tv-show'

function tvShow(state = [], action) {
  switch(action.type) {
    case GET_TV_SHOW:
      return action.tv_show
    default:
      return state;
  }
}


const rootReducer = combineReducers({ tv_show })

export default rootReducer;
