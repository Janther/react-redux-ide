import { connect } from 'react-redux';
import { selectEditor } from './actions';
import EditorComponent from './EditorComponent';

const mapStateToProps = ({ janther: editor}) => ({
  selectedEditor: editor.editors.selectedEditor
});

const mapDispatchToProps = (dispatch) => ({
  onClick(editorId) {
    dispatch(selectEditor(editorId));
  }
});

const Editor = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditorComponent);

export default Editor;
