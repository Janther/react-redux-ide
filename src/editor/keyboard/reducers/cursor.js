import * as constants from "../constants";
import fromPairs from "lodash/fromPairs";
import { charLengthInScreen } from "../../utils/stringLengthInScreen";
import { createReducer } from "../../utils/reducerUtils";

const resetOffsets = cursor => {
  cursor.startOffset = cursor.charIndex;
  cursor.endOffset = cursor.charIndex;
  return cursor;
};

const charsInLine = (lines, index) => {
  return lines[index].value.length;
};

const moveUpCursor = (state, action) => {
  if (state.lineIndex === 0) {
    state.charIndex = 0;
  } else {
    const previousLineLength = charsInLine(action.lines, state.lineIndex - 1);
    state.lineIndex--;
    state.charIndex = Math.min(previousLineLength, state.charIndex);
  }

  return resetOffsets(state);
};

const moveDownCursor = (state, action) => {
  const actionLines = action.lines;

  if (state.lineIndex === actionLines.length - 1) {
    state.charIndex = charsInLine(actionLines, actionLines.length - 1);
  } else {
    const nextLineLength = charsInLine(actionLines, state.lineIndex + 1);
    state.lineIndex++;
    state.charIndex = Math.min(nextLineLength, state.charIndex);
  }

  return resetOffsets(state);
};

const moveLeftCursor = (state, action) => {
  if (state.charIndex > 0) {
    state.charIndex--;
  } else if (state.lineIndex > 0) {
    const previousLineLength = charsInLine(action.lines, state.lineIndex - 1);
    state.lineIndex--;
    state.charIndex = previousLineLength;
  }

  return resetOffsets(state);
};

const moveRightCursor = (state, action) => {
  const actionLines = action.lines;
  const currentLineLength = charsInLine(actionLines, state.lineIndex);

  if (state.charIndex < currentLineLength) {
    state.charIndex++;
  } else if (state.lineIndex < actionLines.length - 1) {
    state.lineIndex++;
    state.charIndex = 0;
  }

  return resetOffsets(state);
};

const editLine = (state, action) => {
  const actionLines = action.lines;

  if (actionLines.length === 1) {
    state.endOffset = state.startOffset + actionLines[0].length;
    state.charIndex = state.endOffset;
  } else {
    state.lineIndex = state.lineIndex + actionLines.length - 1;
    state.charIndex = actionLines[actionLines.length - 1].length;

    state = resetOffsets(state);
  }

  return state;
};

const backspace = (state, action) => {
  return moveLeftCursor(state, action);
};

function getIndex(chars, x) {
  if (chars.length === 0) return 0;

  // Shortcut for the actual value
  if (x >= chars[chars.length - 1].start + chars[chars.length - 1].length)
    return chars.length;
  if (x < chars[0].start) return 0;

  // Binary search of the value in the array
  let min = 0;
  let max = chars.length - 1;
  let mid = Math.floor((max + min) / 2);

  while (
    (chars[mid].start > x || chars[mid].start + chars[mid].length < x) &&
    max > min
  ) {
    if (chars[mid].start <= x) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
    mid = Math.floor((max + min) / 2);
  }
  return mid + Math.round((x - chars[mid].start) / chars[mid].length);
}

const lineClicked = (state, action) => {
  state.lineIndex = Math.floor(action.y / action.charSize.lineHeightInPixels);
  let line = action.lines[state.lineIndex].value;
  state.charIndex = getIndex(
    line.split("").reduce((chars, char) => {
      chars.push({
        char: char,
        start: chars.length
          ? chars[chars.length - 1].start + chars[chars.length - 1].length
          : 0,
        length: charLengthInScreen(char, action.charSize)
      });
      return chars;
    }, []),
    action.x
  );

  return resetOffsets(state);
};

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
    [constants.EDITOR_BACKSPACE, backspace],
    ["EDITOR_LINE_CLICKED", lineClicked]
  ])
);
