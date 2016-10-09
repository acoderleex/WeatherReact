'use strict';

export type WeatherForecast ={
  day: string,
  forecast: string,
  low: string,
  high: string,
  icon: string
};

export type WeatherObservation ={
  location: string,
  forecast: string,
  feelslike: string,
  current: string,
  low: string,
  high: string,
  icon: string
};

export type WeatherModel ={
  freshness: Date;
  observation: WeatherObservation;
  forecast: Array<WeatherForecast>;
};
