import React, { PropTypes } from 'react';
import styles from './index.css';
import atom from '../../../atom-packages/atom/static/atom.less';
// import atomSyntax from './index.less';
import Gutter from './Gutter';
import Line from './Line';

const Editor = ({ lines, onChange }) => (
  <div>
    <textarea className={styles.text}
              onChange={e => { onChange(e.target.value) }} />
    <div className={[styles.container, atom['atom-text-editor']].join(' ')}>
      <Gutter lines={lines} />
      {lines.map(function(line, index) {
        return <Line line={line} key={index} />
      })}
    </div>
  </div>
)

Editor.propTypes = {
  lines: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Editor
