import * as constants from '../constants';
import { createReducer, updateObject, insertItemInArray, updateItemInArray } from './reducerUtils';

const resetOffsets = (cursor) => {
  return updateObject(
    cursor,
    {
      startOffset: cursor.charIndex,
      endOffset: cursor.charIndex
    }
  );
}

const charsInLine = (lines, index) => {
  return lines[index].value.length;
}

const moveUpCursor = (state, action) => {
  let newCursor = {};

  if (state.lineIndex == 0) {
    newCursor.charIndex = 0;
  } else {
    const payloadLines = action.payload.lines;
    const previousLineLength = charsInLine(payloadLines, state.lineIndex - 1);
    newCursor.lineIndex = state.lineIndex - 1;
    newCursor.charIndex = Math.min(previousLineLength, state.charIndex);
  }

  return updateObject(state, resetOffsets(newCursor));
}

const moveDownCursor = (state, action) => {
  let newCursor = {};
  const payloadLines = action.payload.lines;

  if (state.lineIndex == payloadLines.length - 1) {
    newCursor.charIndex = charsInLine(payloadLines, payloadLines.length - 1);
  } else {
    const nextLineLength = charsInLine(payloadLines, state.lineIndex + 1);
    newCursor.lineIndex = state.lineIndex + 1;
    newCursor.charIndex = Math.min(nextLineLength, state.charIndex)
  }

  return updateObject(state, resetOffsets(newCursor));
}

const moveLeftCursor = (state, action) => {
  let newCursor = {};

  if (state.charIndex > 0) {
    newCursor.charIndex = state.charIndex - 1;
  } else if (state.lineIndex > 0) {
    const payloadLines = action.payload.lines;
    const previousLineLength = charsInLine(payloadLines, state.lineIndex - 1);
    newCursor.lineIndex = state.lineIndex - 1;
    newCursor.charIndex = previousLineLength;
  } else {
    newCursor.charIndex = state.charIndex;
  }

  return updateObject(state, resetOffsets(newCursor));
}

const moveRightCursor = (state, action) => {
  let newCursor = {};
  const payloadLines = action.payload.lines;
  const currentLineLength = charsInLine(payloadLines, state.lineIndex);

  if (state.charIndex < currentLineLength) {
    newCursor.charIndex = state.charIndex + 1;
  } else if (state.lineIndex < payloadLines.length - 1) {
    newCursor.lineIndex = state.lineIndex + 1;
    newCursor.charIndex = 0;
  } else {
    newCursor.charIndex = state.charIndex;
  }

  return updateObject(state, resetOffsets(newCursor));
}

const editLine = (state, action) => {
  let newCursor = {};
  const payloadLines = action.payload.lines;

  if (payloadLines.length == 1) {
    newCursor.endOffset = state.startOffset + payloadLines[0].length;
    newCursor.charIndex = newCursor.endOffset;
  } else {
    newCursor.lineIndex = state.lineIndex + payloadLines.length - 1;
    newCursor.charIndex = payloadLines[payloadLines.length - 1].length;
    newCursor = resetOffsets(newCursor);
  }

  return updateObject(state, newCursor);
}

const backspace = (state, action) => {
  if (state.startOffset == state.charIndex) return state;
  return moveLeftCursor(state, action);
}

const cursor = createReducer(
  {
    lineIndex: 0,
    charIndex: 0,
    startOffset: 0,
    endOffset: 0
  },
  ((actionsHandlersMap = {}) => {
    actionsHandlersMap[constants.EDITOR_MOVE_UP_CURSOR] = moveUpCursor;
    actionsHandlersMap[constants.EDITOR_MOVE_DOWN_CURSOR] = moveDownCursor;
    actionsHandlersMap[constants.EDITOR_MOVE_LEFT_CURSOR] = moveLeftCursor;
    actionsHandlersMap[constants.EDITOR_MOVE_RIGHT_CURSOR] = moveRightCursor;
    actionsHandlersMap[constants.EDITOR_LINE_CHANGED] = editLine;
    actionsHandlersMap[constants.EDITOR_BACKSPACE] = backspace;
    return actionsHandlersMap;
  })()
);

export default cursor;
