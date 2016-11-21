import * as constants from '../constants';

const textarea = (state = '', action) => {
  switch (action.type) {
    case constants.EDITOR_LINE_CHANGED:
      if (action.payload.lines.length == 1){
        return action.payload.lines[0];
      } else {
        return '';
      }
    default:
      return state;
  }
};

export default textarea;
