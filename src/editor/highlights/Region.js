import React from "react";
import { connect } from "react-redux";
// import PropTypes from 'prop-types';
import classNames from "classnames";
import styled, { keyframes } from "styled-components";

const flash = keyframes`
  from {
    background-color: #528bff;
  }
  to {
    background-color: null;
  }
`;

export const StyledRegion = styled.div.attrs({
  className: classNames("region")
})`
  animation-name: ${flash};
  animation-duration: 0.5s;
  animation-iteration-count: 1;
  box-sizing: border-box;
`;

const Region = ({ lineNumber, lineStart, lineEnd, lineHeightInPixels }) => {
  let style = {
    height: `${lineHeightInPixels}px`,
    left: `${lineStart}px`,
    top: `${lineNumber * lineHeightInPixels}px`
  };
  if (lineEnd === Infinity) {
    style.right = "0px";
  } else {
    style.width = `${lineEnd - (lineStart | 0)}px`;
  }
  return <StyledRegion style={style} />;
};

const mapStateToProps = ({ janther: editor }) => ({
  lineHeightInPixels: editor.lines.charSize.lineHeightInPixels
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Region);
