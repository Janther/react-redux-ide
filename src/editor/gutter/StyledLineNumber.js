import styled from "styled-components";
import classNames from "classnames";

const StyledLineNumber = styled.div`
  position: relative;
  white-space: nowrap;
  padding-left: 0.5em;
  opacity: ${props => {
    return props.isCursorLine ? 1 : 0.6;
  }};
`;

export default StyledLineNumber;
