'use strict';

import {
    Dimensions
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

const HeaderStyle= {
  headerViewAnimated: {
    width: SCREEN_WIDTH,
    position: 'absolute'
  },
  titleViewAnimated: {
    width: SCREEN_WIDTH,
    position: 'absolute'
  },
  headerView: {
    marginRight: 5,
    marginLeft: 5
  },
  location: {
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 35,
    color: '#fff'
  },
  forecast: {
    fontSize: 14,
    textAlign: 'center',
    paddingTop: 3,
    color: '#fff'
  },
  stickyHeaderView: {
    paddingTop: 24,
    paddingLeft: 12,
    flexDirection: 'row'
  },
  stickyHeaderLocation: {
    color: '#fff',
    fontWeight: 'bold',
    marginRight: 6
  },
  stickyHeaderToday: {
    color: '#fff'
  },
  centerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10
  },
  centerImageView: {
    paddingRight: 20
  },
  currentTemp: {
    color: '#fff',
    fontSize: 44,
    fontWeight: '300'
  },
  feelsLike: {
    color: '#fff',
    fontSize: 12
  },
  bottomView: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft: 12,
    paddingRight: 12,
    marginTop: 40
  },
  bottomViewLeft: {
    flex: 1,
    flexDirection: 'row'
  },
  bottomViewToday: {
    color: '#fff',
    fontWeight: 'bold',
    marginRight: 6
  },
  bottomViewTodayDate: {
    color: '#fff'
  },
  bottomViewRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  low: {
    color: '#fff',
    marginRight: 10,
    fontSize: 18,
    fontWeight: '300',
    width: 20,
    textAlign: 'right',
  },
  high: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 18,
    width: 20,
    textAlign: 'right',
  },
  childrenView: {
    top: -30
  }
};
module.exports = HeaderStyle ;
