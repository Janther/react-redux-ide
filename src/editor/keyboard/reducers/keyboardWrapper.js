import * as constants from "../constants";
import { createReducer } from "../../utils/reducerUtils";
import fromPairs from "lodash/fromPairs";

const subscribeKeyboard = (state, action) => {
  return action.keyboardId;
};

export default createReducer(
  "",
  fromPairs([[constants.SUBSCRIBE_KEYBOARD, subscribeKeyboard]])
);
