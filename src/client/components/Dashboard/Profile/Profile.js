import React, { PropTypes, Component } from 'react';

import BmiChart from './Charts/BmiChart';

import ProfileBar from './ProfileBar.js';
import ProfileActivityBar from './ProfileActivityBar.js';
import SleepChart from './SleepChart.js';
import FoodChart from './FoodChart.js';
import MemChart from './MemChart.js';
import ExerciseChart from './ExerciseChart.js';

class Profile extends Component {
  constructor(props) {
    super(props);
    console.log('this is profile props', props);
  }

  render() {
    return (
      <div className="main-container">  
        <SleepChart activities={this.props.activities} />
        <FoodChart activities={this.props.activities} />
        <MemChart activities={this.props.activities} />
        <ExerciseChart activities={this.props.activities} />
        <ProfileActivityBar activities={this.props.activities} />
        <ProfileBar />
      </div>  
    );
  }
}

Profile.propTypes = {
  user: PropTypes.object,
  sleep: PropTypes.array
};

export default Profile;
