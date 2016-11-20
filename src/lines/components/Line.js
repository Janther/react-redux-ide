import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import atomStyles from '../../editor/atomStyles';
import styles from './Line.css';
import Token from './Token';

const Line = ({ line }) => (
  <div className={[styles.line, atomStyles.line].join(' ')}>
    { line.syntax && <Token node={line.node} />}
    {!line.syntax && line.value}
  </div>
)

Line.propTypes = {
  line: PropTypes.object.isRequired
}

export default Line
