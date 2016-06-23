// TODO: change reducers to fit our needs

import {
  ADD_USER,
} from '../actions/index.js';

export const user = (state, action) => {
  switch (action.type) {
    case ADD_USER: {
      return action.data || state;
    }
    default:
      return state || [];
  }
};
