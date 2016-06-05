import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as HomeActions from '../actions/HomeActions';
import * as ModuleActions from '../actions/ModuleActions';
import styles from '../../css/app.css';

class Home extends Component {
  render() {
    const {title, dispatch} = this.props;
    const actions = bindActionCreators(HomeActions, ModuleActions, dispatch);
    return (
      <main>
        <textarea onChange={e => actions.changeHTML('html')} />
        <textarea onChange={e => actions.changeCSS('css')} />
      </main>
    );
  }
}

export default connect(state => state.Sample)(Home)
