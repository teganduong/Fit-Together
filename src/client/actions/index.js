import * as types from '../constants/actionTypes';

export const error = err => ({ type: 'ERROR', data: err });

export const addUser = user => {
  console.log('info for add user', user); 
  return { type: ADD_USER, data: user };
};

export const postUser = (name, username, password, email, weight, bmi, goal, points) => {
  const payload = JSON.stringify({ name, username, password, email, weight, bmi, goal, points });

  return dispatch => (
    fetch('/api/user', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Content-length': payload.length,
      },
      credentials: 'same-origin',
      body: payload,
    })
    .then(res => res.json())
    .then(user => dispatch(addUser(user)))
    .catch(err => dispatch(error(err)))
  );
};
