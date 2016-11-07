import React, { PropTypes } from 'react'
import styles from './index.css';
import atom from '../../../atom-packages/atom/static/atom.less';

const Gutter = ({ lines }) => (
  <div className={atom['gutter-container']} >
    <div className={atom.gutter} >
      <div className={atom['line-numbers']} >
        {lines.map(function(line, index){
          return (<div className={[styles['line-number'], atom['line-number']].join(' ')} key={index}>
            {index + 1}
          </div>)
        })}
      </div>
    </div>
  </div>
)

Gutter.propTypes = {
  lines: PropTypes.array.isRequired
}

export default Gutter
