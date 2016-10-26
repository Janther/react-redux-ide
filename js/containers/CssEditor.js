import React from 'react';
import { connect } from 'react-redux';
import { changeCSS } from '../actions/EditorActions';
import Editor from '../components/Editor';

const mapStateToProps = (state) => {
  return {
    css: state.css
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (css) => {
      dispatch(changeCSS(css))
    }
  }
}

const CssEditor = connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor)

export default CssEditor
