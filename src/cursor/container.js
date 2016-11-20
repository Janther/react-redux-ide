import React from 'react';
import { connect } from 'react-redux';
import CursorComponent from './component';
import { cursorX, cursorY } from './selectors';

const mapStateToProps = (state) => {
  return {
    x: cursorX(state),
    y: cursorY(state)
  }
}

const CursorContainer = connect(
  mapStateToProps
)(CursorComponent)

export default CursorContainer
