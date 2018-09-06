import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { editLine, registerShortcut } from "./actions";
import Mousetrap from "mousetrap";

const StyledTextareaContainer = styled.div`
  overflow: "hidden",
  position: "relative",
  width: "0",
  height: "0"
`;

export class Keyboard extends Component {
  componentDidMount() {
    let element = ReactDOM.findDOMNode(this);

    this.props.commands.forEach(command => {
      this.props.registerShortcut(
        element,
        command.shortcut,
        command.actionType
      );
    });
  }

  componentWillUnmount() {
    let element = ReactDOM.findDOMNode(this);

    this.props.commands.forEach(command => {
      this.props.unRegisterShortcut(element, command.shortcut);
    });
  }

  render() {
    return (
      <StyledTextareaContainer>
        <textarea
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          tabIndex="0"
          onChange={e => {
            this.props.onChange(e.target.value);
          }}
          value={this.props.textarea}
        />
      </StyledTextareaContainer>
    );
  }
}

Keyboard.propTypes = {
  onChange: PropTypes.func.isRequired,
  commands: PropTypes.array.isRequired,
  textarea: PropTypes.string.isRequired,
  registerShortcut: PropTypes.func.isRequired,
  unRegisterShortcut: PropTypes.func.isRequired
};

const mapStateToProps = ({ janther: editor }) => ({
  commands: editor.keyboard.commands,
  textarea: editor.keyboard.textarea,
  lines: editor.keyboard.lines
});

const mapDispatchToProps = dispatch => ({
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
