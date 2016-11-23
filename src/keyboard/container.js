import React from 'react';
import Moustrap from 'mousetrap';
import { connect } from 'react-redux';
import { editLine, registerShortcut } from './actions';
import KeyBoardComponent from './component';

const mapStateToProps = (state) => {
  return {
    commands: state.keyboard.commands,
    textarea: state.keyboard.textarea,
    lines: state.keyboard.lines
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (text) => {
      dispatch(editLine(text));
    },
    registerShortcut: (element, shortcut, actionType) => {
      registerShortcut(element, shortcut, actionType, dispatch);
    },
    unRegisterShortcut: (element, shortcut) => {
      Mousetrap(element).unbind(shortcut);
    }
  }
};

const KeyboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(KeyBoardComponent);

export default KeyboardContainer;
