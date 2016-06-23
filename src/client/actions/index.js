// Action Types
export const ADD_DOCTOR = 'ADD_DOCTOR';
export const ADD_USER = 'ADD_USER';
export const ERROR = 'ERROR';

const url = 'http://localhost:3000/api';

export const error = err => ({ type: 'ERROR', data: err });

export const addDoctor = doctor => {
  console.log('info for add doctor', doctor); 
  return { type: ADD_DOCTOR, data: doctor };
};

export const postDoc = (name, dob, office, phone, sex) => {
  const payload = JSON.stringify({ name, dob, office, phone, sex });
  return dispatch => (
    fetch(`${url}/doctors`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Content-length': payload.length,
      },
      credentials: 'same-origin',
      body: payload,
    })
    .then(res => res.json())
    .then(doc => dispatch(addDoctor(doc)))
    .catch(err => dispatch(error(err)))
  );
};

export const addUser = user => {
  console.log('info for add user', user); 
  return { type: ADD_USER, data: user };
};

export const postUser = (name, username, password, email, weight, bmi, goal, points) => {
  console.log('insider postuser here is the payload', name, username, password, email, weight, bmi, goal, points);
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
