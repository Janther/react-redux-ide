import { createSelector } from "reselect";
import stringLengthInScreen from "../utils/stringLengthInScreen";

const lineIndexSelector = editor => editor.keyboard.cursor.lineIndex;
const charIndexSelector = editor => editor.keyboard.cursor.charIndex;
const charSizeSelector = editor => editor.lines.charSize;
const linesSelector = editor => editor.keyboard.lines;

const cursorLineSelector = createSelector(
  lineIndexSelector,
  linesSelector,
  (lineIndex, lines) => lines[lineIndex].value
);

const charsBeforeCursorSelector = createSelector(
  charIndexSelector,
  cursorLineSelector,
  (charIndex, line) => line.substr(0, charIndex)
);

export const cursorX = createSelector(
  charsBeforeCursorSelector,
  charSizeSelector,
  (charsBeforeCursor, charSize) =>
    stringLengthInScreen(charsBeforeCursor, charSize)
);

export const cursorY = createSelector(
  lineIndexSelector,
  charSizeSelector,
  (lineIndex, charSize) => Math.floor(lineIndex * charSize.lineHeightInPixels)
);
