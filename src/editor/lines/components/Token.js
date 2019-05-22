import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const styles = scope =>
  classNames(scope.split(".").map(className => "syntax--" + className));

const Token = ({ node }) => (
  <span className={styles(node.scope)}>
    {node.children.map((childNode, index) => {
      if (childNode.children == null) {
        return childNode.value;
      }
      return <Token node={childNode} key={index} />;
    })}
  </span>
);

Token.propTypes = {
  node: PropTypes.object.isRequired
};

export default Token;
