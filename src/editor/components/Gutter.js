import React, { PropTypes } from 'react'
import atomStyles from './atomStyles';
import styles from './Editor.css';

const Gutter = ({ lines }) => (
  <div className={atomStyles['gutter-container']} >
    <div className={atomStyles.gutter} >
      <div className={atomStyles['line-numbers']} >
        {lines.map(function(line, index){
          return (<div className={[styles['line-number'], atomStyles['line-number']].join(' ')} key={index}>
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
