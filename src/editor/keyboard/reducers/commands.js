import * as constants from "../constants";

const commands = function(
  state = [
    { shortcut: "return", actionType: constants.EDITOR_NEW_LINE },
    { shortcut: "up", actionType: constants.EDITOR_MOVE_UP_CURSOR },
    { shortcut: "down", actionType: constants.EDITOR_MOVE_DOWN_CURSOR },
    { shortcut: "left", actionType: constants.EDITOR_MOVE_LEFT_CURSOR },
    { shortcut: "right", actionType: constants.EDITOR_MOVE_RIGHT_CURSOR },
    { shortcut: "backspace", actionType: constants.EDITOR_BACKSPACE }
  ],
  action
) {
  switch (action.type) {
    default:
      return state;
  }
};

export default commands;
