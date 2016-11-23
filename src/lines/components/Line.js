import React, { PropTypes } from 'react';
import classNames from 'classnames';
import ReactDOM from 'react-dom';
import stylesheets from '../../stylesheets';
import styles from './Line.css';
import Token from './Token';

const Line = ({ line, isCursorLine }) => {
  return (
    <div className={classNames(stylesheets.line, styles.line, {[`${stylesheets["cursor-line"]}`]: isCursorLine})}>
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
