'use strict';

import StatusBar from 'StatusBar';
import React, { Component } from 'react';
import CommonStyle from './styles/common';
import {
  View
} from 'react-native';

import ApplicationNavigator from './navigators/application';

class  App extends Component {
  render(){
    return(
      <View style={CommonStyle.container}>
        <StatusBar translucent={true} backgroundColor='transparent' barStyle='light-content'/>
        <ApplicationNavigator/>
      </View>
    );
  }
}

module.exports = App;
