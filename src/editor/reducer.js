import { combineReducers } from 'redux';
import { createReducer } from './utils/reducerUtils';
import * as constants from './constants';
import keyboard from './keyboard/reducer';
import lines from './lines/reducer';

const focusEditor = function(state, action) {
  return {
    ...state,
    selectedEditor: action.selectedEditor
  }
};

const editors = createReducer(
  {
    editors: ['style'],
    selectedEditor: 'style'
  },
  ((actionsHandlersMap = {}) => {
    actionsHandlersMap[constants.EDITOR_FOCUSED] = focusEditor;
    return actionsHandlersMap;
  })()
);


const editorReducer = combineReducers({
  keyboard,
  lines,
  editors
});

export default editorReducer;
