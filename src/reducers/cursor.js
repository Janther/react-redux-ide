import * as ActionTypes from '../constants/ActionTypes';

const cursor = function(state = {
  line: 0,
  position: 0
}, action, lines) {
  switch (action.type) {
    case ActionTypes.EDITOR_MOVE_CURSOR:
      switch (action.direction) {
        case 'up':
          return {
            ...state,
            line: Math.max(0, state.line - 1)
          }
        case 'down':
          return {
            ...state,
            line: Math.min(lines.length - 1, state.line + 1)
          }
        case 'left':
          return {
            ...state,
            position: Math.max(0, state.position - 1)
          }
        case 'right':
          return {
            ...state,
            position: state.position + 1
          }
      }
    default:
      return state;
  }
}

export default cursor
