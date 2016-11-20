import React from 'react';
import { connect } from 'react-redux';
import { addText } from './actions';
import KeyBoardComponent from './component';

const mapStateToProps = (state) => {
  return {}
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (text) => {
      dispatch(addText(text));
    }
  }
};

const KeyboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(KeyBoardComponent);

export default KeyboardContainer;
