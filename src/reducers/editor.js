import * as ActionTypes from '../constants/ActionTypes';
import { cssGrammar, grammarRegistry } from '../utils/grammars';

const buildBranch = function (branch, token) {
  let { value, scopes } = token;

  // If there is a single scope, it is appended with the value to the current
  // branch.
  if (scopes.length == 0) {
    return [...branch, { value: value }];
  }

  let scope = scopes[0];
  let childToken = { value: value, scopes: scopes.slice(1) };

  // If there are child-scopes, and the current branch has no children,
  // a new branch is built by giving the current branch and initialising the
  // children with an empty array as an attribute.
  if (branch.length == 0) {
    return [
      ...branch,
      { scope: scope, children: buildBranch([], childToken) }
    ]
  }

  let lastBranch = branch[branch.length - 1];

  // If there are child-scopes, and the current branch has children, and
  // the last scope of the branch doesn't match the current scope.
  // a new scope is appended to the existing one and initialise the
  // children with an empty array as an attribute.
  // The same applies if a new line is found.
  if (lastBranch.scope != scope) {
    return [
      ...branch,
      { scope: scope, children: buildBranch([], childToken) }
    ]
  }

  // If there are child-scopes, and the current branch has children, and
  // the last scope of the branch does match the current scope.
  // the current branch's last scope's children are given as an attribute
  return [
    ...branch.slice(0, -1),
    { ...lastBranch, children: buildBranch(lastBranch.children, childToken) }
  ]
}

const shouldNotRender = function(value, values, valueIndex, tokens, tokenIndex) {
  let isEmptyValue = value == '';
  let isNotTheFirstLine = tokenIndex != 0 && valueIndex == 0;
  let isNotTheLastLine = tokenIndex != tokens.length - 1 && valueIndex == values.length - 1;
  return isEmptyValue && (isNotTheFirstLine || isNotTheLastLine);
}

const buildTokenTree = function(text, grammar) {
  let { line, tags } = grammar.tokenizeLine(text);
  let tokens = grammarRegistry.decodeTokens(line, tags);
  let lines = [];
  let rootBranch = [];
  let isNewLine = false;
  tokens.forEach(function(token, tokenIndex) {
    let { value, scopes } = token;
    let splittedValues = value.split("\n");
    splittedValues.forEach(function(splittedValue, valueIndex) {
      if (shouldNotRender(splittedValue,
                          splittedValues, valueIndex,
                          tokens, tokenIndex)) {
        isNewLine = true;
        return;
      }

      if (valueIndex > 0 || isNewLine) {
        lines = [...lines, { node: rootBranch[0] }];
        rootBranch = [];
      }

      rootBranch = buildBranch(rootBranch,
                               { value: splittedValue, scopes: scopes });
      isNewLine = false;
    });
  });

  lines = [...lines, { node: rootBranch[0] }];
  return lines;
}

const editor = function(state = {
  text: '',
  grammar: cssGrammar,
  lines: buildTokenTree('', cssGrammar)
}, action) {
  switch (action.type) {
    case ActionTypes.EDITOR_TEXT_CHANGED:
      let regularExpresionNewLines=/\r\n|\n\r|\n|\r/g;
      let cleanText = action.text.replace(regularExpresionNewLines, "\n");
      return {
        ...state,
        text: cleanText,
        lines: buildTokenTree(cleanText, state.grammar)
      };
    default:
      return state;
  }
}

export default editor