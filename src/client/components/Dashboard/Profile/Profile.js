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
    console.log('this is profile props!!!!!!!!!!!!!!!!!', props);
  }

  render() {
    return (
      <div className="main-container">
        <div className="row">
          <div className="col-md-3">
            <ProfileBar fetchUser={this.props.fetchUser} />
          </div>
          <div className="col-md-6">
            <div className="row dummy">

            </div>
            <div className="row">
              <div className="col-md-6">
                <FoodChart activities={this.props.activities} />
              </div>
              <div className="col-md-6">
                <ExerciseChart activities={this.props.activities} />
              </div>
            </div>
            <div className="row">
              <MemChart activities={this.props.activities} />
            </div>
            <div className="row">
              <SleepChart activities={this.props.activities} />
            </div>
          </div>
          <div className="col-md-3">
            <ProfileActivityBar activities={this.props.activities} />
          </div>
        </div>
      </div>  
    );
  }
}

Profile.propTypes = {
  user: PropTypes.object,
  sleep: PropTypes.array
};

export default Profile;
