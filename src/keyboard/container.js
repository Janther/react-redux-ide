import React from 'react';
import Moustrap from 'mousetrap';
import { connect } from 'react-redux';
import { editLine } from './actions';
import KeyBoardComponent from './component';

const registerShortcut = (element, dispatch, shortcut, actionType) => {
  Mousetrap(element).bind(shortcut, function(e) {
    dispatch({
      type: actionType,
      payload: {
        shortcut: shortcut,
        event: e
      }
    });
  });
};

const mapStateToProps = (state) => {
  return {
    commands: state.keyboard.commands
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (text) => {
      dispatch(editLine(text));
    },
    registerShortcut: (element, shortcut, actionType) => {
      registerShortcut(element, dispatch, shortcut, actionType);
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
