import React, { PropTypes } from 'react';
import Line from './Line';
import Gutter from './Gutter';
import { KeyBoardInterface, MetaCursor, MetaDummyLine } from '../containers';
import atomStyles from './atomStyles';
import styles from './Editor.css';

const Editor = ({ lines, invalidCharSize }) => {
  let linesStyles = {
    height: "0px",
    backgroundColor: "rgb(40, 44, 52)"
  }
  let isolationStyles = {
    isolation: 'isolate',
    zIndex: 0
  }
  return (
    <div>
      <KeyBoardInterface />
      <div className={[styles['atom-text-editor'], atomStyles['atom-text-editor'], atomStyles["is-focused"]].join(' ')}>
        <div className={atomStyles["editor--private"]}>
          <div className={atomStyles["editor-contents--private"]}>
            <Gutter lines={lines} />
            <div className={atomStyles["scroll-view"]}>
              <div className={atomStyles.lines} style={linesStyles} >
                <div style={isolationStyles}>
                  {invalidCharSize && <MetaDummyLine />}
                  {lines.map(function(line, index) {
                    return <Line line={line} key={index} />
                  })}
                </div>
              </div>
              <MetaCursor />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Editor.propTypes = {
  lines: PropTypes.array.isRequired,
  invalidCharSize: PropTypes.bool.isRequired,
}

export default Editor
