import * as ActionTypes from '../constants/ActionTypes';
import {default as CssSnip} from './CssSnip';
import {default as HtmlSnip} from './HtmlSnip';

let defaultState = {
  css: CssSnip(),
  html: HtmlSnip()
};

export default function(state = defaultState, action = '') {
  switch (action.type) {
    case ActionTypes.HTML_CHANGED:
      return {...state, html: action.html};
    case ActionTypes.CSS_CHANGED:
      return {...state, css: action.css};
    default:
      return state;
  }
}
