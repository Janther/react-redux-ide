import * as ActionTypes from '../constants/ActionTypes';


const cssSnip = function(state = { css: '' }, action = '') {
  switch (action.type) {
    case ActionTypes.CSS_CHANGED:
      return { ...state, css: action.css };
    default:
      return state;
  }
}

const htmlSnip = function(state = { html: '' }, action = '') {
  switch (action.type) {
    case ActionTypes.HTML_CHANGED:
      return { ...state, html: action.html };
    default:
      return state;
  }
}

let defaultState = {
  css_snip: cssSnip(),
  html_snip: htmlSnip()
};

const snip = function(state = defaultState, action = '') {
  switch (action.type) {
    case ActionTypes.HTML_CHANGED:
      return { ...state, html_snip: htmlSnip(state.html, action) };
    case ActionTypes.CSS_CHANGED:
      return { ...state, css_snip: cssSnip(state.css, action) };
    default:
      return state;
  }
}

export default snip
