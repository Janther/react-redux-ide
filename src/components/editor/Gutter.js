import React, { PropTypes } from 'react'
import styles from './index.less';
import Token from './Token';

const Gutter = ({ lines }) => (
    <div className={styles.gutter} />
)

Gutter.propTypes = {
  lines: PropTypes.array.isRequired
}

export default Gutter
