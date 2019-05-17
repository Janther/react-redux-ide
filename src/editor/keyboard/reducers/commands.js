import * as constants from "../constants";

const commands = (
  state = [
    { shortcut: "return", actionType: constants.EDITOR_NEW_LINE },
    { shortcut: "up", actionType: constants.EDITOR_MOVE_UP_CURSOR },
    { shortcut: "down", actionType: constants.EDITOR_MOVE_DOWN_CURSOR },
    { shortcut: "left", actionType: constants.EDITOR_MOVE_LEFT_CURSOR },
    { shortcut: "right", actionType: constants.EDITOR_MOVE_RIGHT_CURSOR },
    { shortcut: "backspace", actionType: constants.EDITOR_BACKSPACE },
    { shortcut: "shift+up", actionType: constants.EDITOR_SELECT_UP },
    { shortcut: "shift+down", actionType: constants.EDITOR_SELECT_DOWN },
    { shortcut: "shift+left", actionType: constants.EDITOR_SELECT_LEFT },
    { shortcut: "shift+right", actionType: constants.EDITOR_SELECT_RIGHT }
  ],
  action
) => state;

export default commands;
