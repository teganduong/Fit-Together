import React, { Component } from 'react';
import Info from './Info/Info';
import RightInfo from './Info/RightInfo';
import DetailedInfo from './Info/DetailedInfo';
import BmiChart from './Charts/BmiChart';
import BpChart from './Charts/BpChart';
import WtChart from './Charts/WtChart';
import GlucoseChart from './Charts/GlucoseChart';

const Profile = () => (
  <div className="main-container">
    <div className="top-container">
      <Info />
      <RightInfo />
      <DetailedInfo />
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

export default Profile;
