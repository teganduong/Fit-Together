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
                <p className="profile-text-body">{this.exerciseData.slice(-3).map(e => 
                  <RecentExerciseActivityView type={e.type} duration={e.duration} date={e.date_performed} />
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
