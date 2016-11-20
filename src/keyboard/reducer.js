import { combineReducers } from 'redux';
import text from './reducers/text';
import lines from './reducers/lines';
import cursor from './reducers/cursor';

const keyboard = combineReducers({
  text,
  lines,
  cursor
});

export default keyboard;
