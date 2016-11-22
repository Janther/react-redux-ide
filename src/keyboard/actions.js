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
