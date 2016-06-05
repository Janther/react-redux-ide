import * as ActionTypes from '../constants/ActionTypes';

let defaultState = {
  css: '',
  html: ''
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.HTML_CHANGED:
      return {...state, html: action.html};
    case ActionTypes.CSS_CHANGED:
      return {...state, css: action.css};
    default:
      return state;
  }
}
