import React, { Component, PropTypes } from 'react';
import RecentFoodActivity from './RecentFoodActivity.js';
import RecentExerciseActivity from './RecentExerciseActivity.js';
import RecentSleepActivity from './RecentSleepActivity.js';
import RecentMemActivity from './RecentMemActivity.js';

class ProfileActivityBar extends Component {
  render() {
    return (
      <div>
        <div className="profile-activity-bar">
          <RecentFoodActivity />
          <RecentExerciseActivity />
          <RecentSleepActivity />
          <RecentMemActivity />
        </div>
      </div>
    ); 
  }
}

export default ProfileActivityBar;
