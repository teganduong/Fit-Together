import React, { Component, PropTypes } from 'react';
import RecentExerciseActivityView from './RecentExerciseActivityView';

const icon = {
  exercise: 'http://allmedcorp.com/wp-content/uploads/2014/05/New-Diet-Exercise-Guideline-Heart-Health1.jpg'
};

class RecentExerciseActivity extends Component {
  constructor(props) {
    super(props);
    console.log('RecentExerciseActivity here', props);
    this.exerciseData = [1, 2, 3];
  }

  componentWillReceiveProps(nextProps) {
    console.log('these are nextProps in RecentExerciseActivity activities', nextProps);
    this.exerciseData = nextProps.activities.activities.data[1];
  }

  render() {
    console.log('inside exercise render for exercise data!', this.exerciseData);
    this.type = [1, 2, 3];
    this.duration = [1, 2, 3];
    this.date_performed = [1, 2, 3];

    if(this.exerciseData) {
    console.log('inside activities for excercise====', this.exerciseData); 
      this.type = this.exerciseData.slice(-3).map(s => s.type);
      this.duration = this.exerciseData.slice(-3).map(s => parseInt(s.duration));
      this.date_performed = this.exerciseData.slice(-3).map(s => s.date_performed);

      console.log('this is exercise with map data', this.type, this.duration, this.date_performed);
    }
    return (
      <div>
        <div className="profile-activity-header">
          <div className="profile-text-header-container">
            <p className="profile-text-header">Recent Exercise</p>
          </div>
        </div>
        <div className="profile-activity-body">
          <div className="profile-text-body-container">
            <div className="profile-body-left">
              <ul>
                <img src={icon.exercise} className="activity-icon img-circle" alt="test" />
              </ul>
            </div>
            <div className="profile-body-right">
              <ul>
                <p className="profile-text-body-title">Jessica Jones - 06/30/16</p>
                <p className="profile-text-body">{this.type.map(type => 
                  <RecentExerciseActivityView type={type} />
                )}
                </p>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RecentExerciseActivity;
