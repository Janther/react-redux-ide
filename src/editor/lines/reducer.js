import * as constants from "./constants";
import fromPairs from "lodash/fromPairs";
import { createReducer } from "../utils/reducerUtils";

const updateCharSize = (state, action) => {
  state.invalidCharSize = false;
  state.charSize = action.size;
  return state;
};

const invalidateCharSize = (state, action) => {
  state.invalidCharSize = true;
  return state;
};

export default createReducer(
  {
    invalidCharSize: true,
    charSize: {
      defaultCharWidth: 0,
      doubleWidthCharWidth: 0,
      halfWidthCharWidth: 0,
      koreanCharWidth: 0,
      lineHeightInPixels: 0
    }
  },
  fromPairs([
    [constants.EDITOR_UPDATE_CHAR_SIZE, updateCharSize],
    [constants.EDITOR_INVALIDATE_CHAR_SIZE, invalidateCharSize]
  ])
);
