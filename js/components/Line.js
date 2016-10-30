import React, { PropTypes } from 'react'
import styles from './Editor.css';
import { grammar, registry } from '../selectors/snipSelector';
import Token from './Token';

const Line = ({ text }) => {
  let { line, tags } = grammar.tokenizeLine(text);
  let tokens = registry.decodeTokens(line, tags);
  return (
    <div className={styles.line}>
      {tokens.map(function(token, index) {
        let { value, scopes } = token;
        return (<Token value={value} scopes={scopes} key={index}/>)
      })}
    </div>
  )
}

Line.propTypes = {
  text: PropTypes.string.isRequired
}


export default Line
