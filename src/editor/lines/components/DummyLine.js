import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import StyledLine from "./StyledLine";
import Token from "./Token";

class DummyLine extends Component {
  tokens = [
    { scope: "source", children: [{ value: "x" }] },
    { scope: "source", children: [{ value: "我" }] },
    { scope: "source", children: [{ value: "ﾊ" }] },
    { scope: "source", children: [{ value: "세" }] }
  ];

  componentDidMount() {
    let dom_line = ReactDOM.findDOMNode(this);
    let size = {
      lineHeightInPixels: dom_line.getBoundingClientRect().height,
      defaultCharWidth: dom_line.children[0].getBoundingClientRect().width,
      doubleWidthCharWidth: dom_line.children[1].getBoundingClientRect().width,
      halfWidthCharWidth: dom_line.children[2].getBoundingClientRect().width,
      koreanCharWidth: dom_line.children[3].getBoundingClientRect().width
    };
    this.props.updateCharSize(size);
  }

  render = () => (
    <StyledLine dummy>
      {this.tokens.map((node, index) => (
        <Token node={node} key={index} />
      ))}
    </StyledLine>
  );
}

DummyLine.propTypes = {
  updateCharSize: PropTypes.func.isRequired
};

export default DummyLine;
