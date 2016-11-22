import * as constants from '../constants';
import { createReducer, updateObject, insertItemInArray, updateItemInArray } from './reducerUtils';

const editLine = (state, action) => {
  const { cursor, lines } = action.payload;
  const { lineIndex, startOffset, endOffset } = cursor;
  const currentLine = state[lineIndex].value;
  const beforeOffsets = currentLine.slice(0, startOffset)
  const afterOffsets = currentLine.slice(endOffset)

  let newLines;

  if (lines.length == 1){
    newLines = [beforeOffsets + lines[0] + afterOffsets];
  } else {
    newLines = [
      beforeOffsets + lines[0],
      ...lines.slice(1, -1),
      lines[lines.length - 1] + afterOffsets
    ];
  }

  return [
    ...state.slice(0, lineIndex),
    ...newLines.map((line) => { return { value: line, syntax: false } }),
    ...state.slice(lineIndex + 1)
  ];
};

const backspace = (state, action) => {
  return state;
}

const lines = createReducer(
  [ { value: '', syntax: false } ],
  ((actionsHandlersMap = {}) => {
    actionsHandlersMap[constants.EDITOR_LINE_CHANGED] = editLine;
    actionsHandlersMap[constants.EDITOR_BACKSPACE] = backspace;
    return actionsHandlersMap;
  })()
);

export default lines;
