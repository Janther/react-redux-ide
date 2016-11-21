import * as constants from '../constants';
import { updateObject, insertItemInArray, updateItemInArray } from './reducerUtils';

const lines = (state = [ { value: '', syntax: false } ], action) => {
  switch (action.type) {
    case constants.EDITOR_LINE_CHANGED:
      const payload = action.payload;
      const beforeOffsets = state[payload.cursor.line].value.slice(0, payload.cursor.startOffset)
      const afterOffsets = state[payload.cursor.line].value.slice(payload.cursor.endOffset)

      let linesArray;

      if (payload.lines.length == 1){
        linesArray = [beforeOffsets + payload.lines + afterOffsets];
      } else {
        linesArray = [
          beforeOffsets + payload.lines[0],
          ...payload.lines.slice(1, -1),
          payload.lines[payload.lines.length - 1] + afterOffsets
        ];
      }
      return [
        ...state.slice(0, payload.cursor.line),
        ...linesArray.map((line) => { return { value: line, syntax: false } }),
        ...state.slice(payload.cursor.line + 1)
      ];
    default:
      return state;
  }
};

export default lines;
