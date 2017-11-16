import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import classNames from "classnames";
import StyledGutter from "./StyledGutter";
import StyledLineNumbers from "./StyledLineNumbers";
import StyledLineNumber from "./StyledLineNumber";
import StyledIconRight from "./StyledIconRight";

export const Gutter = ({ lines, cursorLineIndex }) => (
  <div className={classNames("gutter-container")}>
    <StyledGutter>
      <StyledLineNumbers>
        {lines.map((line, index) => (
          <StyledLineNumber
            isCursorLine={cursorLineIndex === index}
            key={index}
          >
            {index + 1}
            <StyledIconRight />
          </StyledLineNumber>
        ))}
      </StyledLineNumbers>
    </StyledGutter>
  </div>
);

Gutter.propTypes = {
  lines: PropTypes.array.isRequired,
  cursorLineIndex: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  lines: state.janther.keyboard.lines,
  cursorLineIndex: state.janther.keyboard.cursor.lineIndex
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Gutter);
