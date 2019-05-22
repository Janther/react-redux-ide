import * as constants from "../constants";
import * as caret from "./caret";
import fromPairs from "lodash/fromPairs";
import { charLengthInScreen } from "../../utils/stringLengthInScreen";
import { createReducer } from "../../utils/reducerUtils";

const resetAnchor = cursor => {
  cursor.anchor.lineIndex = cursor.caret.lineIndex;
  cursor.anchor.charIndex = cursor.caret.charIndex;
  return cursor;
};

const updateLTR = cursor => {
  cursor.ltr =
    cursor.anchor.lineIndex === cursor.caret.lineIndex
      ? cursor.anchor.charIndex <= cursor.caret.charIndex
      : cursor.anchor.lineIndex <= cursor.caret.lineIndex;
  return cursor;
};

const moveUp = (state, action) => {
  state.caret = caret.moveUp(state.caret, action);
  return updateLTR(resetAnchor(state));
};

const moveDown = (state, action) => {
  state.caret = caret.moveDown(state.caret, action);
  return updateLTR(resetAnchor(state));
};

const moveLeft = (state, action) => {
  state.caret = caret.moveLeft(state.caret, action);
  return updateLTR(resetAnchor(state));
};

const moveRight = (state, action) => {
  state.caret = caret.moveRight(state.caret, action);
  return updateLTR(resetAnchor(state));
};

const selectUp = (state, action) => {
  state.caret = caret.moveUp(state.caret, action);
  return updateLTR(state);
};

const selectDown = (state, action) => {
  state.caret = caret.moveDown(state.caret, action);
  return updateLTR(state);
};

const selectLeft = (state, action) => {
  state.caret = caret.moveLeft(state.caret, action);
  return updateLTR(state);
};

const selectRight = (state, action) => {
  state.caret = caret.moveRight(state.caret, action);
  return updateLTR(state);
};

const editLine = (state, action) => {
  const actionLines = action.lines;

  if (actionLines.length === 1) {
    state.caret.charIndex =
      (state.ltr ? state.anchor.charIndex : state.caret.charIndex) +
      actionLines[0].length;
  } else {
    state.caret.lineIndex = state.caret.lineIndex + actionLines.length - 1;
    state.caret.charIndex = actionLines[actionLines.length - 1].length;

    state = resetAnchor(state);
  }
  return updateLTR(resetAnchor(state));
};

const backspace = (state, action) => {
  if (
    state.caret.lineIndex === state.anchor.lineIndex &&
    state.caret.charIndex === state.anchor.charIndex
  )
    return moveLeft(state, action);

  if (state.ltr) {
    state.caret.lineIndex = state.anchor.lineIndex;
    state.caret.charIndex = state.anchor.charIndex;
  }

  return updateLTR(resetAnchor(state));
};

const del = (state, action) => {
  if (
    state.caret.lineIndex === state.anchor.lineIndex &&
    state.caret.charIndex === state.anchor.charIndex
  )
    return state;
  console.log(state.ltr);
  if (!state.ltr) {
    state.caret.lineIndex = state.anchor.lineIndex;
    state.caret.charIndex = state.anchor.charIndex;
  }

  return updateLTR(resetAnchor(state));
};

const getIndex = (chars, x) => {
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
};

const lineClicked = (state, action) => {
  state.caret.lineIndex = Math.floor(
    action.y / action.charSize.lineHeightInPixels
  );

  let line = action.lines[state.caret.lineIndex].value;

  state.caret.charIndex = getIndex(
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

  return updateLTR(resetAnchor(state));
};

export default createReducer(
  {
    caret: {
      lineIndex: 0,
      charIndex: 0
    },
    anchor: {
      lineIndex: 0,
      charIndex: 0
    },
    ltr: true
  },
  fromPairs([
    [constants.EDITOR_MOVE_UP_CURSOR, moveUp],
    [constants.EDITOR_MOVE_DOWN_CURSOR, moveDown],
    [constants.EDITOR_MOVE_LEFT_CURSOR, moveLeft],
    [constants.EDITOR_MOVE_RIGHT_CURSOR, moveRight],
    [constants.EDITOR_SELECT_UP, selectUp],
    [constants.EDITOR_SELECT_DOWN, selectDown],
    [constants.EDITOR_SELECT_LEFT, selectLeft],
    [constants.EDITOR_SELECT_RIGHT, selectRight],
    [constants.EDITOR_LINE_CHANGED, editLine],
    [constants.EDITOR_BACKSPACE, backspace],
    [constants.EDITOR_DEL, del],
    ["EDITOR_LINE_CLICKED", lineClicked]
  ])
);
