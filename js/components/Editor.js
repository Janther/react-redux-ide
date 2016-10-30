import React, { PropTypes } from 'react'
import styles from './Editor.css';
import Line from './Line';

const Editor = ({ text, onChange }) => (
  <div>
    <textarea className={styles.text}
              onChange={e => { onChange(e.target.value) }} />
    <div className={styles.container}>
      {text.split("\n").map(function(line, index) {
        return <Line text={line} key={index} />
      })}
    </div>
  </div>
)

Editor.propTypes = {
  text: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

export default Editor
