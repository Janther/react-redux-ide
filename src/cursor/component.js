import React, { PropTypes } from 'react'
import stylesheets from '../stylesheets';

const CursorComponent = ({ x, y }) => {
  let styles = {
    transform: "translate(" + x + "px, " + y + "px)",
    height: "21px",
    width: "8px"
  }

  return (
    <div className={stylesheets.cursors} >
      <div className={stylesheets.cursor} style={styles}></div>
    </div>
  )
}

CursorComponent.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
}

export default CursorComponent
