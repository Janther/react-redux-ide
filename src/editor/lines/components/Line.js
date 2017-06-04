import React from "react";
import PropTypes from "prop-types";
import StyledLine from "./StyledLine";
import Token from "./Token";

const Line = ({ line, isCursorLine, lineHeight }) => {
  let LineStyles = lineHeight ? { height: lineHeight } : {};
  return (
    <StyledLine cursorLine={isCursorLine} style={LineStyles}>
      {line.syntax && <Token node={line.node} />}
      {!line.syntax && line.value}
    </StyledLine>
  );
};

Line.propTypes = {
  line: PropTypes.object.isRequired,
  isCursorLine: PropTypes.bool.isRequired
};

export default Line;
