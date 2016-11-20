import React, { PropTypes } from 'react';

const KeyBoardComponent = ({ onChange }) => {
  let textareaProps = {
    autoCorrect: "off",
    autoCapitalize: "off",
    spellCheck: "false",
    tabIndex: "0"
  };
  return (
    <textarea {...textareaProps} onChange={e => { onChange(e.target.value); }} />
  )
}

KeyBoardComponent.propTypes = {
  onChange: PropTypes.func.isRequired
}

export default KeyBoardComponent
