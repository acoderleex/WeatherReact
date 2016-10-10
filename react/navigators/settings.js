'use strict';

import React,{ Component } from 'react';
import {
  StyleSheet,
  NavigatorIOS,
  View
}from 'react-native';

import assign from 'object-assign';
import CommonStyle from '../styles/common';
import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create(assign(
  {},
  CommonStyle
));

type Props = {
  route: any;
  navigator: any;
};

type State = {
  backIcon: any;
};

class SettingsNavigator extends Component {
  props: Props;
  state: State;

  constructor(props: Props) {
    super(props);
    this.state ={
      backIcon: null
    };
  }
  componentWillMount(){
    Icon.getImageSource('ios-close',40,'#007AFF').then(
      (source)=>this.setState({backIcon: source})
    );
  }
  render(){
    try {
      if (!this.state.backIcon) {
        return null;
      }
      return(
        <NavigatorIOS
          ref="navigator"
          itemWrapperStyle={styles.content}
          style={styles.container}
          initialRoute={{
            ...this.props.route,
            leftButtonTitle: '',
            leftButtonIcon: this.state.backIcon,
            onLeftButtonPress: this.props.navigator.pop,
            passProps:{
              navigator: this
            }
          }}/>
      );
    } catch (e) {
      global.log(e);
    }
  }

  push(route: any) {
    this.refs.navigator.push(route);
  }

  close() {
    console.log("======close====closecloseclose===");
    this.props.navigator.pop();
  }
}
export default SettingsNavigator;
