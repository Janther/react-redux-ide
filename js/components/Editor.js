import React, { PropTypes } from 'react'
import styles from './Editor.css';

const Editor = ({ text, onChange }) => (
  <div>
    <textarea className={styles.text}
              onChange={e => { onChange(e.target.value) }} />
    <div className={styles.container}>
      {text.split("\n").map(function(line, index) {
        return (index === 0) ? line : [<br/>, line]
      })}
    </div>
  </div>
)

Editor.propTypes = {
  text: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

export default Editor
