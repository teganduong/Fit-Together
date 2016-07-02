import React, { Component, PropTypes } from 'react';
const icon = {
  exercise: 'http://allmedcorp.com/wp-content/uploads/2014/05/New-Diet-Exercise-Guideline-Heart-Health1.jpg'
};

class RecentExerciseActivity extends Component {
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
              <img src={icon.exercise} className="activity-icon img-circle" alt="test" />
            </div>
            <div className="profile-body-right">
              <p className="profile-text-body-title">Jessica Jones - 06/30/16</p>
              <p className="profile-text-body">I ate food today, yayay!</p>
            </div>
          </div>
          <div className="profile-text-body-container">
            <div className="profile-body-left">
              <img src={icon.exercise} className="activity-icon img-circle" alt="test" />
            </div>
            <div className="profile-body-right">
              <p className="profile-text-body-title">Jessica Jones - 06/30/16</p>
              <p className="profile-text-body">I ate food today, yayay!</p>
            </div>
          </div>
          <div className="profile-text-body-container">
            <div className="profile-body-left">
              <img src={icon.exercise} className="activity-icon img-circle" alt="test" />
            </div>
            <div className="profile-body-right">
              <p className="profile-text-body-title">Jessica Jones - 06/30/16</p>
              <p className="profile-text-body">I ate food today, yayay!</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RecentExerciseActivity;
