import constants from '../constants';

export function changeText(text) {
  return {
    type: constants.EDITOR_TEXT_CHANGED,
    text
  }
}

export function addText(text) {
  return {
    type: constants.EDITOR_TEXT_ADDED,
    text
  }
}
