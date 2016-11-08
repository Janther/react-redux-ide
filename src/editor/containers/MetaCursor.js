import React from 'react';
import { connect } from 'react-redux';
import Cursor from '../components/Cursor';
import { cursorX, cursorY } from '../selectors/cursor';

const mapStateToProps = (state) => {
  return {
    x: cursorX(state),
    y: cursorY(state)
  }
}

const MetaCursor = connect(
  mapStateToProps
)(Cursor)

export default MetaCursor
