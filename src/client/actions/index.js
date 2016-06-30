import * as c from '../constants/constants';
import fetch from 'isomorphic-fetch';

export const error = err => ({ type: c.REQUEST_ERROR, data: err });
export const receiveUser = user => ({ type: c.RECEIVE_USER, data: user });
export const receiveUserTeams = teams => ({ type: c.RECEIVE_TEAMS, data: teams });
export const receiveTeamMembers = members => ({ type: c.RECEIVE_MEMBERS, data: members });
export const addToTeams = team => ({ type: c.CREATE_TEAM, data: team });
export const removeFromTeams = team => ({ type: c.REMOVE_TEAM, data: team });
export const receiveExercise = exercise => ({ type: c.RECEIVE_Exercise, data: exercise });
export const receiveOtherTeams = otherteams => ({ type: c.RECEIVE_OTHER_TEAMS, data: otherteams });
// export const receiveFood = food => ({ type: c.RECEIVE_FOOD, data: food });
// export const receiveMem = mem => ({ type: c.RECEIVE_MEM, data: mem });
// export const receiveSleep = sleep => ({ type: c.RECEIVE_SLEEP, data: sleep });

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

export const getUser = () => (
  dispatch => (
    fetch('/api/user', {
      credentials: 'same-origin'
    })
    .then(res => res.json())
    .then(userInfo => {
      console.log('userInfo inside getUser', userInfo); 
      return dispatch(receiveUser(userInfo[0]));
    })
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
    fetch('/api/userteams', {
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

export const fetchOtherTeams = (obj) => (
  dispatch => (
    fetch('/api/otherteams', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      credentials: 'same-origin',
      body: JSON.stringify(obj)
    })
    .then(res => res.json())
    .then(response => {
      console.log('response', response.data);
      dispatch(receiveOtherTeams(response.data));
    })
    .catch(err => dispatch(error(err)))
  )
);

export const fetchTeamMembers = (obj) => (
  dispatch => (
    fetch('/api/teammembers', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      credentials: 'same-origin',
      body: JSON.stringify(obj)
    })
    .then(res => res.json())
    .then(response => {
      console.log('response', response.data);
      dispatch(receiveTeamMembers(response.data));
    })
    .catch(err => dispatch(error(err)))
  )
);


export const createTeam = (obj) => {
  const payload = JSON.stringify(obj);

  return dispatch => (
    fetch('/api/createteam', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Content-length': payload.length,
      },
      credentials: 'same-origin',
      body: payload,
    })
    .then(res => res.json())
    .then(response => dispatch(addToTeams(response.data)))
    .catch(err => dispatch(error(err)))
  );
};

export const deleteTeam = (obj) => {
  const payload = JSON.stringify(obj);

  return dispatch => (
    fetch('/api/deleteteam', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Content-length': payload.length,
      },
      credentials: 'same-origin',
      body: payload,
    })
    .then(res => res.json())
    .then(response => {
      console.log('response', response.data);
      dispatch(removeFromTeams(response.data));
    })
    .catch(err => dispatch(error(err)))
  );
};

// export const checkAuth = () => {
//   return fetch('/api/checkAuth', {
//     credentials: 'same-origin' 
//   })
//   .then(response => response.json());
// };

// export const addFood = (date_performed, protein, fats, carbs, calories) => {
//   const payload = JSON.stringify({ date_performed, protein, fats, carbs, calories });
//   return dispatch => (
//     fetch('/api/users', {
//       method: 'POST',
//       headers: {
//         'Content-type': 'application/json',
//         'Content-length': payload.length,
//       },
//       credentials: 'same-origin',
//       body: payload,
//     })
//     .then(res => res.json())
//     .then(food => dispatch(receiveFood(food)))
//     .catch(err => dispatch(error(err)))
//   );
// };

// export const addMem = (date_performed, mood, energy, motivation) => {
//   const payload = JSON.stringify({ date_performed, mood, energy, motivation });
//   return dispatch => (
//     fetch('/api/users', {
//       method: 'POST',
//       headers: {
//         'Content-type': 'application/json',
//         'Content-length': payload.length,
//       },
//       credentials: 'same-origin',
//       body: payload,
//     })
//     .then(res => res.json())
//     .then(mem => dispatch(receiveMem(mem)))
//     .catch(err => dispatch(error(err)))
//   );
// };

// export const addSleep = (date_performed, duration, quality) => {
//   const payload = JSON.stringify({ date_performed, duration, quality });
//   return dispatch => {
//     fetch('/api/', {
//       method: 'POST',
//       headers: {
//         'Content-type': 'application/json',
//         'Content-length': payload.length,
//       },
//       credentials: 'same-origin',
//       body: payload,
//     })
//     .then(res => res.json())
//     .then(sleep => dispatch(receiveSleep(sleep)))
//     .catch(err => dispatch(error(err)))
//   );
//   }
// }
