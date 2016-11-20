import * as constants from '../constants';

const regularExpresionNewLines=/\r\n|\n\r|\n|\r/g;

const text = function(state = '', action) {
  switch (action.type) {
    case constants.EDITOR_TEXT_CHANGED:
    case constants.EDITOR_TEXT_ADDED:
      return action.text.replace(regularExpresionNewLines, "\n");
    default:
      return state;
  }
}

export default text;
