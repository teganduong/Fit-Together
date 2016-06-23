import React, { Component } from 'react';
import BmiChart from '../Profile/Charts/BmiChart';
import BpChart from '../Profile/Charts/BpChart';
import WtChart from '../Profile/Charts/WtChart';
import GlucoseChart from '../Profile/Charts/GlucoseChart';

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
