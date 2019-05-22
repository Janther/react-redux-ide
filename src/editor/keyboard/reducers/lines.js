import * as constants from "../constants";
import fromPairs from "lodash/fromPairs";
import createReducer from "../../utils/createReducer";

const newLine = (value = "") => ({
  value: value,
  syntax: false
});

const editLine = (state, action) => {
  const lines = action.lines;
  const { caret, anchor, ltr } = action.cursor;
  const [start, end] = ltr ? [anchor, caret] : [caret, anchor];
  const beforeOffsets = state[start.lineIndex].value.slice(0, start.charIndex);
  const afterOffsets = state[end.lineIndex].value.slice(end.charIndex);

  let updatedLines = (lines.length === 1
    ? [beforeOffsets + lines[0] + afterOffsets]
    : [
        beforeOffsets + lines[0],
        ...lines.slice(1, -1),
        lines[lines.length - 1] + afterOffsets
      ]
  ).map(line => newLine(line));

  state.splice(
    start.lineIndex,
    end.lineIndex - start.lineIndex + 1,
    ...updatedLines
  );
  return state;
};

const backspace = (state, action) => {
  const { caret, anchor } = action.cursor;
  if (
    caret.lineIndex !== anchor.lineIndex ||
    caret.charIndex !== anchor.charIndex
  )
    return editLine(state, { ...action, lines: [""] });

  const { lineIndex, charIndex } = caret;
  if (lineIndex === 0 && charIndex === 0) return state;

  const currentLine = state[lineIndex].value;
  const afterCursor = currentLine.slice(charIndex);
  let lineIndexBeforeCursor = lineIndex;

  if (charIndex === 0) {
    lineIndexBeforeCursor--;
  }

  let updatedLines = (charIndex > 0
    ? [currentLine.slice(0, charIndex - 1) + afterCursor]
    : [state[lineIndex - 1].value + afterCursor]
  ).map(line => newLine(line));

  state.splice(
    lineIndexBeforeCursor,
    lineIndex - lineIndexBeforeCursor + 1,
    ...updatedLines
  );
  return state;
};

const del = (state, action) => {
  const { caret, anchor } = action.cursor;
  if (
    caret.lineIndex !== anchor.lineIndex ||
    caret.charIndex !== anchor.charIndex
  )
    return editLine(state, { ...action, lines: [""] });

  const { lineIndex, charIndex } = caret;
  const currentLine = state[lineIndex].value;

  if (lineIndex === state.length - 1 && charIndex === currentLine.length) {
    return state;
  }

  const beforeCursor = currentLine.slice(0, charIndex);
  let lineIndexafterCursor = lineIndex + 1;

  if (charIndex === currentLine.length) {
    lineIndexafterCursor++;
  }

  let updatedLines = (charIndex < currentLine.length
    ? [beforeCursor + currentLine.slice(charIndex + 1)]
    : [beforeCursor + state[lineIndex + 1].value]
  ).map(line => newLine(line));

  state.splice(
    lineIndex,
    lineIndexafterCursor - lineIndex + 1,
    ...updatedLines
  );
  return state;
};

export default createReducer(
  [newLine()],
  fromPairs([
    [constants.EDITOR_LINE_CHANGED, editLine],
    [constants.EDITOR_BACKSPACE, backspace],
    [constants.EDITOR_DEL, del]
  ])
);
