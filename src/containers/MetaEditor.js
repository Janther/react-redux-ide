import React from 'react';
import { connect } from 'react-redux';
import { changeText } from '../actions/EditorActions';
import Editor from '../components/Editor/index';

const mapStateToProps = (state) => {
  return {
    lines: state.editor.lines
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
