import * as ActionTypes from '../constants/ActionTypes';

const cursor = function(state = {
  line: 0,
  char: 0,
  invalidCharSize: true,
  charSize: {
    defaultCharWidth: 0,
    doubleWidthCharWidth: 0,
    halfWidthCharWidth: 0,
    koreanCharWidth: 0,
    lineHeightInPixels: 0
  }
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
            char: Math.max(0, state.char - 1)
          }
        case 'right':
          return {
            ...state,
            char: state.char + 1
          }
      }
    case ActionTypes.EDITOR_UPDATE_CHAR_SIZE:
      return {
        ...state,
        invalidCharSize: false,
        charSize: action.size
      }
    case ActionTypes.EDITOR_INVALIDATE_CHAR_SIZE:
      return {
        ...state,
        invalidCharSize: true
      }
    default:
      return state;
  }
}

export default cursor
