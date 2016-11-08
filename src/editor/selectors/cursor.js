import { createSelector } from 'reselect'
import { isKoreanCharacter,
         isHalfWidthCharacter,
         isDoubleWidthCharacter } from '../utils/text_utils'

const cursorSelector = state => state.editor.cursor;

// ratioForCharacter: (character) ->
//   if isKoreanCharacter(character)
//     @getKoreanCharWidth() / @getDefaultCharWidth()
//   else if isHalfWidthCharacter(character)
//     @getHalfWidthCharWidth() / @getDefaultCharWidth()
//   else if isDoubleWidthCharacter(character)
//     @getDoubleWidthCharWidth() / @getDefaultCharWidth()
//   else
//     1

export const cursorX = createSelector(
  cursorSelector,
  cursor => Math.floor(cursor.char * cursor.charSize.defaultCharWidth)
)

export const cursorY = createSelector(
  cursorSelector,
  cursor => cursor.line * cursor.charSize.lineHeightInPixels
)
