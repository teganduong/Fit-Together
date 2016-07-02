import React, { Component, PropTypes } from 'react';
const icon = {
  mem: 'http://rappingmanual.com/wp-content/uploads/2013/02/Motivate-self.jpg'
};

class RecentMemActivity extends Component {
  render() {
    return (
      <div>
        <div className="profile-activity-header">
          <div className="profile-text-header-container">
            <p className="profile-text-header">Recent Mem</p>
          </div>
        </div>
        <div className="profile-activity-body">
          <div className="profile-text-body-container">
            <div className="profile-body-left">
              <img src={icon.mem} className="activity-icon img-circle" alt="test" />
            </div>
            <div className="profile-body-right">
              <p className="profile-text-body-title">Jessica Jones - 06/30/16</p>
              <p className="profile-text-body">I ate food today, yayay!</p>
            </div>
          </div>
          <div className="profile-text-body-container">
            <div className="profile-body-left">
              <img src={icon.mem} className="activity-icon img-circle" alt="test" />
            </div>
            <div className="profile-body-right">
              <p className="profile-text-body-title">Jessica Jones - 06/30/16</p>
              <p className="profile-text-body">I ate food today, yayay!</p>
            </div>
          </div>
          <div className="profile-text-body-container">
            <div className="profile-body-left">
              <img src={icon.mem} className="activity-icon img-circle" alt="test" />
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

export default RecentMemActivity;
