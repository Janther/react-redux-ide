import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { cursorX, cursorY } from './selectors';

export const Cursor = ({ x, y, lineHeightInPixels }) => {
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

Cursor.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
}

const mapStateToProps = ({ janther: editor }) => ({
  x: cursorX(editor),
  y: cursorY(editor),
  lineHeightInPixels: editor.lines.charSize.lineHeightInPixels
});

export default connect(
  mapStateToProps
)(Cursor)
