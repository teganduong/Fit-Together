import {
  RECEIVE_USER,
  RECEIVE_TEAMS,
  RECEIVE_MEMBERS,
  CREATE_TEAM,
  REMOVE_TEAM,
  REQUEST_ERROR
  RECEIVE_EXERCISE,
  RECEIVE_FOOD,
  RECEIVE_MEM,
  RECEIVE_SLEEP,
} from '../constants/constants.js';

export const user = (state, action) => {
  switch (action.type) {
    case RECEIVE_USER: {
      return action.data || state;
    }
    default:
      return state || [];
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
    case REMOVE_TEAM: {
      return state.filter(c => c.id !== action.data.team_id);
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

export const activity = (state, action) => {
  switch (action.type) {
    case RECEIVE_EXERCISE: {
      return action.data || state;
    }
    case RECEIVE_FOOD: {
      return action.data || state;
    }
    case RECEIVE_MEM: {
      return action.data || state;
    }
    case RECEIVE_SLEEP: {
      return action.data || state;
    }
    default:
      return state || {};
  }
}