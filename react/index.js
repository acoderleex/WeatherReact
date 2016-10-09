'use strict';

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './app';

import configureRealm from './realms/configure';
import configureStore from './stores/configure';
import { setWeatherLoading,initialiseLocations } from './actions';

type State ={
  store: any;
};

class Root extends Component {
  state: State;
  constructor() {
    super();
    configureRealm();
    this.state = {
      store:configureStore()
    };
    this.state.store.dispatch(setWeatherLoading());
    this.state.store.dispatch(initialiseLocations());
  }
  render(){
    return(
      <Provider store={this.state.store}>
        <App/>
      </Provider>
    );
  }
}
global.log=(...args)=>{
  console.log('-----------');
  console.log(...args);
  console.log('-----------');
  return args[args.length-1];
};
module.exports = Root;
