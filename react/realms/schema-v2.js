'use strict';
const Observation ={
    name: 'Observation',
    properties: {
        forecast: 'string',
        feelslike: 'string',
        current: 'string',
        low: 'string',
        high: 'string',
        icon: 'string'
    }
};

const Forecast ={
  name: 'Forecast',
  properties: {
    day: 'string',
    forecast: 'string',
    low: 'string',
    high: 'string',
    icon: 'string'
  }
};

const Weather ={
  name: 'Weather',
  properties: {
    freshness: 'date',
    observation: 'Observation',
    forecast: {
      objectType: 'Forecast',
      type: 'list'
    }
  }
};

const Location ={
  name: 'Location',
  properties:{
    name: 'string',
    postcode: 'string',
    state: 'string',
    openWeatherId: 'string',
    weather: 'Weather'
  }
};

module.exports = {
  schema: [Observation,Forecast,Weather,Location],
  schemaVersion: 2,
  migration: ()=>{}
};
