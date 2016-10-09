'use strict';

import type { Action } from '../actions/types';

export type State = {
  isInitialised: bool;
};

const initial: State ={
  isInitialised: false
};

function location(state: State=initial,action: Action) :State {
  switch (action.type) {
    case 'LOCATION_INITIALISED':
      return {
        isInitialised: true
      };
      break;
    default:
        return state;
  }
};
module.exports = location;
