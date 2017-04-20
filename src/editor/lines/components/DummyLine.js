import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
// import styles from './Line.css';
import Token from './Token';

class DummyLine extends Component {
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

  render() {
    let style = {
      position: 'absolute',
      visibility: 'hidden'
    }

    let tokens = [
      { scope: 'source', children: [ { value: 'x' } ] },
      { scope: 'source', children: [ { value: '我' } ] },
      { scope: 'source', children: [ { value: 'ﾊ' } ] },
      { scope: 'source', children: [ { value: '세' } ] }
    ]

    return (
      <div className={classNames('line')} style={style} >
        {tokens.map(function(node, index) {
          return (<Token node={node} key={index} />)
        })}
      </div>
    )
  }
}

DummyLine.propTypes = {
  updateCharSize: PropTypes.func.isRequired
}

export default DummyLine
