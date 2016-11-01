import React, { PropTypes } from 'react'
import syntax from './Syntax.less';

const styles = function(scope) {
  return scope.split('.').map(function(className){
    return syntax["syntax--" + className];
  }).join(' ');
}

const isLastNode = function(node) {
  return node.children == null;
}

const Token = ({ tree, singleChild }) => {
  // if the current node is at the end of the branch the Token is a simple <span>
  if (isLastNode(tree)) {
    return (<span>{tree.value}</span>)
  }

  // if the current node is a single child and has only 1 child and it happens
  // to be the last node of the branch the Token is a spn with th className of
  // the scope and the value of the child.
  let hasSingleChild = tree.children.length == 1;
  if (singleChild && hasSingleChild && isLastNode(tree.children[0])) {
    return (<span className={styles(tree.scope)}>{tree.children[0].value}</span>)
  }

  // The normal behaviour of the Token is a span with the className of the scope
  // and multiple Tokens as direct children
  return (
    <span className={styles(tree.scope)}>
      {tree.children.map(function(branch, index) {
        return <Token tree={branch} singleChild={hasSingleChild} key={index}/>
      })}
    </span>
  )
};

Token.propTypes = {
  tree: PropTypes.object.isRequired,
  singleChild: PropTypes.bool
};

Token.defaultProps = {
  singleChild: true
}
export default Token
