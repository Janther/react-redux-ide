import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import atomStyles from './atomStyles';
import styles from './index.css';
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
    this.props.onMount(size);
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
      <div className={[styles.line, atomStyles.line].join(' ')} style={style} >
        {tokens.map(function(node, index) {
          return (<Token node={node} key={index} />)
        })}
      </div>
    )
  }
}

DummyLine.propTypes = {
  onMount: PropTypes.func.isRequired
}

export default DummyLine
