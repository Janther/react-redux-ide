import React, { PropTypes } from 'react'
import styles from './Editor.css';
import { registry } from '../selectors/snipSelector';

const Token = ({ value, scopes }) => {
  if (scopes.length == 1) {
    return (<span className={scopes[0]}>{value}</span>)
  } else {
    return (<span className={scopes[0]}>
      <Token value={value} scopes={scopes.slice(1)}/>
    </span>)
  }
};

Token.propTypes = {
  value: PropTypes.string.isRequired,
  scopes: PropTypes.array.isRequired
};

export default Token
