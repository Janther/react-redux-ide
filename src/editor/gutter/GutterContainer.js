import { connect } from 'react-redux';
import GutterComponent from './GutterComponent';

const mapStateToProps = (state) => ({
  lines: state.janther.keyboard.lines,
  cursorLine: state.janther.keyboard.cursor.lineIndex
})

const mapDispatchToProps = (dispatch) => ({
})

const GutterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GutterComponent)

export default GutterContainer
