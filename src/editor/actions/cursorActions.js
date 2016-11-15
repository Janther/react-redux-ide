import constants from '../constants';

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
