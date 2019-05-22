import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { regions } from "./selectors";
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

const Highlights = ({ regions }) => (
  <div className={classNames("highlights")}>
    <StyledHighlight>
      {regions.map(({ lineNumber, lineStart, lineEnd }, index) => (
        <Region
          lineNumber={lineNumber}
          lineStart={lineStart}
          lineEnd={lineEnd}
          key={index}
        />
      ))}
    </StyledHighlight>
  </div>
);

Highlights.propTypes = {
  regions: PropTypes.array.isRequired
};

const mapStateToProps = ({ janther: editor }) => ({
  regions: regions(editor)
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Highlights);
