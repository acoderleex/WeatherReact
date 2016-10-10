/**
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableHighlight
} from 'react-native';

import assign from 'object-assign';
import LocationStyle from '../../styles/location';
import Settings from './settings';

type Props = {
  navigator: any;
};

class Locations extends Component {
  props: Props;

  constructor(props: Props) {
    super(props);
    (this: any).close = this.close.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle='default' backgroundColor='#000' />
        <TouchableHighlight
          style={styles.navigationButtonRow}
          underlayColor='#C8C7CC'
          onPress={()=>this.navigateTo({
             title: 'User Guide',
             component: Settings
          })}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>HELP</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }

  close() {
    this.props.navigator.close();
  }


  navigateTo(route: any) {
      this.props.navigator.push({
        ...route,
        passProps: {
          navigator: this.props.navigator
        }
      });
    }

}

const styles = StyleSheet.create(assign(
  {},
  LocationStyle
));

module.exports = Locations;
