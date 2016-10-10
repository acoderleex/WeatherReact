'use strict';
const ForecastStyle = {
  forecastView: {
    marginLeft: 5,
    marginRight: 5,
    flexDirection: 'row',
    borderColor: '#e2e2e2',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 3
  },
  forecastList: {
    flex: 1,
    borderColor: '#E2E2E2',
    paddingLeft: 12,
    paddingRight: 12
  },
  forecastItem: {
    paddingTop: 10,
    paddingBottom: 8,
    flexDirection: 'row'
  },
  forecastItemDayView: {
    flex: 1
  },
  forecastItemDataView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  forecastItemTemp: {
    textAlign: 'right',
    marginLeft: 14,
    width: 18
  }
};
module.exports =  ForecastStyle;
