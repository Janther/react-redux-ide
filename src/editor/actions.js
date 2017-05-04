import * as constants from './constants';

export const selectEditor = (id) => ({
  type: constants.EDITOR_FOCUSED,
  payload: {
    selectedEditor: id
  }
})
