import {
  updateObject,
  insertItemInArray,
  updateItemInArray
} from "../../../utils/reducerUtils";

const buildBranch = (branch, token) => {
  let { value, scopes } = token;

  // If there is a single scope, it is appended with the value to the current
  // branch.
  if (scopes.length === 0) {
    return insertItemInArray(branch, branch.length, { value: value });
  }

  let scope = scopes[0];
  let childToken = { value: value, scopes: scopes.slice(1) };

  // If there are child-scopes, and the current branch has no children,
  // a new branch is built by giving the current branch and initialising the
  // children with an empty array as an attribute.
  if (branch.length === 0) {
    return insertItemInArray(branch, branch.length, {
      scope: scope,
      children: buildBranch([], childToken)
    });
  }

  let lastBranch = branch[branch.length - 1];

  // If there are child-scopes, and the current branch has children, and
  // the last scope of the branch doesn't match the current scope.
  // a new scope is appended to the existing one and initialise the
  // children with an empty array as an attribute.
  // The same applies if a new line is found.
  if (lastBranch.scope !== scope) {
    return insertItemInArray(branch, branch.length, {
      scope: scope,
      children: buildBranch([], childToken)
    });
  }

  // If there are child-scopes, and the current branch has children, and
  // the last scope of the branch does match the current scope.
  // the current branch's last scope's children are given as an attribute
  return updateItemInArray(branch, branch.length - 1, node =>
    updateObject(node, {
      children: buildBranch(node.children, childToken)
    })
  );
};

export default buildBranch;
