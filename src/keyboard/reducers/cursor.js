import * as constants from '../constants';
import { updateObject, insertItemInArray, updateItemInArray } from './reducerUtils';

const cursor = function(state = {
  line: 0,
  char: 0,
  startOffset: 0,
  endOffset: 0
}, action) {
  switch (action.type) {
    case constants.EDITOR_MOVE_CURSOR:
      switch (action.payload.direction) {
        case 'up':
          return updateObject(
            state,
            { line: Math.max(0, state.line - 1) }
          )
        case 'down':
          return updateObject(
            state,
            { line: Math.min(action.payload.lines.length - 1, state.line + 1) }
          )
        case 'left':
          return updateObject(
            state,
            { char: Math.max(0, state.char - 1) }
          )
        case 'right':
          return updateObject(
            state,
            { char: state.char + 1 }
          )
      }
    case constants.EDITOR_LINE_CHANGED:
      return updateObject(
        state,
        { endOffset: state.startOffset + action.payload.text.length }
      )

    default:
      return state;
  }
};

export default cursor;
