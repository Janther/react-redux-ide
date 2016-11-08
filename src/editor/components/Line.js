import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import atomStyles from './atomStyles';
import styles from './index.css';
import Token from './Token';

const Line = ({ line }) => (
  <div className={[styles.line, atomStyles.line].join(' ')}>
    <Token node={line.node} />
  </div>
)

Line.propTypes = {
  line: PropTypes.object.isRequired
}

export default Line
