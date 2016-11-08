import { combineReducers } from 'redux';
import editor from '../editor/reducers/editor';

const rootReducer = combineReducers({
  editor
});

export default rootReducer;
