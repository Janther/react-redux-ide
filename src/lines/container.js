import React from 'react';
import { connect } from 'react-redux';
import LinesComponent from './component';
import { updateCharSize } from './actions';

const mapStateToProps = (state) => {
  return {
    lines: state.keyboard.lines,
    invalidCharSize: state.keyboard.cursor.invalidCharSize
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
