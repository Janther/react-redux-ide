import { combineReducers } from "redux";
import textarea from "./reducers/textarea";
import commands from "./reducers/commands";
import keyboardWrapper from "./reducers/keyboardWrapper";
import lines from "./reducers/lines";
import cursor from "./reducers/cursor";

const keyboard = combineReducers({
  keyboardWrapper,
  textarea,
  commands,
  lines,
  cursor
});

export default keyboard;
