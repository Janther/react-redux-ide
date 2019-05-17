import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";
import { editLine, registerShortcut } from "./actions";
import Mousetrap from "mousetrap";

const StyledTextareaContainer = styled.div`
  overflow: "hidden",
  position: "relative",
  width: "0",
  height: "0"
`;

const Keyboard = ({ commands, onChange, value, bindShortcut }) => {
  const element = useRef();

  useEffect(() => {
    let currentElement = Mousetrap(element.current);

    commands.forEach(command =>
      bindShortcut(currentElement, command.shortcut, command.actionType)
    );

    return () =>
      commands.forEach(command => currentElement.unbind(command.shortcut));
  }, [commands, bindShortcut]);

  return (
    <StyledTextareaContainer>
      <textarea
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        tabIndex="0"
        onChange={e => onChange(e.target.value)}
        value={value}
        ref={element}
      />
    </StyledTextareaContainer>
  );
};

Keyboard.propTypes = {
  onChange: PropTypes.func.isRequired,
  commands: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  bindShortcut: PropTypes.func.isRequired
};

const mapStateToProps = ({ janther: editor }) => ({
  commands: editor.keyboard.commands,
  value: editor.keyboard.textarea
});

const mapDispatchToProps = dispatch => ({
  onChange: text => dispatch(editLine(text)),
  bindShortcut: (element, shortcut, actionType) =>
    registerShortcut(element, shortcut, actionType, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Keyboard);
