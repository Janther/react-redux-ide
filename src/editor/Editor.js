import React, { useEffect, useRef } from "react";
// import PropTypes from 'prop-types';
import { connect } from "react-redux";
import classNames from "classnames";
import Gutter from "./gutter/Gutter";
import Lines from "./lines/Lines";
import Highlights from "./highlights/Highlights";
import Cursor from "./cursor/Cursor";
import Keyboard from "./keyboard/Keyboard";
import { selectEditor } from "./actions";

const Editor = ({ selectedEditor, editorId, onClick }) => {
  const element = useRef();
  const keepFocus = () => {
    let textArea = element.current.getElementsByTagName("TEXTAREA")[0];
    textArea.focus();
  };

  useEffect(() => {
    keepFocus();
  }, []);

  return (
    <div
      onClick={e => {
        keepFocus();
        onClick(editorId);
      }}
      ref={element}
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
};

const mapStateToProps = ({ janther: editor }) => ({
  selectedEditor: editor.editors.selectedEditor
});

const mapDispatchToProps = dispatch => ({
  onClick(editorId) {
    dispatch(selectEditor(editorId));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);
