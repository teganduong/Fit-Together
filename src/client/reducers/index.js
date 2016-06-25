// TODO: change reducers to fit our needs

import {
  RECEIVE_USER,
} from '../actions/index.js';

export const user = (state, action) => {
  switch (action.type) {
    case RECEIVE_USER: {
      return action.data || state;
    }
    default:
      return state || [];
  }
};
