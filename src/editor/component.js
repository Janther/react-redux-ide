import React, { PropTypes } from 'react';
import classNames from 'classnames';
import GutterContainer from '../gutter/container';
import LinesContainer from '../lines/container'
import CursorContainer from '../cursor/container'
import KeyboardContainer from '../keyboard/container'
import stylesheets from '../stylesheets';
import styles from './styles.css';

const Editor = () => {
  return (
    <div>
      <KeyboardContainer />
      <div className={classNames(styles['atom-text-editor'], stylesheets['atom-text-editor'], stylesheets["is-focused"])}>
        <div className={stylesheets["editor--private"]}>
          <div className={stylesheets["editor-contents--private"]}>
            <GutterContainer />
            <div className={stylesheets["scroll-view"]}>
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
