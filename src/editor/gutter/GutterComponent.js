import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const GutterComponent = ({ lines, cursorLine }) => (
  <div className={classNames('gutter-container')} >
    <div className={classNames('gutter')} >
      <div className={classNames('line-numbers')} >
        {lines.map((line, index) => (
          <div className={classNames('line-number', { 'cursor-line': cursorLine === index })} key={index}>
            {index + 1}
            <div className={classNames('icon-right')} />
          </div>
        ))}
      </div>
    </div>
  </div>
)

GutterComponent.propTypes = {
  lines: PropTypes.array.isRequired,
  cursorLine: PropTypes.number.isRequired
}

export default GutterComponent
