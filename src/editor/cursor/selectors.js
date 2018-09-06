import { createSelector } from "reselect";
// import ratioForCharacter from './text_utils'

const cursorSelector = editor => editor.keyboard.cursor;
const charSizeSelector = editor => editor.lines.charSize;

export const cursorX = createSelector(
  cursorSelector,
  charSizeSelector,
  (cursor, charSize) => Math.floor(cursor.charIndex * charSize.defaultCharWidth)
);

export const cursorY = createSelector(
  cursorSelector,
  charSizeSelector,
  (cursor, charSize) =>
    Math.floor(cursor.lineIndex * charSize.lineHeightInPixels)
);
