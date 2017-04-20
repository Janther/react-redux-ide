import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Token from './Token';

const Line = ({ line, isCursorLine, lineHeight }) => {
  let LineStyles = lineHeight ? { height: lineHeight } : {};
  return (
    <div className={classNames('line', { 'cursor-line': isCursorLine })} style={LineStyles}>
      { line.syntax && <Token node={line.node} />}
      {!line.syntax && line.value}
    </div>
  )
}

Line.propTypes = {
  line: PropTypes.object.isRequired,
  isCursorLine: PropTypes.bool.isRequired
}

export default Line
