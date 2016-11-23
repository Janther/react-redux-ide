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

export function registerShortcut(element, shortcut, actionType, dispatch) {
  Mousetrap(element).bind(shortcut, function(e) {
    dispatch((dispatch, getState) => {
      dispatch({
        type: actionType,
        payload: {
          shortcut: shortcut,
          event: e,
          lines: getState().keyboard.lines,
          cursor: getState().keyboard.cursor
        }
      });
    });
  });
};
