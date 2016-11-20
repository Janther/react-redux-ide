import React, { PropTypes } from 'react';
import Line from './components/Line';
import DummyLine from './components/DummyLine';
import atomStyles from '../editor/atomStyles';

const LinesComponent = ({ lines, invalidCharSize, updateCharSize }) => {
  let linesStyles = {
    height: "0px",
    backgroundColor: "rgb(40, 44, 52)"
  }
  let isolationStyles = {
    isolation: 'isolate',
    zIndex: 0
  }
  return (
    <div className={atomStyles.lines} style={linesStyles} >
      <div style={isolationStyles}>
        {invalidCharSize && <DummyLine updateCharSize={updateCharSize}/>}
        {lines.map(function(line, index) {
          return <Line line={line} key={index} />
        })}
      </div>
    </div>
  )
}

LinesComponent.propTypes = {
  lines: PropTypes.array.isRequired,
  invalidCharSize: PropTypes.bool.isRequired,
  updateCharSize: PropTypes.func.isRequired
}

export default LinesComponent
