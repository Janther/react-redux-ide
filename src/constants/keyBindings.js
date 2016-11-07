import Moustrap from 'mousetrap';
import { moveCursor } from '../actions/EditorActions';

export const keyBindings = function (dispatch) {
  Mousetrap.bind('up', function() { dispatch(moveCursor('up')); });
  Mousetrap.bind('down', function() { dispatch(moveCursor('down')) });
  Mousetrap.bind('left', function() { dispatch(moveCursor('left')) });
  Mousetrap.bind('right', function() { dispatch(moveCursor('right')) });
};
