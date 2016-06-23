import React, { Component } from 'react';
import PatientInfo from '../PatientProfile/PatientInfo';
import PatientRightInfo from '../PatientProfile/PatientRightInfo';
import PatientDetailedInfo from '../PatientProfile/PatientDetailedInfo';
import BmiChart from '../PatientProfile/BmiChart';
import BpChart from '../PatientProfile/BpChart';
import WtChart from '../PatientProfile/WtChart';
import GlucoseChart from '../PatientProfile/GlucoseChart';

const Stats = () => (
  <div className="main-container">
  <div className="top-container">
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

export default Stats;
