import { EDITOR_TEXT_CHANGED,
         EDITOR_MOVE_CURSOR,
         EDITOR_UPDATE_CHAR_SIZE,
         EDITOR_INVALIDATE_CHAR_SIZE } from '../constants/ActionTypes';

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

export function updateCharSize(size) {
  return {
    type: EDITOR_UPDATE_CHAR_SIZE,
    size
  }
}

export function invalidateCharSize() {
  return {
    type: EDITOR_INVALIDATE_CHAR_SIZE
  }
}
