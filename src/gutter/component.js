import React, { PropTypes } from 'react'
import classNames from 'classnames';
import stylesheets from '../stylesheets';
import styles from './styles.css';

const GutterComponent = ({ lines }) => (
  <div className={stylesheets['gutter-container']} >
    <div className={stylesheets.gutter} >
      <div className={stylesheets['line-numbers']} >
        {lines.map((line, index) => (
          <div className={classNames(stylesheets['line-number'], styles['line-number'])} key={index}>
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
