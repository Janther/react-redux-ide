import * as ActionTypes from '../constants/ActionTypes';

const text = function(state = '', action) {
  switch (action.type) {
    case ActionTypes.EDITOR_TEXT_CHANGED:
      return action.text
    default:
      return state;
  }
}

export default text
