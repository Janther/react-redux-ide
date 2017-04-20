import React from 'react';
import PropTypes from 'prop-types';
import Line from './components/Line';
import DummyLine from './components/DummyLine';
import classNames from 'classnames';

const LinesComponent = ({ lines, cursorLine, invalidCharSize, lineHeightInPixels, updateCharSize }) => {
  let isolationStyles = {
    isolation: 'isolate',
    zIndex: 0
  }
  let linesStyles = {
    height: "0",
    backgroundColor: "rgb(40, 44, 52)"
  }
  return (
    <div className={classNames('lines')} style={linesStyles} >
      <div style={isolationStyles}>
        {(() => {
          if (invalidCharSize) {
            return <DummyLine updateCharSize={updateCharSize}/>
          }
        })()}
        {lines.map(function(line, index) {
          return <Line line={line} isCursorLine={cursorLine === index} lineHeight={lineHeightInPixels} key={index} />
        })}
      </div>
    </div>
  )
}

LinesComponent.propTypes = {
  lines: PropTypes.array.isRequired,
  cursorLine: PropTypes.number.isRequired,
  invalidCharSize: PropTypes.bool.isRequired,
  lineHeightInPixels: PropTypes.number,
  updateCharSize: PropTypes.func.isRequired
}

export default LinesComponent
