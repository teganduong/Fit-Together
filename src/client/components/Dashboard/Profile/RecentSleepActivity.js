import React, { Component, PropTypes } from 'react';
import RecentSleepActivityView from './RecentSleepActivityView';

const icon = {
  sleep: 'http://i4.mirror.co.uk/incoming/article2367811.ece/ALTERNATES/s615/Man-sleeping-and-snoring-overhead-view.jpg'
};

class RecentSleepActivity extends Component {
  constructor(props) {
    super(props);
    console.log('recent Sleep here', props);
    this.SleepData = [1, 2, 3];
  }

  componentWillReceiveProps(nextProps) {
    console.log('these are nextProps in RecentSleepActivity activities', nextProps);
    this.SleepData = nextProps.activities.activities.data[0];
    console.log('INSIDE Sleep PROFILE PAGE', this.SleepData);
  }

  render() {
    return (
      <div>
        <div className="profile-activity-header">
          <div className="profile-text-header-container">
            <p className="profile-text-header">Recent Sleep</p>
          </div>
        </div>
        <div className="profile-activity-body">
          <div className="profile-text-body-container">
            <div className="profile-body-left">
              <ul>
                <img src={icon.Sleep} className="activity-icon img-circle" alt="test" />
              </ul>
            </div>
            <div className="profile-body-right">
              <ul>
                <p className="profile-text-body">{this.SleepData.slice(-3).map(m => 
                  <RecentSleepActivityView duration={m.duration} quality={m.quality} date={m.date_performed} />
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

export default RecentSleepActivity;
