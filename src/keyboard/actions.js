import * as constants from './constants';

const regularExpresionNewLines=/\r\n|\n\r|\n|\r/g;

export function editLine(text) {
  return (dispatch, getState) => {
    dispatch({
      type: constants.EDITOR_LINE_CHANGED,
      payload: {
        cursor: getState().keyboard.cursor,
        lines: text.split(regularExpresionNewLines)
      }
    });
  }
}

export function moveCursor(direction, length = 1) {
  return (dispatch, getState) => {
    dispatch({
      type: constants.EDITOR_MOVE_CURSOR,
      payload: {
        lines: getState().keyboard.lines,
        direction,
        length
      }
    });
  }
}
