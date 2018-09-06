import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Line from "./components/Line";
import DummyLine from "./components/DummyLine";
import classNames from "classnames";
import { updateCharSize } from "./actions";

export const Lines = ({
  lines,
  cursorLine,
  invalidCharSize,
  lineHeightInPixels,
  updateCharSize
}) => {
  let isolationStyles = {
    isolation: "isolate",
    zIndex: 0
  };
  let linesStyles = {
    height: "0",
    backgroundColor: "rgb(40, 44, 52)"
  };
  return (
    <div className={classNames("lines")} style={linesStyles}>
      <div style={isolationStyles}>
        {(() => {
          if (invalidCharSize) {
            return <DummyLine updateCharSize={updateCharSize} />;
          }
        })()}
        {lines.map(function(line, index) {
          return (
            <Line
              line={line}
              isCursorLine={cursorLine === index}
              lineHeight={lineHeightInPixels}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

Lines.propTypes = {
  lines: PropTypes.array.isRequired,
  cursorLine: PropTypes.number.isRequired,
  invalidCharSize: PropTypes.bool.isRequired,
  lineHeightInPixels: PropTypes.number,
  updateCharSize: PropTypes.func.isRequired
};

const mapStateToProps = ({ janther: editor }) => ({
  lines: editor.keyboard.lines,
  cursorLine: editor.keyboard.cursor.lineIndex,
  invalidCharSize: editor.lines.invalidCharSize,
  lineHeightInPixels: editor.lines.charSize.lineHeightInPixels
});

const mapDispatchToProps = dispatch => ({
  updateCharSize(size) {
    dispatch(updateCharSize(size));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lines);
