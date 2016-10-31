import React, { PropTypes } from 'react'
import syntax from './Syntax.less';
import { registry } from '../selectors/snipSelector';

const styles = function(scope) {
  return scope.split('.').map(function(className){
    return syntax["syntax--" + className];
  }).join(' ');
}

const Token = ({ value, scopes }) => {
  if (scopes.length == 1) {
    return (<span className={styles(scopes[0])}>{value}</span>)
  } else {
    return (<span className={styles(scopes[0])}>
      <Token value={value} scopes={scopes.slice(1)}/>
    </span>)
  }
};

Token.propTypes = {
  value: PropTypes.string.isRequired,
  scopes: PropTypes.array.isRequired
};

export default Token
