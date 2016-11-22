import React from 'react';
import Moustrap from 'mousetrap';
import { connect } from 'react-redux';
import { editLine } from './actions';
import KeyBoardComponent from './component';

const registerShortcut = (element, shortcut, actionType, dispatch) => {
  Mousetrap(element).bind(shortcut, function(e) {
    dispatch((dispatch, getState) => {
      dispatch({
        type: actionType,
        payload: {
          shortcut: shortcut,
          event: e,
          lines: getState().keyboard.lines
        }
      });
    });
  });
};

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
