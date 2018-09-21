import * as constants from "../constants";
import fromPairs from "lodash/fromPairs";
import { cssGrammar, grammarRegistry } from "../../utils/grammars";
import { createReducer } from "../../utils/reducerUtils";
import buildBranch from "./utils/buildBranch";

const newLine = (value = "") => ({
  value: value,
  syntax: false,
  node: {},
  initialRuleStack: null,
  finalRuleStack: null,
  initialScopes: [],
  finalScopes: []
});

const tokenizeLines = (result, inputLine, index, lines) => {
  let { finalRuleStack: ruleStack, finalScopes: scopes } =
    index === 0 ? newLine() : result[index - 1];
  let initialRuleStack = ruleStack === null ? null : [...ruleStack];
  let initialScopes = [...scopes];
  let tags;
  let line = inputLine.value;
  ({ line, tags, ruleStack } = cssGrammar.tokenizeLine(
    line,
    ruleStack === null ? null : [...ruleStack],
    index === 0,
    false, // compatibilityMode
    index === lines.length - 1
  ));

  let rootBranch = [];
  grammarRegistry
    .decodeTokens(line, tags, scopes)
    .forEach(token => (rootBranch = buildBranch(rootBranch, token)));

  result.push({
    ...inputLine,
    syntax: true,
    node: rootBranch[0],
    finalRuleStack: ruleStack === null ? null : [...ruleStack],
    finalScopes: [...scopes],
    initialRuleStack,
    initialScopes
  });
  return result;
};

const editLine = (state, action) => {
  const lines = action.lines;
  const { lineIndex, startOffset, endOffset } = action.cursor;
  const currentLine = state[lineIndex].value;
  const beforeOffsets = currentLine.slice(0, startOffset);
  const afterOffsets = currentLine.slice(endOffset);

  let updatedLines = (lines.length === 1
    ? [beforeOffsets + lines[0] + afterOffsets]
    : [
        beforeOffsets + lines[0],
        ...lines.slice(1, -1),
        lines[lines.length - 1] + afterOffsets
      ]
  ).map(line => newLine(line));

  return [
    ...state.slice(0, lineIndex),
    ...updatedLines,
    ...state.slice(lineIndex + 1)
  ].reduce(tokenizeLines, []);
};

const backspace = (state, action) => {
  const { lineIndex, charIndex } = action.cursor;
  if (lineIndex === 0 && charIndex === 0) return state;

  const currentLine = state[lineIndex].value;
  const afterCursor = currentLine.slice(charIndex);
  let lineIndexBeforeCursor = lineIndex;

  if (charIndex === 0) {
    lineIndexBeforeCursor--;
  }

  let updatedLines = (charIndex > 0
    ? [currentLine.slice(0, charIndex - 1) + afterCursor]
    : (updatedLines = [state[lineIndex - 1].value + afterCursor])
  ).map(line => newLine(line));

  return [
    ...state.slice(0, lineIndexBeforeCursor),
    ...updatedLines,
    ...state.slice(lineIndex + 1)
  ].reduce(tokenizeLines, []);
};

const del = (state, action) => {
  const { lineIndex, charIndex } = action.cursor;
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

  return [
    ...state.slice(0, lineIndex),
    ...updatedLines,
    ...state.slice(lineIndexafterCursor)
  ];
};

export default createReducer(
  [newLine()],
  fromPairs([
    [constants.EDITOR_LINE_CHANGED, editLine],
    [constants.EDITOR_BACKSPACE, backspace],
    [constants.EDITOR_DEL, del]
  ])
);
