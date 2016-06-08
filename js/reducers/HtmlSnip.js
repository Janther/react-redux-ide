import * as ActionTypes from '../constants/ActionTypes';

let defaultState = {
  html: ''
};

export default function(state = defaultState, action = '') {
  switch (action.type) {
    case ActionTypes.HTML_CHANGED:
      return {...state, html: action.html};
    default:
      return state;
  }
}
