import styled from "styled-components";
import classNames from "classnames";

const StyledGutter = styled.div.attrs({
  className: classNames("gutter")
})`
  overflow: hidden;
  z-index: 0;
  text-align: right;
  cursor: default;
  min-width: 1em;
  box-sizing: border-box;
`;

export default StyledGutter;
