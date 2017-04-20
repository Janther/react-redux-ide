import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import GutterContainer from './gutter/GutterContainer';
import LinesContainer from './lines/LinesContainer'
import CursorContainer from './cursor/CursorContainer'
import KeyboardContainer from './keyboard/KeyboardContainer'
// import stylesheets from '../stylesheets';
// import styles from './styles.css';

class EditorComponent extends Component {
  componentDidMount() {
    // const { selectedEditor, editorId } = this.props
    this.keepFocus();
  }

  keepFocus() {
    let element = ReactDOM.findDOMNode(this).getElementsByTagName('TEXTAREA')[0];
    element.focus();
  }

  render() {
    const { selectedEditor, editorId, onClick } = this.props
    return (
      <div onClick={e => { this.keepFocus(); onClick(editorId) }} >
        {editorId}
        <KeyboardContainer hasFocus={selectedEditor === editorId} />
        <div className={classNames('atom-text-editor', {'is-focused': selectedEditor === editorId})}>
          <div className={"editor--private"}>
            <div className={"editor-contents--private"}>
              <GutterContainer />
              <div className={"scroll-view"}>
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
