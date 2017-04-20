import * as constants from './constants';

export function selectEditor(id) {
  return {
    type: constants.EDITOR_FOCUSED,
    payload: {
      selectedEditor: id
    }
  };
}
