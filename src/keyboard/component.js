import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

class KeyBoardComponent extends Component {
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
    return (
      <textarea
        {...textareaProps}
        onChange={e => { onChange(e.target.value); }}
        value={textarea} />
    )
  }
}

KeyBoardComponent.propTypes = {
  onChange: PropTypes.func.isRequired,
  commands: PropTypes.array.isRequired,
  textarea: PropTypes.string.isRequired,
  registerShortcut: PropTypes.func.isRequired,
  unRegisterShortcut: PropTypes.func.isRequired
}

export default KeyBoardComponent
