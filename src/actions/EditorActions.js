import { EDITOR_TEXT_CHANGED } from '../constants/ActionTypes';

export function changeText(text) {
  return {
    type: EDITOR_TEXT_CHANGED,
    text
  }
}
