import * as c from '../constants/constants';
import fetch from 'isomorphic-fetch';

export const error = err => ({ type: c.REQUEST_ERROR, data: err });
export const receiveUser = user => ({ type: c.RECEIVE_USER, data: user });
export const receiveUserTeams = teams => ({ type: c.RECEIVE_TEAMS, data: teams });

export const addUser = (name, username, password, email, weight, bmi, goal, points) => {
  const payload = JSON.stringify({ name, username, password, email, weight, bmi, goal, points });

  return dispatch => (
    fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Content-length': payload.length,
      },
      credentials: 'same-origin',
      body: payload,
    })
    .then(res => res.json())
    .then(user => dispatch(receiveUser(user)))
    .catch(err => dispatch(error(err)))
  );
};

export const fetchUser = (username) => (

  dispatch => (
    fetch(`/api/users/${username}`, {
      credentials: 'same-origin'
    })
    .then(res => res.json())
    .then(userInfo => dispatch(receiveUser(userInfo)))
    .catch(err => dispatch(error(err)))
  )
);

export const updateUser = (userInfo) => {
  const info = JSON.stringify({ userInfo });
  return dispatch => (
    fetch('/api/users', {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      credentials: 'same-origin',
      body: info,
    })
    .then(() => dispatch({ type: c.UPDATE_USER, data: userInfo }))
    .then(() => dispatch(fetchUser()))
    .catch(err => dispatch(error(err)))
  );
};

export const fetchUserTeams = (obj) => (
  dispatch => (
    fetch('/userteams', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      credentials: 'same-origin',
      body: JSON.stringify(obj)
    })
    .then(res => res.json())
    .then(response => {
      dispatch(receiveUserTeams(response.data));
    })
    .catch(err => dispatch(error(err)))
  )
);
