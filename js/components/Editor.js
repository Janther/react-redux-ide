import React, { PropTypes } from 'react'
import styles from './Editor.css';

const Editor = ({ onChange }) => (
  <div>
    <textarea className={styles.text}
              onChange={e => { onChange("html") }} />
    <div className={styles.container}></div>    
  </div>
)

Editor.propTypes = {
  onChange: PropTypes.func.isRequired
}

export default Editor
