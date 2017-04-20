import * as constants from '../constants';
import fromPairs from 'lodash.frompairs';
import { createReducer, updateObject } from '../../utils/reducerUtils';

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

  if (state.lineIndex === 0) {
    newCursor.charIndex = 0;
  } else {
    const actionLines = action.lines;
    const previousLineLength = charsInLine(actionLines, state.lineIndex - 1);
    newCursor.lineIndex = state.lineIndex - 1;
    newCursor.charIndex = Math.min(previousLineLength, state.charIndex);
  }

  return updateObject(state, resetOffsets(newCursor));
}

const moveDownCursor = (state, action) => {
  let newCursor = {};
  const actionLines = action.lines;

  if (state.lineIndex === actionLines.length - 1) {
    newCursor.charIndex = charsInLine(actionLines, actionLines.length - 1);
  } else {
    const nextLineLength = charsInLine(actionLines, state.lineIndex + 1);
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
    const actionLines = action.lines;
    const previousLineLength = charsInLine(actionLines, state.lineIndex - 1);
    newCursor.lineIndex = state.lineIndex - 1;
    newCursor.charIndex = previousLineLength;
  } else {
    newCursor.charIndex = state.charIndex;
  }

  return updateObject(state, resetOffsets(newCursor));
}

const moveRightCursor = (state, action) => {
  let newCursor = {};
  const actionLines = action.lines;
  const currentLineLength = charsInLine(actionLines, state.lineIndex);

  if (state.charIndex < currentLineLength) {
    newCursor.charIndex = state.charIndex + 1;
  } else if (state.lineIndex < actionLines.length - 1) {
    newCursor.lineIndex = state.lineIndex + 1;
    newCursor.charIndex = 0;
  } else {
    newCursor.charIndex = state.charIndex;
  }

  return updateObject(state, resetOffsets(newCursor));
}

const editLine = (state, action) => {
  let newCursor = {};
  const actionLines = action.lines;

  if (actionLines.length === 1) {
    newCursor.endOffset = state.startOffset + actionLines[0].length;
    newCursor.charIndex = newCursor.endOffset;
  } else {
    newCursor.lineIndex = state.lineIndex + actionLines.length - 1;
    newCursor.charIndex = actionLines[actionLines.length - 1].length;
    newCursor = resetOffsets(newCursor);
  }

  return updateObject(state, newCursor);
}

const backspace = (state, action) => {
  return moveLeftCursor(state, action);
}

export default createReducer(
  {
    lineIndex: 0,
    charIndex: 0,
    startOffset: 0,
    endOffset: 0
  },
  fromPairs([
    [constants.EDITOR_MOVE_UP_CURSOR, moveUpCursor],
    [constants.EDITOR_MOVE_DOWN_CURSOR, moveDownCursor],
    [constants.EDITOR_MOVE_LEFT_CURSOR, moveLeftCursor],
    [constants.EDITOR_MOVE_RIGHT_CURSOR, moveRightCursor],
    [constants.EDITOR_LINE_CHANGED, editLine],
    [constants.EDITOR_BACKSPACE, backspace]
  ])
);
