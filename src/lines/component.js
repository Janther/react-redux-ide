import React, { PropTypes } from 'react';
import stylesheets from '../stylesheets';
import Line from './components/Line';
import DummyLine from './components/DummyLine';

const LinesComponent = ({ lines, cursorLine, invalidCharSize, updateCharSize }) => {
  let linesStyles = {
    height: "0px",
    backgroundColor: "rgb(40, 44, 52)"
  }
  let isolationStyles = {
    isolation: 'isolate',
    zIndex: 0
  }
  return (
    <div className={stylesheets.lines} style={linesStyles} >
      <div style={isolationStyles}>
        {invalidCharSize && <DummyLine updateCharSize={updateCharSize}/>}
        {lines.map(function(line, index) {
          return <Line line={line} isCursorLine={cursorLine == index} key={index} />
        })}
      </div>
    </div>
  )
}

LinesComponent.propTypes = {
  lines: PropTypes.array.isRequired,
  cursorLine: PropTypes.number.isRequired,
  invalidCharSize: PropTypes.bool.isRequired,
  updateCharSize: PropTypes.func.isRequired
}

export default LinesComponent
