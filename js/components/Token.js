import React, { PropTypes } from 'react'
import syntax from './Syntax.less';

const styles = function(scope) {
  return scope.split('.').map(function(className){
    return syntax["syntax--" + className];
  }).join(' ');
}

const Token = ({ tree }) => {
  if (tree.children == null) {
    return (<span>{tree.value}</span>)
  }
  return (
    <span className={styles(tree.scope)}>
      {tree.children.map(function(branch, index) {
        return <Token tree={branch} key={index}/>
      })}
    </span>
  )
};

Token.propTypes = {
  tree: PropTypes.object.isRequired
};

export default Token
