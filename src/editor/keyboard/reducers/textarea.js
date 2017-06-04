import * as constants from "../constants";
import { createReducer } from "../../utils/reducerUtils";
import fromPairs from "lodash/fromPairs";

const clearTextarea = () => {
  return "";
};

const keepTextarea = (state, action) => {
  const lines = action.lines;
  if (lines.length === 1) {
    return lines[0];
  }
  return clearTextarea();
};

export default createReducer(
  "",
  fromPairs([
    [constants.EDITOR_LINE_CHANGED, keepTextarea],
    [constants.EDITOR_MOVE_UP_CURSOR, clearTextarea],
    [constants.EDITOR_MOVE_DOWN_CURSOR, clearTextarea],
    [constants.EDITOR_MOVE_LEFT_CURSOR, clearTextarea],
    [constants.EDITOR_MOVE_RIGHT_CURSOR, clearTextarea],
    [constants.EDITOR_BACKSPACE, clearTextarea]
  ])
);
