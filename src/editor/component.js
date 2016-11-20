import React, { PropTypes } from 'react';
import GutterContainer from '../gutter/container';
import LinesContainer from '../lines/container'
import CursorContainer from '../cursor/container'
import KeyboardContainer from '../keyboard/container'
import atomStyles from './atomStyles';
import styles from './styles.css';

const Editor = () => {
  return (
    <div>
      <KeyboardContainer />
      <div className={[styles['atom-text-editor'], atomStyles['atom-text-editor'], atomStyles["is-focused"]].join(' ')}>
        <div className={atomStyles["editor--private"]}>
          <div className={atomStyles["editor-contents--private"]}>
            <GutterContainer />
            <div className={atomStyles["scroll-view"]}>
              <LinesContainer />
              <CursorContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Editor
