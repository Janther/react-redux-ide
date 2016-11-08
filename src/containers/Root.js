import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from '../components/App';
import { keyBindings } from '../constants/keyBindings';

export default class Root extends Component {
  render() {
    const { store } = this.props;
    keyBindings(store.dispatch);
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
