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

const Token = ({ node, singleChild }) => {
  // if the current node is at the end of the branch the Token is a simple <span>
  if (isLastNode(node)) {
    return (<span>{node.value}</span>)
  }

  // if the current node is a single child and has only 1 child and it happens
  // to be the last node of the branch the Token is a spn with th className of
  // the scope and the value of the child.
  let hasSingleChild = node.children.length == 1;
  if (singleChild && hasSingleChild && isLastNode(node.children[0])) {
    return (<span className={styles(node.scope)}>{node.children[0].value}</span>)
  }

  // The normal behaviour of the Token is a span with the className of the scope
  // and multiple Tokens as direct children
  return (
    <span className={styles(node.scope)}>
      {node.children.map(function(childNode, index) {
        return <Token node={childNode} singleChild={hasSingleChild} key={index}/>
      })}
    </span>
  )
};

Token.propTypes = {
  node: PropTypes.object.isRequired,
  singleChild: PropTypes.bool
};

Token.defaultProps = {
  singleChild: true
}
export default Token
