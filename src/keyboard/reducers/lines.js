import * as constants from '../constants';
import { updateObject, insertItemInArray, updateItemInArray } from './reducerUtils';

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
    case constants.EDITOR_LINE_CHANGED:
      const payload = action.payload;

      return updateItemInArray(
        state,
        payload.cursor.line,
        (line) => {
          return updateObject(
            line,
            {
              value:
                line.value.slice(0, payload.cursor.startOffset) +
                payload.text +
                line.value.slice(payload.cursor.endOffset)
            }
          );
        }
      )
    default:
      return state;
  }
};

export default lines;
