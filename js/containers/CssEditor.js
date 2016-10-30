import React from 'react';
import { connect } from 'react-redux';
import { changeCSS } from '../actions/EditorActions';
import { cssSnip } from '../selectors/snipSelector';
import Editor from '../components/Editor';

const mapStateToProps = (state) => {
  return {
    text: cssSnip(state)
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
