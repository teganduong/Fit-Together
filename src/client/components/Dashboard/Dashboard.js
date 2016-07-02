import React, { Component, PropTypes } from 'react';
import SideNavBar from './SideNavBar';
import Settings from './Items/Settings/Settings';
import Profile from './Profile/Profile';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.props.getSleep();
    this.props.getUser();
    this.sleep = [];
    this.props.getActivities();
  }

  componentWillMount() {
    this.props.getUser();
  }

  componentWillReceiveProps(nextProps) {
    console.log('these are nextProps in dashboard', nextProps);
    this.sleep = nextProps.sleep;
    console.log('adfasdfas', parseFloat(this.sleep[0].quality), parseFloat('7.7'));
    let num = 0;
    const test = this.sleep.map(s => {
      const q = parseFloat(s.quality);
      const d = parseFloat(s.duration);
      s.quality = q;
      s.duration = d;
      s.index = num;
      num++;
      return s;
    });
    this.sleep = test;
  }

  render() {
    const { user } = this.props;

    return (
      <div>
        <div>
          <SideNavBar />
        </div>
        <div>
          <Settings />
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  children: PropTypes.element.isRequired,
  getUser: PropTypes.func,
  user: PropTypes.object,
  getSleep: PropTypes.func,
  sleep: PropTypes.array,
  getActivities: PropTypes.func
};

