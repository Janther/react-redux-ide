import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Gutter = ({ lines, cursorLine }) => (
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

Gutter.propTypes = {
  lines: PropTypes.array.isRequired,
  cursorLine: PropTypes.number.isRequired
}

const mapStateToProps = (state) => ({
  lines: state.janther.keyboard.lines,
  cursorLine: state.janther.keyboard.cursor.lineIndex
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gutter)
