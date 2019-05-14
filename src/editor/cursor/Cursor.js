import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { cursorX, cursorY } from "./selectors";
import Blink from "./Blink";
import StyledCursors from "./StyledCursors";
import StyledCursor from "./StyledCursor";

export const Cursor = ({ x, y, lineHeightInPixels }) => {
  let styles = {
    transform: "translate(" + x + "px, " + y + "px)",
    height: lineHeightInPixels + "px",
    width: "8px"
  };

  return (
    <Blink position={`${x}-${y}`}>
      {({ off }) => (
        <StyledCursors blinkOff={off}>
          <StyledCursor style={styles} />
        </StyledCursors>
      )}
    </Blink>
  );
};

Cursor.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired
};

const mapStateToProps = ({ janther: editor }) => ({
  x: cursorX(editor),
  y: cursorY(editor),
  lineHeightInPixels: editor.lines.charSize.lineHeightInPixels
});

export default connect(mapStateToProps)(Cursor);
