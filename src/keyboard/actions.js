import * as constants from './constants';

export function changeText(text) {
  return {
    type: constants.EDITOR_TEXT_CHANGED,
    payload: {
      text
    }
  }
}

export function addText(text) {
  return {
    type: constants.EDITOR_TEXT_ADDED,
    payload: {
      text
    }
  }
}

export function editLine(text) {
  return (dispatch, getState) => {
    dispatch({
      type: constants.EDITOR_LINE_CHANGED,
      payload: {
        cursor: getState().keyboard.cursor,
        text
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
