import React, { PropTypes } from 'react'
import styles from './Editor.css';
import atom from './Editor.less';
import Line from './Line';

const Editor = ({ tree, onChange }) => (
  <div>
    <textarea className={styles.text}
              onChange={e => { onChange(e.target.value) }} />
    <div className={[styles.container, atom['atom-text-editor']].join(' ')}>
      {tree.map(function(line, index) {
        return <Line tree={line} key={index} />
      })}
    </div>
  </div>
)

Editor.propTypes = {
  tree: PropTypes.array,
  onChange: PropTypes.func.isRequired
}

export default Editor
