import * as constants from "./constants";

export const updateCharSize = size => ({
  type: constants.EDITOR_UPDATE_CHAR_SIZE,
  payload: { size }
});

export const invalidateCharSize = () => ({
  type: constants.EDITOR_INVALIDATE_CHAR_SIZE
});

export const lineClick = event => (dispatch, getState) => {
  let boundingClientRect = event.currentTarget.getBoundingClientRect();
  let state = getState();

  dispatch({
    type: constants.EDITOR_LINE_CLICKED,
    payload: {
      charSize: state.janther.lines.charSize,
      lines: state.janther.keyboard.lines,
      x: event.clientX - boundingClientRect.x,
      y: event.clientY - boundingClientRect.y
    }
  });
};
