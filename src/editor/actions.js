import * as editorActions from './actions/editorActions';
import * as cursorActions from './actions/cursorActions';
import * as keyboardActions from './actions/keyboardActions';

const actions = { ...editorActions, ...cursorActions, ...keyboardActions };
export default actions;
