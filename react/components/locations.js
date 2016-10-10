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
import LocationStyle from '../styles/location';

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
      </View>
    );
  }

  close() {
    this.props.navigator.close();
  }
}

const styles = StyleSheet.create(assign(
  {},
  LocationStyle
));

module.exports = Locations;
