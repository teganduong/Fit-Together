// Action Types
export const ADD_USER = 'ADD_USER';
export const ERROR = 'ERROR';

const url = 'http://localhost:3000/api';

export const error = err => ({ type: 'ERROR', data: err });

export const addUser = user => {
  return { type: ADD_USER, data: user };
};

export const postUser = (name, username, password, email, weight, bmi, goal, points) => {
  const payload = JSON.stringify({ name, username, password, email, weight, bmi, goal, points });

  return dispatch => (
    fetch(`${url}/users`, {
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
