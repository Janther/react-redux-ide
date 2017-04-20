import * as constants from './constants';

export function updateCharSize(size) {
  return {
    type: constants.EDITOR_UPDATE_CHAR_SIZE,
    size
  }
}

export function invalidateCharSize() {
  return {
    type: constants.EDITOR_INVALIDATE_CHAR_SIZE
  }
}
