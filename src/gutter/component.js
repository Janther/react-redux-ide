import React, { PropTypes } from 'react'
import atomStyles from '../editor/atomStyles';
import styles from './styles.css';

const GutterComponent = ({ lines }) => (
  <div className={atomStyles['gutter-container']} >
    <div className={atomStyles.gutter} >
      <div className={atomStyles['line-numbers']} >
        {lines.map((line, index) => (
          <div className={[styles['line-number'], atomStyles['line-number']].join(' ')} key={index}>
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  </div>
)

GutterComponent.propTypes = {
  lines: PropTypes.array.isRequired
}

export default GutterComponent
