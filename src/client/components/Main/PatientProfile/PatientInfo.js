import React, { Component } from 'react';

const patient = {
  name: 'Jessica Jones',
  age: 36,
  gender: 'Female',
  dob: '11/12/79',
  address: '944 Market St, San Francisco, CA 94102',
  team: [],
  image: 'http://i988.photobucket.com/albums/af3/TheLightChasers/Portraits/portrait-sigma-50mm-f14-hsm-canon-eos-5d-mk2-face-Favimcom-473053_zpsd55e8d8e.jpg'
};

const PatientInfo = () => (
  <div className="panel panel-default patient-info-container">
    <div className="patient-info">
      <img src={patient.image} id="patient-image" alt="test" className="img-circle" />
    </div>
    <div className="patient-info">
      <h4>{patient.name}</h4>
      <p>Age: {patient.age}</p>
      <p>Gender: {patient.gender}</p>
      <p>DOB: {patient.dob}</p>
      <p>Address: {patient.address}</p>
    </div>
  </div>
);

export default PatientInfo;
