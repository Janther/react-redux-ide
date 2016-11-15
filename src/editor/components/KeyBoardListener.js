import React, { PropTypes } from 'react';

const KeyBoardListener = ({ onChange }) => {
  let textareaProps = {
    autoCorrect: "off",
    autoCapitalize: "off",
    spellCheck: "false",
    tabIndex: "0"
  };
  return (
    <textarea {...textareaProps} onChange={e => { onChange(e.target.value); e.target.value = '' }} />
  )
}

KeyBoardListener.propTypes = {
  onChange: PropTypes.func.isRequired
}

export default KeyBoardListener
