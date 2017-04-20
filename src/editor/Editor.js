import { connect } from 'react-redux';
import { selectEditor } from './actions';
import EditorComponent from './EditorComponent';

const mapStateToProps = (state) => {
  return {
    selectedEditor: state.janther.editors.selectedEditor
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (editorId) => {
      dispatch(selectEditor(editorId));
    }
  }
};

const Editor = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditorComponent);

export default Editor;
