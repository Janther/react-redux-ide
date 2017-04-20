import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CursorComponent = ({ x, y, lineHeightInPixels }) => {
  let styles = {
    transform: "translate(" + x + "px, " + y + "px)",
    height: lineHeightInPixels + "px",
    width: "8px"
  }

  return (
    <div className={classNames('cursors')} >
      <div className={classNames('cursor')} style={styles}></div>
    </div>
  )
}

CursorComponent.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
}

export default CursorComponent
