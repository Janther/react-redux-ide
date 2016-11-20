import * as constants from './constants';

export function changeText(text) {
  return {
    type: constants.EDITOR_TEXT_CHANGED,
    text
  }
}

export function addText(text) {
  return {
    type: constants.EDITOR_TEXT_ADDED,
    text
  }
}

export function moveCursor(direction, length = 1) {
  return (dispatch, getState) => {
    dispatch({
      type: constants.EDITOR_MOVE_CURSOR,
      lines: getState().editor.lines,
      direction,
      length
    });
  }
}
