import React, { Component, PropTypes } from 'react';
const icon = {
  exercise: 'http://allmedcorp.com/wp-content/uploads/2014/05/New-Diet-Exercise-Guideline-Heart-Health1.jpg'
};

class RecentExerciseActivity extends Component {
  constructor(props) {
    super(props);
    console.log('RecentExerciseActivity here', props);
    const exerciseData = [];
  }

  componentWillReceiveProps(nextProps) {
    console.log('these are nextProps in RecentExerciseActivity activities', nextProps);
    this.exerciseData = nextProps.activities.activities.data;
  }

  render() {
    console.log('inside exercise render for exercise data!!!!!!!!!', this.exerciseData);

    if(this.exerciseData) {
    console.log('inside activities for excercise====', this.exerciseData); 
      this.type = this.exerciseData[1].slice(-3).map(s => s.type);
      this.duration = this.exerciseData[1].slice(-3).map(s => parseInt(s.duration));
      this.date_performed = this.exerciseData[1].slice(-3).map(s => s.date_performed.slice(1, -1));

      console.log('this is exercise with map data', this.date_performed);
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
                <li>
                  <p className="profile-text-body-title">Jessica Jones - 06/30/16</p>
                  <p className="profile-text-body">{this.type}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RecentExerciseActivity;
