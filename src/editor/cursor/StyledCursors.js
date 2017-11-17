import styled from "styled-components";
import StyledCursor from "./StyledCursor";

const StyledCursors = styled.div`
  ${StyledCursor} {
    opacity: ${props => (props.blinkOff ? 0 : 1)};
  }
`;

export default StyledCursors;
