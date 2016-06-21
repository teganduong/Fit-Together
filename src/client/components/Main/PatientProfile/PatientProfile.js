import React, { Component } from 'react';
import PatientInfo from './PatientInfo';
import PatientRightInfo from './PatientRightInfo';
import PatientDetailedInfo from './PatientDetailedInfo';

const PatientProfile = () => (
  <div className="main-container">
    <div className="top-container">
      <PatientInfo />
      <PatientRightInfo />
      <PatientDetailedInfo />
    </div>
  </div>
);

export default PatientProfile;
