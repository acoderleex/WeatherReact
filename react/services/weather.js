'use strict';

import realm from '../realms';
import { weatherApiKey, weatherApiUrl } from '../configs/config';
import type { WeatherModel, WeatherObservation, WeatherForecast } from '../models/view';
import dateFormat from 'dateformat';

class  WeatherService {
  async getAllWeather(isForceUpdate: bool){
    var data=[];
    let context = realm.current();
    try {
      let locations=context.objects('Location');
      for (var i = 0; i < locations.length; i++) {
        var location=locations[i];
        var result;
        if (isForceUpdate===false&&location.weather) {
          result=this.getWeatherFromContext(location);
        }else {
          result=await this.getWeatherFromApiAsync(location.openWeatherId);
          this.updateWeatherInContext(location,result,context);
        }
      }
    } finally {
      context.close();
    }
    return data;
  }

  getDayFromUtcDate(date: number): string{
      var value=new Date(date*1000);
      var day=dateFormat(value,'dddd');
      return day;
  }

  getWeatherFromContext(location: any) {
    return{
        id: location.openWeatherId,
        freshness: location.weather.freshness,
        observation:{
            location: location.name,
            forecast: location.weather.observation.forecast,
            feelsLike: location.weather.observation.feelsLike,
            current: location.weather.observation.current,
            low: location.weather.observation.low,
            high: location.weather.observation.high,
            icon: location.weather.observation.icon
        },
        forecast: location.weather.forecast.map((item)=>{
            return {
                day: item.day,
                forecast: item.forecast,
                low: item.low,
                high: item.high,
                icon: item.icon
            };
        })
    };
  }

  updateWeatherInContext(location: any,weather: any,context: any) {
    context.write(()=>{
      location.weather ={
        freshness: weather.freshness,
        observation: {
          forecast: weather.observation.forecast,
          feelslike: String(weather.observation.feelslike),
          current: weather.observation.current.toString(),
          low: weather.observation.low.toString(),
          high: weather.observation.high.toString(),
          icon: weather.observation.icon
        }
      }
      while(location.weather.forecast.length>0){
        location.weather.forecast.pop();
      }
      weather.forecast.forEach((item)=>{
        location.weather.forecast.push({
          day: item.day,
          forecast: item.forecast,
          low: item.low.toString(),
          high: item.high.toString(),
          icon: item.icon
        })
      });
    });
  }

  async getWeatherFromApiAsync(locationId: string){
    var observation =await this.getWeatherObservationFromApiAsync(locationId);
    var forecast= await this.getWeatherForecastFromApiAsync(locationId);
    if (observation&&forecast) {
      observation.low=forecast[0].low;
      observation.high=forecast[0].high;
      observation.icon=forecast[0].icon;
    }
    var result ={
      id: locationId,
      freshness: new Date(),
      observation: observation,
      forecast: forecast
    };
    return result;
  }


  async getWeatherObservationFromApiAsync(locationId: string){
    var url = `${weatherApiUrl}/weather?id=${locationId}&units=metric&&appid=${weatherApiKey}`;
    console.log("====getWeatherObservationFromApiAsync=="+url);
    try {
      let response = await fetch(url);
      const result= await response.json();
      return {
          location: result.name,
          forecast: result.weather[0].main,
          feelsLike: (result.main.temp_min| 0),
          current: (result.main.temp| 0),
          low: '',
          high: '',
          icon: ''
      };
    } catch (e) {
      global.log(e);
    }
  }

  async getWeatherForecastFromApiAsync(locationId: string){
    var url= `${weatherApiUrl}/forecast/daily?id=${locationId}&cnt=7&units=metric&appid=${weatherApiKey}`;
    console.log("====getWeatherForecastFromApiAsync=="+url);
    try {
        let response= await fetch(url);
        const result = await response.json();
        return result.list.map((item,index)=>{
          return {
              day: this.getDayFromUtcDate(item.dt),
              forecast: item.weather[0].main,
              low: (item.temp.min| 0),
              high: (item.temp.max| 0),
              icon: item.weather[0].icon
          }
        });
    } catch (e) {
        global.log(e);
    }
  }

  async getWeathArrayFromApiAsync(locationIds: Array<string>){
    var data=[];
    for (var i = 0; i < locationIds.length; i++) {
      var locationId= locationIds[i];
      var result= await this.getWeatherFromApiAsync(locationId);
      data.push(result);
    }
    return data;
  }

}
module.exports = WeatherService;
