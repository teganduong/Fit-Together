import React, { PropTypes } from 'react';

import BmiChart from './Charts/BmiChart';

import ProfileBar from './ProfileBar.js';
import ProfileActivityBar from './ProfileActivityBar.js';
import SleepChart from './SleepChart.js';
import FoodChart from './FoodChart.js';
import MemChart from './MemChart.js';
import ExerciseChart from './ExerciseChart.js';

const Profile = ({ user, sleep }) => (
  <div className="main-container">
  
    <div className="chart-row">
      <div className="chart-item">
        <MemChart />
      </div>
      <div className="chart-item">
        <MemChart />
      </div>
      <div className="chart-item">
        <MemChart />
      </div>
    </div>
    <ProfileActivityBar />
    <ProfileBar />
  </div>
);

Profile.propTypes = {
  user: PropTypes.object,
  sleep: PropTypes.array
};

export default Profile;
