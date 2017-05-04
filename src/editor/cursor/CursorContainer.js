import { connect } from 'react-redux';
import CursorComponent from './CursorComponent';
import { cursorX, cursorY } from './selectors';

const mapStateToProps = ({ janther: editor }) => ({
  x: cursorX(editor),
  y: cursorY(editor),
  lineHeightInPixels: editor.lines.charSize.lineHeightInPixels
});

const CursorContainer = connect(
  mapStateToProps
)(CursorComponent)

export default CursorContainer
