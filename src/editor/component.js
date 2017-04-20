import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import GutterContainer from '../gutter/container';
import LinesContainer from '../lines/container'
import CursorContainer from '../cursor/container'
import KeyboardContainer from '../keyboard/container'
import stylesheets from '../stylesheets';
import styles from './styles.css';

class EditorComponent extends Component {
  componentDidMount() {
    const { selectedEditor, editorId } = this.props
    this.keepFocus();
  }

  keepFocus() {
    let element = ReactDOM.findDOMNode(this).getElementsByTagName('TEXTAREA')[0];
    element.focus();
  }

  render() {
    const { selectedEditor, editorId, onClick } = this.props
    return (
      <div onClick={e => { this.keepFocus(); onClick(editorId) }}>
        <KeyboardContainer hasFocus={selectedEditor == editorId} />
        <div className={classNames(styles['atom-text-editor'], stylesheets['atom-text-editor'], {[`${stylesheets["is-focused"]}`]: selectedEditor == editorId})}>
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
}

export default EditorComponent
