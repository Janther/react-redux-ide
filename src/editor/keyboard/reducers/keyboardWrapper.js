import * as constants from "../constants";
import createReducer from "../../utils/createReducer";
import fromPairs from "lodash/fromPairs";

const subscribeKeyboard = (state, action) => action.keyboardId;

export default createReducer(
  "",
  fromPairs([[constants.SUBSCRIBE_KEYBOARD, subscribeKeyboard]])
);
