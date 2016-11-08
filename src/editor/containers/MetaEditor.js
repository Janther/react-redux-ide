import React from 'react';
import { connect } from 'react-redux';
import { changeText } from '../actions/EditorActions';
import Editor from '../components';

const mapStateToProps = (state) => {
  return {
    lines: state.editor.lines,
    invalidCharSize: state.editor.cursor.invalidCharSize
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (text) => {
      dispatch(changeText(text));
    }
  }
}

const MetaEditor = connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor)

export default MetaEditor
