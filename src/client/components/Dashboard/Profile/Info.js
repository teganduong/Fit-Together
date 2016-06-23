// TODO: is this the user info we need?
// CHANGE info as needed
import React, { Component } from 'react';

const user = {
  name: 'Jessica Jones',
  age: 36,
  gender: 'Female',
  dob: '11/12/79',
  address: '944 Market St, San Francisco, CA 94102',
  team: [],
  image: 'http://i988.photobucket.com/albums/af3/TheLightChasers/Portraits/portrait-sigma-50mm-f14-hsm-canon-eos-5d-mk2-face-Favimcom-473053_zpsd55e8d8e.jpg'
};

const Info = () => (
  <div className="panel panel-default user-info-container">
    <div className="user-info">
      <img src={user.image} id="user-image" alt="test" className="img-circle" />
    </div>
    <div className="user-info">
      <h4>{user.name}</h4>
      <p>Age: {user.age}</p>
      <p>Gender: {user.gender}</p>
      <p>DOB: {user.dob}</p>
      <p>Address: {user.address}</p>
    </div>
  </div>
);

export default Info;
