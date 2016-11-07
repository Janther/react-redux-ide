import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Home from '../components/Home';
import { keyBindings } from '../constants/keyBindings';

export default class Root extends Component {
  render() {
    const { store } = this.props;
    keyBindings(store.dispatch);
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}
