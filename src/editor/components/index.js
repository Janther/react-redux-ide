import React, { PropTypes } from 'react';
import atomStyles from './atomStyles';
import styles from './index.css';
import Gutter from './Gutter';
import Line from './Line';
import MetaDummyLine from '../containers/MetaDummyLine';
import MetaCursor from '../containers/MetaCursor';

const Editor = ({ lines, invalidCharSize, onChange }) => {
  let linesStyles = {
    height: "0px",
    backgroundColor: "rgb(40, 44, 52)"
  }
  let isolationStyles = {
    isolation: 'isolate',
    zIndex: 0
  }
  let textareaProps = {
    autoCorrect: "off",
    autoCapitalize: "off",
    spellCheck: "false",
    tabIndex: "0"
  }
  return (
    <div>
      <textarea {...textareaProps} onChange={e => { onChange(e.target.value) }} />
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
  onChange: PropTypes.func.isRequired
}

export default Editor
