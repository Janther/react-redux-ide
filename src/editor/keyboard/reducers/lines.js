import * as constants from "../constants";
import fromPairs from "lodash/fromPairs";
import { cssGrammar, grammarRegistry } from "../../utils/grammars";
import { createReducer } from "../../utils/reducerUtils";
import buildBranch from "./utils/buildBranch";

const tokenizeLines = (updatedLines, lineIndex, state) => {
  let ruleStack =
    lineIndex === 0 ? null : [...state[lineIndex - 1].finalRuleStack];
  let scopes = lineIndex === 0 ? [] : [...state[lineIndex - 1].finalScopes];

  return updatedLines.map((line, index) => {
    let initialRuleStack = ruleStack === null ? null : [...ruleStack];
    let initialScopes = [...scopes];
    let tags;
    ({ line, tags, ruleStack } = cssGrammar.tokenizeLine(
      line,
      initialRuleStack,
      lineIndex === 0 && index === 0,
      false, // compatibilityMode
      lineIndex === state.length - 1 && index === updatedLines.length - 1
    ));

    let rootBranch = [];
    grammarRegistry
      .decodeTokens(line, tags, scopes)
      .forEach(token => (rootBranch = buildBranch(rootBranch, token)));

    return {
      value: line,
      syntax: true,
      node: rootBranch[0],
      initialRuleStack: initialRuleStack,
      finalRuleStack: ruleStack === null ? null : [...ruleStack],
      initialScopes: initialScopes,
      finalScopes: [...scopes]
    };
  });
};

const editLine = (state, action) => {
  const lines = action.lines;
  const { lineIndex, startOffset, endOffset } = action.cursor;
  const currentLine = state[lineIndex].value;
  const beforeOffsets = currentLine.slice(0, startOffset);
  const afterOffsets = currentLine.slice(endOffset);

  let updatedLines;

  if (lines.length === 1) {
    updatedLines = [beforeOffsets + lines[0] + afterOffsets];
  } else {
    updatedLines = [
      beforeOffsets + lines[0],
      ...lines.slice(1, -1),
      lines[lines.length - 1] + afterOffsets
    ];
  }

  updatedLines = tokenizeLines(updatedLines, lineIndex, state);

  return [
    ...state.slice(0, lineIndex),
    ...updatedLines,
    ...state.slice(lineIndex + 1)
  ];
};

const backspace = (state, action) => {
  const { lineIndex, charIndex } = action.cursor;
  if (lineIndex === 0 && charIndex === 0) return state;

  const currentLine = state[lineIndex].value;
  const afterCursor = currentLine.slice(charIndex);
  let lineIndexBeforeCursor = lineIndex;

  let updatedLines;

  if (charIndex > 0) {
    updatedLines = [currentLine.slice(0, charIndex - 1) + afterCursor];
  } else {
    lineIndexBeforeCursor--;
    updatedLines = [state[lineIndex - 1].value + afterCursor];
  }

  updatedLines = tokenizeLines(updatedLines, lineIndexBeforeCursor, state);

  return [
    ...state.slice(0, lineIndexBeforeCursor),
    ...updatedLines,
    ...state.slice(lineIndex + 1)
  ];
};

const del = (state, action) => {
  const { lineIndex, charIndex } = action.cursor;
  const currentLine = state[lineIndex].value;

  if (lineIndex === state.length - 1 && charIndex === currentLine.length) {
    return state;
  }

  const beforeCursor = currentLine.slice(0, charIndex);
  let lineIndexafterCursor = lineIndex + 1;

  let updatedLines;

  if (charIndex < currentLine.length) {
    updatedLines = [beforeCursor + currentLine.slice(charIndex + 1)];
  } else {
    lineIndexafterCursor++;
    updatedLines = [beforeCursor + state[lineIndex + 1].value];
  }

  updatedLines = tokenizeLines(updatedLines, lineIndex, state);

  return [
    ...state.slice(0, lineIndex),
    ...updatedLines,
    ...state.slice(lineIndexafterCursor)
  ];
};

export default createReducer(
  [
    {
      value: "",
      syntax: false,
      node: {},
      initialRuleStack: null,
      finalRuleStack: null,
      initialScopes: [],
      finalScopes: []
    }
  ],
  fromPairs([
    [constants.EDITOR_LINE_CHANGED, editLine],
    [constants.EDITOR_BACKSPACE, backspace],
    [constants.EDITOR_DEL, del]
  ])
);
