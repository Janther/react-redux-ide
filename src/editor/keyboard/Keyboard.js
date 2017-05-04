import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { editLine } from './actions';
import Mousetrap from 'mousetrap';

export class Keyboard extends Component {
  componentDidMount() {
    let element = ReactDOM.findDOMNode(this);

    this.props.commands.forEach((command) => {
      this.props.registerShortcut(element, command.shortcut, command.actionType)
    });
  }

  componentWillUnmount() {
    let element = ReactDOM.findDOMNode(this);

    this.props.commands.forEach((command) => {
      this.props.unRegisterShortcut(element, command.shortcut)
    });
  };

  render() {
    const { onChange, textarea } = this.props;
    const textareaProps = {
      autoCorrect: "off",
      autoCapitalize: "off",
      spellCheck: "false",
      tabIndex: "0"
    };
    const containerStyle = {
      overflow: 'hidden',
      position: 'relative',
      width: '0',
      height: '0'
    }
    return (
      <div style={containerStyle}>
        <textarea
          {...textareaProps}
          onChange={e => { onChange(e.target.value); }}
          value={textarea} />
      </div>
    )
  }
}

Keyboard.propTypes = {
  onChange: PropTypes.func.isRequired,
  commands: PropTypes.array.isRequired,
  textarea: PropTypes.string.isRequired,
  registerShortcut: PropTypes.func.isRequired,
  unRegisterShortcut: PropTypes.func.isRequired
}

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

const mapStateToProps = ({ janther: editor }) => ({
  commands: editor.keyboard.commands,
  textarea: editor.keyboard.textarea,
  lines: editor.keyboard.lines
});

const mapDispatchToProps = (dispatch) => ({
  onChange(text) {
    dispatch(editLine(text));
  },
  registerShortcut(element, shortcut, actionType) {
    registerShortcut(element, shortcut, actionType, dispatch);
  },
  unRegisterShortcut(element, shortcut) {
    Mousetrap(element).unbind(shortcut);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Keyboard);
