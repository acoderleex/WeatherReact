/**
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';


import assign from 'object-assign';
import Icon from 'react-native-vector-icons/Ionicons';

import FooterStyle from '../styles/footer';
import Pager from './pager';
import Settings from './settings';

type Props = {
  current: number;
  count: number;
  navigator: any;
};

const styles = StyleSheet.create(assign(
  {},
  FooterStyle
));

class Footer extends Component {
  constructor(props: Props) {
    super(props);

    (this: any).navigateToSettings = this.navigateToSettings.bind(this);
    (this: any).navigateToLocations = this.navigateToLocations.bind(this);
  }

  render() {
    return (
      <View style={styles.footer}>
        <View style={styles.left}>
          <TouchableHighlight onPress={this.navigateToLocations} style={{width: 30}} underlayColor='transparent'>
            <Icon name='ios-list' size={35} color='#8F97A4' />
          </TouchableHighlight>
        </View>
        <View style={styles.center}>
          <Pager current={this.props.current} count={this.props.count} />
        </View>
        <View style={styles.right}>
          <TouchableHighlight onPress={this.navigateToSettings} underlayColor='transparent'>
            <Icon name='ios-settings-outline' size={25} color='#8F97A4' />
          </TouchableHighlight>
        </View>
      </View>
    );
  }

  navigateToSettings() {
    this.props.navigator.push({
      settings: true
    });
  }

  navigateToLocations() {
    this.props.navigator.push({
      locations: true
    });
  }
}

module.exports = Footer;
