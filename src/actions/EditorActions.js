import { EDITOR_TEXT_CHANGED, EDITOR_MOVE_CURSOR } from '../constants/ActionTypes';

export function changeText(text) {
  return {
    type: EDITOR_TEXT_CHANGED,
    text
  }
}

export function moveCursor(direction) {
  return {
    type: EDITOR_MOVE_CURSOR,
    direction
  }
}
