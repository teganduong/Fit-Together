import {
  RECEIVE_USER,
  RECEIVE_TEAMS,
  RECEIVE_OTHER_TEAMS,
  RECEIVE_MEMBERS,
  CREATE_TEAM,
  REMOVE_TEAM,
  REQUEST_ERROR,
  RECEIVE_EXERCISE,
  RECEIVE_FOOD,
  RECEIVE_MEM,
  RECEIVE_ACTIVITIES,
  RECEIVE_SLEEP,
  RECEIVE_ENTRIES,
  JOIN_TEAM,
  REMOVE_OTHER_TEAM,
  ADD_OTHER_TEAM,
  RECEIVE_MESSAGES
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
    case REMOVE_TEAM: {
      console.log('action.data', action.data.team_id);
      return state.filter(c => {
        console.log('c.team_id', c, c.team_id);
        return c.team_id.toString() !== action.data.team_id.toString();
      });
    }
    case JOIN_TEAM: {
      return state.concat([action.data]);
    }
    case RECEIVE_MESSAGES: {
      return state.concat([action.data]);
    }
    default:
      return state || {};
  }
};

export const otherteams = (state, action) => {
  switch (action.type) {
    case RECEIVE_OTHER_TEAMS: {
      return action.data || state;
    }
    case ADD_OTHER_TEAM: {
      console.log('we in', state, action.data);
      return state.concat([action.data]);
    }
    case REMOVE_OTHER_TEAM: {
      console.log('action.data', action.data.team_id);
      return state.filter(c => {
        console.log('c.team_id', c, c.team_id);
        return c.team_id.toString() !== action.data.team_id.toString();
      });
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


export const sleep = (state, action) => {
  switch (action.type) {
    case RECEIVE_SLEEP: {
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

export const activities = (state, action) => {
  switch (action.type) {
    case RECEIVE_ACTIVITIES: {
      return action.data || state;
    }
    default:
      return state || {};
  }
};

export const entries = (state, action) => {
  switch (action.type) {
    case RECEIVE_ENTRIES: {
      return action.data || state;
    }
    default:
      return state || [];
  }
};