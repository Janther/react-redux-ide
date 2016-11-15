import * as editorActionTypes from './constants/editorActionTypes';
import * as cursorActionTypes from './constants/cursorActionTypes';
import * as keyboardActionTypes from './constants/keyboardActionTypes';

const constants = { ...editorActionTypes, ...cursorActionTypes, ...keyboardActionTypes };
export default constants;
