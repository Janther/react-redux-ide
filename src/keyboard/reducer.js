import { combineReducers } from 'redux';
import commands from './reducers/commands';
import lines from './reducers/lines';
import cursor from './reducers/cursor';

const keyboard = combineReducers({
  commands,
  lines,
  cursor
});

export default keyboard;
