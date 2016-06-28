import {
  RECEIVE_USER,
  RECEIVE_TEAMS,
  RECEIVE_MEMBERS,
  CREATE_TEAM,
  REQUEST_ERROR
} from '../constants/constants.js';

export const user = (state, action) => {
  switch (action.type) {
    case RECEIVE_USER: {
      return action.data || state;
    }
    default:
      return state || {};
  }
};

export const teams = (state, action) => {
  switch (action.type) {
    case RECEIVE_TEAMS: {
      return action.data || state;
    }
    case CREATE_TEAM: {
      return state.concat([action.data]);
    }
    default:
      return state || {};
  }
};

export const members = (state, action) => {
  switch (action.type) {
    case RECEIVE_MEMBERS: {
      return action.data || state;
    }
    default:
      return state || {};
  }
};

export const error = (state, action) => {
  switch (action.type) {
    case REQUEST_ERROR: {
      return action.data || state;
    }
    default:
      return state || {};
  }
};
