'use strict';

import type { Action } from '../actions/types';
import type { WeatherModel } from '../models/view';


export type State = {
  isLoading: bool;
  isRefreshing: bool;
  data: Array<WeatherModel>;
  current: number;
};

const initial: State ={
  isLoading: false,
  isRefreshing: false,
  data: [],
  current: 0
};

function weather(state: State=initial,action: Action): State{
  switch (action.type) {
    case 'WEATHER_SET_LOADING':
      return {
          ...state,
          isLoading: true
      };
      break;
    case 'WEATHER_SET_REFRESHING':
      return {
          ...state,
          isRefreshing: true
      };
      break;
    case 'WEATHER_GET_ALL':
      return {
          ...state,
          isLoading: false,
          isRefreshing: false,
          data: action.data
      };
      break;
    default:
        return state;
  }
}

module.exports = weather;
