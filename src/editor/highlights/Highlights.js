import React from "react";
import { connect } from "react-redux";
// import PropTypes from 'prop-types';
import classNames from "classnames";
import styled from "styled-components";
import Region, { StyledRegion } from "./Region";

const StyledHighlight = styled.div.attrs({
  className: classNames("highlight", "selection")
})`
  background: none;
  border-radius: 2px;
  color: #d7dae0;
  font-weight: 700;
  padding: 0;
  ${StyledRegion} {
    position: absolute;
    pointer-events: none;
    z-index: -1;
  }
`;

const Highlights = () =>
  <div className={classNames("highlights")}>
    <StyledHighlight>
      <Region
        style={{
          boxSizing: "border-box",
          top: "0px",
          left: "0px",
          right: "0px",
          height: "21px"
        }}
      />
      <Region
        style={{
          boxSizing: "border-box",
          top: "21px",
          left: "0px",
          width: "25px",
          height: "21px"
        }}
      />
    </StyledHighlight>
  </div>;

Highlights.propTypes = {};

const mapStateToProps = ({ janther: editor }) => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Highlights);
