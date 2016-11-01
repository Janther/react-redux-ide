import React, { PropTypes } from 'react'
import styles from './Editor.css';
import Token from './Token';

const Line = ({ tree }) => (
  <div className={styles.line}>
    <Token tree={tree} />
  </div>
)

Line.propTypes = {
  tree: PropTypes.object.isRequired
}

export default Line
