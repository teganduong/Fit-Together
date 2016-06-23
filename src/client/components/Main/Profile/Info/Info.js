// TODO: is this the user info we need?
// CHANGE info as needed
import React, { Component } from 'react';

const person = {
  name: 'Jessica Jones',
  age: 36,
  gender: 'Female',
  dob: '11/12/79',
  address: '944 Market St, San Francisco, CA 94102',
  team: [],
  image: 'http://i988.photobucket.com/albums/af3/TheLightChasers/Portraits/portrait-sigma-50mm-f14-hsm-canon-eos-5d-mk2-face-Favimcom-473053_zpsd55e8d8e.jpg'
};

const PatientInfo = () => (
  <div className="panel panel-default person-info-container">
    <div className="person-info">
      <img src={person.image} id="person-image" alt="test" className="img-circle" />
    </div>
    <div className="person-info">
      <h4>{person.name}</h4>
      <p>Age: {person.age}</p>
      <p>Gender: {person.gender}</p>
      <p>DOB: {person.dob}</p>
      <p>Address: {person.address}</p>
    </div>
  </div>
);

export default PatientInfo;
