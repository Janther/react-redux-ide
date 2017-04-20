// import React from 'react';
import Mousetrap from 'mousetrap';
import { connect } from 'react-redux';
import { editLine } from './actions';
import KeyboardComponent from './KeyboardComponent';

const registerShortcut = (element, shortcut, actionType, dispatch) => {
  Mousetrap(element).bind(shortcut, (e) => {
    dispatch((dispatch, getState) => {
      dispatch({
        type: actionType,
        payload: {
          shortcut: shortcut,
          event: e,
          lines: getState().janther.keyboard.lines,
          cursor: getState().janther.keyboard.cursor
        }
      });
    });
  });
};

const mapStateToProps = (state) => {
  return {
    commands: state.janther.keyboard.commands,
    textarea: state.janther.keyboard.textarea,
    lines: state.janther.keyboard.lines
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
)(KeyboardComponent);

export default KeyboardContainer;
