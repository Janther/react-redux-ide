import { connect } from 'react-redux';
import CursorComponent from './CursorComponent';
import { cursorX, cursorY } from './selectors';

const mapStateToProps = (state) => {
  return {
    x: cursorX(state),
    y: cursorY(state),
    lineHeightInPixels: state.janther.lines.charSize.lineHeightInPixels
  }
}

const CursorContainer = connect(
  mapStateToProps
)(CursorComponent)

export default CursorContainer
