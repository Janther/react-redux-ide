import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import StyledLine from "./StyledLine";
import Token from "./Token";

const DummyLine = ({ updateCharSize }) => {
  const tokens = [
    { scope: "source", children: [{ value: "x" }] },
    { scope: "source", children: [{ value: "我" }] },
    { scope: "source", children: [{ value: "ﾊ" }] },
    { scope: "source", children: [{ value: "세" }] }
  ];
  const element = useRef();

  useEffect(() => {
    let dom_line = element.current;
    let size = {
      lineHeightInPixels: dom_line.getBoundingClientRect().height,
      defaultCharWidth: dom_line.children[0].getBoundingClientRect().width,
      doubleWidthCharWidth: dom_line.children[1].getBoundingClientRect().width,
      halfWidthCharWidth: dom_line.children[2].getBoundingClientRect().width,
      koreanCharWidth: dom_line.children[3].getBoundingClientRect().width
    };
    updateCharSize(size);
  }, [updateCharSize]);

  return (
    <StyledLine dummy ref={element}>
      {tokens.map((node, index) => (
        <Token node={node} key={index} />
      ))}
    </StyledLine>
  );
};

DummyLine.propTypes = {
  updateCharSize: PropTypes.func.isRequired
};

export default DummyLine;
