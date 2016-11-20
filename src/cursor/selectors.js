import { createSelector } from 'reselect'
import { isKoreanCharacter,
         isHalfWidthCharacter,
         isDoubleWidthCharacter } from './text_utils'

const cursorSelector = state => state.keyboard.cursor;
const charSizeSelector = state => state.lines.charSize;

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
  charSizeSelector,
  (cursor, charSize) => Math.floor(cursor.char * charSize.defaultCharWidth)
)

export const cursorY = createSelector(
  cursorSelector,
  charSizeSelector,
  (cursor, charSize) => Math.floor(cursor.line * charSize.lineHeightInPixels)
)
