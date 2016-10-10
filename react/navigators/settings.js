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
import Settings from '../components/settings/settings';

const styles = StyleSheet.create(assign(
  {},
  CommonStyle
));

type Props = {
  route: any,
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
    Icon.getImageSource('ios-close',40,'#ffffff').then(
      (source)=>this.setState({backIcon: source})
    );
  }
  render(){
    if (!this.state.backIcon) {
      return null;
    }
    return(
      <NavigatorIOS
        ref="navigator"
        itemWrapperStyle={styles.container}
        styles={styles.container}
        initialRoute={{
          ...this.props.route,
          leftButtonTitle: '',
          leftButtonIcon: this.state.backIcon,
          onLeftButtonPress: this.props.navigator.pop,
          passProps:{
            navigator: this
          }
        }}
        />
    );
  }

  push(route: any) {
    this.refs.navigator.push(route);
  }

  close() {
    this.props.navigator.pop();
  }
}

export default SettingsNavigator;
