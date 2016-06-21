import React, { Component } from 'react';
import PatientInfo from './PatientInfo';
import PatientRightInfo from './PatientRightInfo';
import PatientDetailedInfo from './PatientDetailedInfo';
import Data from './Data';


const PatientProfile = () => (
  <div className="main-container">
    <div className="top-container">
      <PatientInfo />
      <PatientRightInfo />
      <PatientDetailedInfo />
      <Data />
    </div>
  </div>
);

export default PatientProfile;
