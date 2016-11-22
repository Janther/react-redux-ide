import * as constants from '../constants';

const textarea = (state = '', action) => {
  switch (action.type) {
    case constants.EDITOR_LINE_CHANGED:
      if (action.payload.lines.length == 1) {
        return action.payload.lines[0];
      }
    case constants.EDITOR_MOVE_UP_CURSOR:
    case constants.EDITOR_MOVE_DOWN_CURSOR:
    case constants.EDITOR_MOVE_LEFT_CURSOR:
    case constants.EDITOR_MOVE_RIGHT_CURSOR:
      return '';
    default:
      return state;
  }
};

export default textarea;
