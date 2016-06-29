import React, { Component } from 'react';
import BmiChart from '../Profile/Charts/BmiChart';
import BpChart from '../Profile/Charts/BpChart';
import WtChart from '../Profile/Charts/WtChart';
import GlucoseChart from '../Profile/Charts/GlucoseChart';
import Chart from './Stats/Chart.js';

const dummyData = [
  { id: '5fbmzmtc', x: 7, y: 41, z: 6 },
  { id: 's4f8phwm', x: 11, y: 45, z: 9 },
  // ...
];
const dummyDomain = { x: [0, 30], y: [0, 100] };

const Stats = () => (
  <div className="main-container">
    <Chart />
  </div>
);

export default Stats;
