import React from "react";
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
  animation-duration: .5s;
  animation-iteration-count: 1;
`;

const Region = ({ style }) => <StyledRegion style={style} />;

export default Region;
