import React, { PropTypes } from 'react';
import styles from './index.css';
import atom from '../../../atom-packages/atom/static/atom.less';
import Gutter from './Gutter';
import Line from './Line';
import MetaCursor from '../../containers/MetaCursor';

const Editor = ({ lines, onChange }) => {
  let linesStyles = {
    height: "0px",
    backgroundColor: "rgb(40, 44, 52)"
  }
  let isolationStyles = {
    isolation: 'isolate',
    zIndex: 0
  }
  let textareaProps = {
    autocorrect: "off",
    autocapitalize: "off",
    spellcheck: "false",
    tabindex: "0"
  }
  return (
    <div>
      <textarea {...textareaProps} onChange={e => { onChange(e.target.value) }} />
      <div className={[styles['atom-text-editor'], atom['atom-text-editor'], atom["is-focused"]].join(' ')}>
        <div className={atom["editor--private"]}>
          <div className={atom["editor-contents--private"]}>
            <Gutter lines={lines} />
            <div className={atom["scroll-view"]}>
              <div className={atom.lines} style={linesStyles} >
                <div style={isolationStyles}>
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
  onChange: PropTypes.func.isRequired
}

export default Editor
