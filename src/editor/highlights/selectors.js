import { createSelector } from "reselect";
import stringLengthInScreen from "../utils/stringLengthInScreen";

const caretSelector = editor => editor.keyboard.cursor.caret;
const anchorSelector = editor => editor.keyboard.cursor.anchor;
const ltrSelector = editor => editor.keyboard.cursor.ltr;
const charSizeSelector = editor => editor.lines.charSize;
const linesSelector = editor => editor.keyboard.lines;

const orderedSelector = createSelector(
  caretSelector,
  anchorSelector,
  ltrSelector,
  (caret, anchor, ltr) => (ltr ? [anchor, caret] : [caret, anchor])
);

const getCharsBefore = (cursor, lines) =>
  lines[cursor.lineIndex].value.substr(0, cursor.charIndex);

const getX = (charsBefore, charSize) =>
  stringLengthInScreen(charsBefore, charSize);

const orderedWithXSelector = createSelector(
  orderedSelector,
  linesSelector,
  charSizeSelector,
  ([start, end], lines, charSize) => {
    return [
      { ...start, x: getX(getCharsBefore(start, lines), charSize) },
      { ...end, x: getX(getCharsBefore(end, lines), charSize) }
    ];
  }
);

export const regions = createSelector(
  orderedWithXSelector,
  ([start, end]) => {
    let result = [];

    if (start.charIndex === end.charIndex && start.lineIndex === end.lineIndex)
      return result;

    for (let i = start.lineIndex; i <= end.lineIndex; i++) {
      result.push({
        lineNumber: i,
        lineStart: start.lineIndex === i ? start.x : 0,
        lineEnd: end.lineIndex === i ? end.x : Infinity
      });
    }
    return result;
  }
);
