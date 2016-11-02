import React, { PropTypes } from 'react'
import styles from './index.css';
import Token from './Token';

const Line = ({ line }) => (
  <div className={styles.line}>
    <Token node={line.node} />
  </div>
)

Line.propTypes = {
  line: PropTypes.object.isRequired
}

export default Line
