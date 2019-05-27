import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Line from "./components/Line";
import DummyLine from "./components/DummyLine";
import StyledLines from "./components/StyledLines";
import StyledLinesIsolation from "./components/StyledLinesIsolation";
import classNames from "classnames";
import { updateCharSize, lineClick } from "./actions";
import tokenizedLinesSelector from "./utils/tokenizeLines";

export const Lines = ({
  lines,
  cursorLine,
  invalidCharSize,
  lineHeightInPixels,
  updateCharSize,
  lineClick
}) => (
  <StyledLines className={classNames("lines")} onClick={e => lineClick(e)}>
    <StyledLinesIsolation>
      {invalidCharSize && <DummyLine updateCharSize={updateCharSize} />}
      {lines.map((line, index) => (
        <Line
          line={line}
          isCursorLine={cursorLine === index}
          lineHeight={lineHeightInPixels}
          key={index}
        />
      ))}
    </StyledLinesIsolation>
  </StyledLines>
);

Lines.propTypes = {
  lines: PropTypes.array.isRequired,
  cursorLine: PropTypes.number,
  invalidCharSize: PropTypes.bool.isRequired,
  lineHeightInPixels: PropTypes.number,
  updateCharSize: PropTypes.func.isRequired
};

const mapStateToProps = ({ janther: editor }) => ({
  lines: tokenizedLinesSelector(editor),
  cursorLine: editor.keyboard.cursor.caret.lineIndex,
  invalidCharSize: editor.lines.invalidCharSize,
  lineHeightInPixels: editor.lines.charSize.lineHeightInPixels
});

const mapDispatchToProps = dispatch => ({
  updateCharSize: size => dispatch(updateCharSize(size)),
  lineClick: event => dispatch(lineClick(event))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lines);
