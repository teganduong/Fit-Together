// TODO: change reducers to fit our needs

import {
  ADD_DOCTOR,
} from '../actions/index.js';

export const doctor = (state, action) => {
  switch (action.type) {
    case ADD_DOCTOR: {
      return action.data || state;
    }
    default:
      return state || [];
  }
};
