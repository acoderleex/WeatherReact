'use strict';

import { combineReducers } from 'redux';
import Weather from './weather';
import Location from './location';

module.exports = combineReducers({
  weather: Weather,
  location: Location
});
