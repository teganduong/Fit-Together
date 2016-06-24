import * as c from '../constants/constants';

export const error = err => ({ type: c.ERROR, data: err });

export const receiveUser = user => {
  return { type: c.RECEIVE_USER, data: user };
};

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


export const fetchUser = (userId) => (
  dispatch => (
    fetch(`/api/users/${userId}`, {
      credentials: 'same-origin'
    })
    .then(res => res.json())
    .then(userInfo => dispatch(receiveUser(userInfo)))
    .catch(err => dispatch(error(err)))
  )
);

export const updateUserInfo = (userInfo) => {
  const info = JSON.stringify({ userInfo });
  return dispatch => (
    fetch(`/api/users/${userInfo.userId}`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      credentials: 'same-origin',
      body: info,
    })
    .then(() => dispatch({ type: c.UPDATE_USER_INFO, data: userInfo }))
    .then(() => dispatch(fetchUser()))
    .catch(err => dispatch(error(err)))
  );
};
