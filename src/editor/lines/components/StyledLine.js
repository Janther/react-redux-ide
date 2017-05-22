import styled from 'styled-components';

const StyledLine = styled.div`
  white-space: pre;
  ${props => props.cursorLine && 'background-color: rgba(153, 187, 255, 0.04);'}
  ${props => props.dummy && 'position: absolute;'}
  ${props => props.dummy && 'visibility: hidden;'}
`;

export default StyledLine
