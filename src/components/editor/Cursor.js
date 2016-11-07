import React, { PropTypes } from 'react'
import atom from '../../../atom-packages/atom/static/atom.less';

const Cursor = ({ x, y }) => {
  let styles = {
    transform: "translate(" + x + "px, " + y + "px)",
    height: "21px",
    width: "8px"
  }

  return (
    <div className={atom.cursors} >
      <div className={atom.cursor} style={styles}></div>
    </div>
  )
}

Cursor.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
}

export default Cursor
