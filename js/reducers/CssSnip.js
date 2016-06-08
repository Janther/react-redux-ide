import * as ActionTypes from '../constants/ActionTypes';

let defaultState = {
  css: ''
};

export default function(state = defaultState, action = '') {
  switch (action.type) {
    case ActionTypes.CSS_CHANGED:
      return {...state, css: action.css};
    default:
      return state;
  }
}
