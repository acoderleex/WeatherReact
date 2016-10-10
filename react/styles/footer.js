'use strict';

const FooterStyle = {
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 40,
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderTopWidth: 1,
    borderColor: '#c4c4c4'
  },
  left: {
    flex: 1,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  right: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row'
  }
};
module.exports = FooterStyle;
