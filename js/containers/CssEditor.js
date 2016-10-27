import React from 'react';
import { connect } from 'react-redux';
import { changeCSS } from '../actions/EditorActions';
import Editor from '../components/Editor';

const mapStateToProps = (state) => {
  let css_snip = state.snip.css_snip
  return {
    text: css_snip.css
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
