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
} from 'react-native';

import assign from 'object-assign';

import type { WeatherForecast } from '../models/view';
import ForecastStyle from '../styles/forecast';
const renderForecastImage = require('./forecastimage');

type Props = {
  forecast: Array<WeatherForecast>;
};

class Forecast extends Component {
  props: Props;

  constructor(props: Props) {
    super(props);

    (this: any).renderForecast = this.renderForecast.bind(this);
  }

  render() {
    return (
      <View style={styles.forecastView}>
        <View style={styles.forecastList}>
          { this.renderForecast() }
        </View>
      </View>
    );
  }

  renderForecast() {
    return (
      this.props.forecast.map((item, index) => {
        if (index === 0) {
            return null;
        };

        if (index < this.props.forecast.length - 1) {
          var separator = {
            borderColor: '#F4F4F4',
            borderBottomWidth: 1,
          };
        }

        var day = index === 1 ? 'Tomorrow' : item.day;
        return (
          <View key={item.day} style={[styles.forecastItem, separator]}>
            <View stye={styles.forecastItemDayView}>
              <Text>{ day }</Text>
            </View>
            <View style={styles.forecastItemDataView}>
              { renderForecastImage(item.icon, 20, 20) }
              <Text style={styles.forecastItemTemp}>{ item.low }</Text>
              <Text style={styles.forecastItemTemp}>{ item.high }</Text>
            </View>
          </View>
        );
      })
    );
  }
}

const styles = StyleSheet.create(assign(
  {},
  ForecastStyle
));

module.exports = Forecast;
