import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { updateCharSize } from '../actions/EditorActions';
import DummyLine from '../components/DummyLine';

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMount: (size) => {
      dispatch(updateCharSize(size));
    }
  }
}

const MetaDummyLine = connect(
  mapStateToProps,
  mapDispatchToProps
)(DummyLine);

export default MetaDummyLine;
