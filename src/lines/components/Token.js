import React, { PropTypes } from 'react'
import syntax from './Syntax.less';

const styles = function(scope) {
  return scope.split('.').map(function(className){
    return syntax["syntax--" + className];
  }).join(' ');
}

const Token = ({ node }) => {
  return (
    <span className={styles(node.scope)}>
      {node.children.map(function(childNode, index) {
        if (childNode.children == null) {
          return childNode.value;
        }
        return <Token node={childNode} key={index}/>
      })}
    </span>
  )
};

Token.propTypes = {
  node: PropTypes.object.isRequired
};

export default Token
