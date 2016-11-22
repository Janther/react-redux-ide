import * as constants from '../constants';
import { createReducer } from './reducerUtils';

const keepTextarea = (state, action) => {
  const lines = action.payload.lines;
  if (lines.length == 1) {
    return lines[0];
  }
  return clearTextarea();
};

const clearTextarea = () => {
  return '';
};

const textarea = createReducer(
  '',
  ((actionsHandlersMap = {}) => {
    actionsHandlersMap[constants.EDITOR_LINE_CHANGED] = keepTextarea;
    actionsHandlersMap[constants.EDITOR_MOVE_UP_CURSOR] = clearTextarea;
    actionsHandlersMap[constants.EDITOR_MOVE_DOWN_CURSOR] = clearTextarea;
    actionsHandlersMap[constants.EDITOR_MOVE_LEFT_CURSOR] = clearTextarea;
    actionsHandlersMap[constants.EDITOR_MOVE_RIGHT_CURSOR] = clearTextarea;
    actionsHandlersMap[constants.EDITOR_BACKSPACE] = clearTextarea;
    return actionsHandlersMap;
  })()
);

export default textarea;
