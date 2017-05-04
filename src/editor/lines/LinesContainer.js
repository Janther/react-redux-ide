// import React from 'react';
import { connect } from 'react-redux';
import LinesComponent from './LinesComponent';
import { updateCharSize } from './actions';

const mapStateToProps = ({ janther: editor }) => ({
  lines: editor.keyboard.lines,
  cursorLine: editor.keyboard.cursor.lineIndex,
  invalidCharSize: editor.lines.invalidCharSize,
  lineHeightInPixels: editor.lines.charSize.lineHeightInPixels
});

const mapDispatchToProps = (dispatch) => ({
  updateCharSize(size) {
    dispatch(updateCharSize(size));
  }
});

const LinesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LinesComponent)

export default LinesContainer
