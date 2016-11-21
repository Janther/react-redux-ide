import { combineReducers } from 'redux';
import textarea from './reducers/textarea';
import commands from './reducers/commands';
import lines from './reducers/lines';
import cursor from './reducers/cursor';

const keyboard = combineReducers({
  textarea,
  commands,
  lines,
  cursor
});

export default keyboard;
