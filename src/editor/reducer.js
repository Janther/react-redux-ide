import { combineReducers } from "redux";
import createReducer from "./utils/createReducer";
import * as constants from "./constants";
import keyboard from "./keyboard/reducer";
import lines from "./lines/reducer";
import fromPairs from "lodash/fromPairs";

const focusEditor = (state, action) => ({
  ...state,
  selectedEditor: action.selectedEditor
});

const editors = createReducer(
  {
    editors: ["style"],
    selectedEditor: "style"
  },
  fromPairs([[constants.EDITOR_FOCUSED, focusEditor]])
);

const editorReducer = combineReducers({
  keyboard,
  lines,
  editors
});

export default editorReducer;
