'use strict';

import React, { Component } from 'react';
import StatusBar from 'StatusBar';
import assign from 'object-assign';
import CommonStyle from './styles/common';

import {
  StyleSheet,
  View
} from 'react-native';

import ApplicationNavigator from './navigators/application';

const styles = StyleSheet.create(assign(
  {},
  CommonStyle
));


class  App extends Component {
  render(){
    return(
      <View style={styles.container}>
        <StatusBar translucent={true} backgroundColor='transparent' barStyle='light-content'/>
        <ApplicationNavigator/>
      </View>
    );
  }
}

module.exports = App;
