import * as constants from "./constants";
import Mousetrap from "mousetrap";

const regularExpresionNewLines = /\r\n|\n\r|\n|\r/g;

export const editLine = text => (dispatch, getState) => {
  dispatch({
    type: constants.EDITOR_LINE_CHANGED,
    payload: {
      cursor: getState().janther.keyboard.cursor,
      lines: text.split(regularExpresionNewLines)
    }
  });
};

export const registerShortcut = (element, shortcut, actionType, dispatch) => {
  Mousetrap(element).bind(shortcut, e => {
    dispatch((dispatch, getState) => {
      dispatch({
        type: actionType,
        payload: {
          shortcut: shortcut,
          event: e,
          lines: getState().janther.keyboard.lines,
          cursor: getState().janther.keyboard.cursor
        }
      });
    });
  });
};
