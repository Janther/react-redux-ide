import { Component } from "react";

export default class Blink extends Component {
  state = { off: false };

  componentDidMount() {
    this._interval = setInterval(
      () => this.setState({ off: !this.state.off }),
      500
    );
  }

  componentWillUnmount() {
    clearInterval(this._interval);
  }

  render() {
    let { children: renderFn } = this.props;
    return renderFn({ off: this.state.off });
  }
}
