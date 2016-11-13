import * as ActionTypes from '../constants/ActionTypes';
import { cssGrammar, grammarRegistry } from '../utils/grammars';
import { updateObject, insertItemInArray, updateItemInArray } from './reducerUtils';
import cursor from './cursor';

const buildBranch = function (branch, token) {
  let { value, scopes } = token;

  // If there is a single scope, it is appended with the value to the current
  // branch.
  if (scopes.length == 0) {
    return insertItemInArray(branch, branch.length, { value: value })
  }

  let scope = scopes[0];
  let childToken = { value: value, scopes: scopes.slice(1) };

  // If there are child-scopes, and the current branch has no children,
  // a new branch is built by giving the current branch and initialising the
  // children with an empty array as an attribute.
  if (branch.length == 0) {
    return insertItemInArray(branch, branch.length, { scope: scope, children: buildBranch([], childToken) })
  }

  let lastBranch = branch[branch.length - 1];

  // If there are child-scopes, and the current branch has children, and
  // the last scope of the branch doesn't match the current scope.
  // a new scope is appended to the existing one and initialise the
  // children with an empty array as an attribute.
  // The same applies if a new line is found.
  if (lastBranch.scope != scope) {
    return insertItemInArray(branch, branch.length, { scope: scope, children: buildBranch([], childToken) })
  }

  // If there are child-scopes, and the current branch has children, and
  // the last scope of the branch does match the current scope.
  // the current branch's last scope's children are given as an attribute
  return updateItemInArray(branch, branch.length - 1, (node) => {
    return updateObject(node, { children: buildBranch(node.children, childToken) });
  });
}

const textIntoLines = function(text, grammar) {
  const tokenizedLines = grammar.tokenizeLines(text);
  const lines = tokenizedLines.map(function(tokens, index) {
    if (index > 1000) {
      line = tokens.map(function(token) {
        return token.value;
      }).join('');
      return { node: { scope: 'source', children: [ { value: line } ] },
               line: line }
    }
    let rootBranch = [];
    let line = tokens.map(function(token) {
      rootBranch = buildBranch(rootBranch, token);
      return token.value;
    }).join('');

    return { node: rootBranch[0], line: line };
  });
  return lines;
}

const editor = function(state = {
  text: '',
  grammar: cssGrammar,
  lines: textIntoLines('', cssGrammar),
  cursor: cursor(undefined, {})
}, action) {
  switch (action.type) {
    case ActionTypes.EDITOR_TEXT_CHANGED:
      return updateObject(
        state,
        { text: action.text,
          lines: textIntoLines(action.text, state.grammar) }
      );
    case ActionTypes.EDITOR_MOVE_CURSOR:
    case ActionTypes.EDITOR_UPDATE_CHAR_SIZE:
    case ActionTypes.EDITOR_INVALIDATE_CHAR_SIZE:
      return updateObject(
        state,
        { cursor: cursor(state.cursor, action) }
      );
    default:
      return state;
  }
}

export default editor
