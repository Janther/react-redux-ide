import * as constants from '../constants';
import { createReducer, updateObject, insertItemInArray, updateItemInArray } from './reducerUtils';

const resetOffsets = (cursor) => {
  return updateObject(
    cursor,
    {
      startOffset: cursor.char,
      endOffset: cursor.char
    }
  );
}

const charsInLine = (lines, index) => {
  return lines[index].value.length;
}

const moveUpCursor = (state, action) => {
  let newCursor = {};

  if (state.line == 0) {
    newCursor.char = 0;
  } else {
    const payloadLines = action.payload.lines;
    const previousLineLength = charsInLine(payloadLines, state.line - 1);
    newCursor.line = state.line - 1;
    newCursor.char = Math.min(previousLineLength, state.char);
  }

  return updateObject(state, resetOffsets(newCursor));
}

const moveDownCursor = (state, action) => {
  let newCursor = {};
  const payloadLines = action.payload.lines;

  if (state.line == payloadLines.length - 1) {
    newCursor.char = charsInLine(payloadLines, payloadLines.length - 1);
  } else {
    const nextLineLength = charsInLine(payloadLines, state.line + 1);
    newCursor.line = state.line + 1;
    newCursor.char = Math.min(nextLineLength, state.char)
  }

  return updateObject(state, resetOffsets(newCursor));
}

const moveLeftCursor = (state, action) => {
  let newCursor = {};

  if (state.char > 0) {
    newCursor.char = state.char - 1;
  } else if (state.line > 0) {
    const payloadLines = action.payload.lines;
    const previousLineLength = charsInLine(payloadLines, state.line - 1);
    newCursor.line = state.line - 1;
    newCursor.char = previousLineLength;
  } else {
    newCursor.char = state.char;
  }

  return updateObject(state, resetOffsets(newCursor));
}

const moveRightCursor = (state, action) => {
  let newCursor = {};
  const payloadLines = action.payload.lines;
  const currentLineLength = charsInLine(payloadLines, state.line);

  if (state.char < currentLineLength) {
    newCursor.char = state.char + 1;
  } else if (state.line < payloadLines.length - 1) {
    newCursor.line = state.line + 1;
    newCursor.char = 0;
  } else {
    newCursor.char = state.char;
  }

  return updateObject(state, resetOffsets(newCursor));
}

const editLine = (state, action) => {
  let newCursor = {};
  const payloadLines = action.payload.lines;

  if (payloadLines.length == 1) {
    newCursor.endOffset = state.startOffset + payloadLines[0].length;
    newCursor.char = newCursor.endOffset;
  } else {
    newCursor.line = state.line + payloadLines.length - 1;
    newCursor.char = payloadLines[payloadLines.length - 1].length;
    newCursor = resetOffsets(newCursor);
  }

  return updateObject(state, newCursor);
}

const cursor = createReducer(
  {
    line: 0,
    char: 0,
    startOffset: 0,
    endOffset: 0
  },
  ((actionsHandlersMap = {}) => {
    actionsHandlersMap[constants.EDITOR_MOVE_UP_CURSOR] = moveUpCursor;
    actionsHandlersMap[constants.EDITOR_MOVE_DOWN_CURSOR] = moveDownCursor;
    actionsHandlersMap[constants.EDITOR_MOVE_LEFT_CURSOR] = moveLeftCursor;
    actionsHandlersMap[constants.EDITOR_MOVE_RIGHT_CURSOR] = moveRightCursor;
    actionsHandlersMap[constants.EDITOR_LINE_CHANGED] = editLine;
    return actionsHandlersMap;
  })()
);

export default cursor;
