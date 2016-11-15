import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';
import { KeyBoardListener } from '../components';

const { addText } = actions;

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (text) => {
      dispatch(addText(text));
    }
  }
}

const KeyBoardInterface = connect(
  mapStateToProps,
  mapDispatchToProps
)(KeyBoardListener)

export default KeyBoardInterface
