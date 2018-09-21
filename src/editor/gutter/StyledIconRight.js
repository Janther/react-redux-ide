import styled from "styled-components";
import classNames from "classnames";

const StyledIconRight = styled.div.attrs({
  className: classNames("icon-right")
})`
  display: inline-block;
  visibility: hidden;
  opacity: 0.6;
  padding: 0 0.4em;

  &:before {
    content: "\\f0a3";
  }
`;

export default StyledIconRight;
