// import React from 'react';
import { connect } from 'react-redux';
import LinesComponent from './LinesComponent';
import { updateCharSize } from './actions';

const mapStateToProps = (state) => {
  return {
    lines: state.janther.keyboard.lines,
    cursorLine: state.janther.keyboard.cursor.lineIndex,
    invalidCharSize: state.janther.lines.invalidCharSize,
    lineHeightInPixels: state.janther.lines.charSize.lineHeightInPixels
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCharSize: (size) => {
      dispatch(updateCharSize(size));
    }
  }
}

const LinesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LinesComponent)

export default LinesContainer
