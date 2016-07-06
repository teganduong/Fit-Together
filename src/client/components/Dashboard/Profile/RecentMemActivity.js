import React, { Component, PropTypes } from 'react';
import RecentMemActivityView from './RecentMemActivityView';

const icon = {
  mem: 'http://rappingmanual.com/wp-content/uploads/2013/02/Motivate-self.jpg'
};

class RecentMemActivity extends Component {
  constructor(props) {
    super(props);
    console.log('recent Mem here', props);
    this.MemData = [1, 2, 3];
  }

  componentWillReceiveProps(nextProps) {
    console.log('these are nextProps in RecentMemActivity activities', nextProps);
    this.MemData = nextProps.activities.activities.data[3];
    console.log('INSIDE mem PROFILE PAGE', this.MemData);
  }

  render() {
    return (
      <div>
        <div className="profile-activity-header">
          <div className="profile-text-header-container">
            <img src={icon.Mem} className="activity-icon img-circle" alt="test" />
            <p className="profile-text-header">Recent Mem</p>
          </div>
        </div>
        <div className="profile-activity-body">
          <div className="profile-text-body-container">
            <ul>
              <p className="profile-text-body">{this.MemData.slice(-3).map(m => 
                <RecentMemActivityView mood={m.mood} energy={m.energy} motivation={m.motivation} date={m.date_performed} />
              )}
              </p>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default RecentMemActivity;
