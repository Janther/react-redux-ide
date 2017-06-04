import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classNames from "classnames";
import { cursorX, cursorY } from "./selectors";
import Blink from "./Blink";

export const Cursor = ({ x, y, lineHeightInPixels }) => {
  let styles = {
    transform: "translate(" + x + "px, " + y + "px)",
    height: lineHeightInPixels + "px",
    width: "8px"
  };

  return (
    <Blink>
      {({ off }) =>
        <div className={classNames("cursors", { "blink-off": off })}>
          <div className={classNames("cursor")} style={styles} />
        </div>}
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
