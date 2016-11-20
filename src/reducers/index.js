import { combineReducers } from 'redux';
import keyboard from '../keyboard/reducer';
import lines from '../lines/reducer';

const rootReducer = combineReducers({
  keyboard,
  lines
});

export default rootReducer;
