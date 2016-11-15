import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import actions from '../actions';
import { DummyLine } from '../components';

const { updateCharSize } = actions;

const mapDispatchToProps = (dispatch) => {
  return {
    onMount: (size) => {
      dispatch(updateCharSize(size));
    }
  }
}

const MetaDummyLine = connect(
  null,
  mapDispatchToProps
)(DummyLine);

export default MetaDummyLine;
