import { combineReducers } from 'redux';
import { createReducer } from './utils/reducerUtils';
import * as constants from './constants';
import keyboard from './keyboard/reducer';
import lines from './lines/reducer';
import fromPairs from 'lodash.frompairs';

const focusEditor = function(state, action) ({
  ...state,
  selectedEditor: action.selectedEditor
});

const editors = createReducer(
  {
    editors: ['style'],
    selectedEditor: 'style'
  },
  fromPairs([
    [constants.EDITOR_FOCUSED, focusEditor]
  ])
);

const editorReducer = combineReducers({
  keyboard,
  lines,
  editors
});

export default editorReducer;
