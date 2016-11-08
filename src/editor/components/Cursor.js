import React, { PropTypes } from 'react'
import atomStyles from './atomStyles';

const Cursor = ({ x, y }) => {
  let styles = {
    transform: "translate(" + x + "px, " + y + "px)",
    height: "21px",
    width: "8px"
  }

  return (
    <div className={atomStyles.cursors} >
      <div className={atomStyles.cursor} style={styles}></div>
    </div>
  )
}

Cursor.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
}

export default Cursor
