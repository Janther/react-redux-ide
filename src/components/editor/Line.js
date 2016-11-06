import React, { PropTypes } from 'react'
import styles from './index.css';
import atom from '../../../atom-packages/atom/static/atom.less';
import Token from './Token';

const Line = ({ line }) => (
  <div className={[styles.line, atom.line].join(' ')}>
    <Token node={line.node} />
  </div>
)

Line.propTypes = {
  line: PropTypes.object.isRequired
}

export default Line
