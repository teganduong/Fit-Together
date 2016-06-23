// TODO: CHANGE redux actions
export const ADD_DOCTOR = 'ADD_DOCTOR';
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

