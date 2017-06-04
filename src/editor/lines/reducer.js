import * as constants from "./constants";

const lines = function(
  state = {
    invalidCharSize: true,
    charSize: {
      defaultCharWidth: 0,
      doubleWidthCharWidth: 0,
      halfWidthCharWidth: 0,
      koreanCharWidth: 0,
      lineHeightInPixels: 0
    }
  },
  action
) {
  switch (action.type) {
    case constants.EDITOR_UPDATE_CHAR_SIZE:
      return {
        ...state,
        invalidCharSize: false,
        charSize: action.size
      };
    case constants.EDITOR_INVALIDATE_CHAR_SIZE:
      return {
        ...state,
        invalidCharSize: true
      };
    default:
      return state;
  }
};

export default lines;
