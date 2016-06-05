import {HTML_CHANGED} from '../constants/ActionTypes';
import {CSS_CHANGED} from '../constants/ActionTypes';

export function changeHTML(html) {
  return {
    type: HTML_CHANGED,
    html
  }
}

export function changeCSS(css) {
  return {
    type: CSS_CHANGED,
    css
  }
}
