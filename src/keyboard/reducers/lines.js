import * as constants from '../constants';

const regularExpresionNewLines=/\r\n|\n\r|\n|\r/g;

const lines = function(state = [ { value: '', offset: 0, syntax: false } ], action) {
  switch (action.type) {
    case constants.EDITOR_TEXT_CHANGED:
    case constants.EDITOR_TEXT_ADDED:
      const linesArray = action.text.split(regularExpresionNewLines);
      let offset = 0;
      return linesArray.map(line => {
        const lineObject = { value: line, offset: offset }
        offset += line.length;
        return lineObject;
      });
    default:
      return state;
  }
}

export default lines
