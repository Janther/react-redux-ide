import React from 'react';
import { connect } from 'react-redux';
import GutterComponent from './component';

const mapStateToProps = (state) => {
  return {
    lines: state.keyboard.lines
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const GutterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GutterComponent)

export default GutterContainer
