import React, { Component } from "react";
// import PropTypes from 'prop-types';
import { connect } from "react-redux";
import ReactDOM from "react-dom";
import classNames from "classnames";
import Gutter from "./gutter/Gutter";
import Lines from "./lines/Lines";
import Highlights from "./highlights/Highlights";
import Cursor from "./cursor/Cursor";
import Keyboard from "./keyboard/Keyboard";
import { selectEditor } from "./actions";

export class Editor extends Component {
  componentDidMount() {
    // const { selectedEditor, editorId } = this.props
    this.keepFocus();
  }

  keepFocus() {
    let element = ReactDOM.findDOMNode(this).getElementsByTagName(
      "TEXTAREA"
    )[0];
    element.focus();
  }

  render() {
    const { selectedEditor, editorId, onClick } = this.props;
    return (
      <div
        onClick={e => {
          this.keepFocus();
          onClick(editorId);
        }}
      >
        {editorId}
        <Keyboard hasFocus={selectedEditor === editorId} />
        <div
          className={classNames("atom-text-editor", {
            "is-focused": selectedEditor === editorId
          })}
        >
          <div className={"editor--private"}>
            <div className={"editor-contents--private"}>
              <Gutter />
              <div className={"scroll-view"}>
                <Lines />
                <Highlights />
                <Cursor />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ janther: editor }) => ({
  selectedEditor: editor.editors.selectedEditor
});

const mapDispatchToProps = dispatch => ({
  onClick(editorId) {
    dispatch(selectEditor(editorId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
