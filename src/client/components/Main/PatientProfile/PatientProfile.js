import React, { Component } from 'react';
import PatientInfo from './PatientInfo';
import PatientRightInfo from './PatientRightInfo';
import PatientDetailedInfo from './PatientDetailedInfo';
import BmiChart from './BmiChart';
import BpChart from './BpChart';
import WtChart from './WtChart';
import GlucoseChart from './GlucoseChart';

const PatientProfile = () => (
  <div className="main-container">
    <div className="top-container">
      <PatientInfo />
      <PatientRightInfo />
      <PatientDetailedInfo />
      <div>
        <BmiChart />
        <BpChart />
      </div>
      <div>
        <WtChart />
        <GlucoseChart />
      </div>
    </div>
  </div>
);

export default PatientProfile;
