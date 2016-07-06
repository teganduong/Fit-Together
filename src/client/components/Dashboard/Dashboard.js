import React, { Component, PropTypes } from 'react';
import SideNavBar from './SideNavBar';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.props.getSleep();
    this.props.getUser();
    this.sleep = [];
    this.activities = [];
    this.props.getActivities();
    this.props.fetchTips();
  }

  // componentWillMount() {
  //   this.props.getUser();
  // }

  componentDidMount() {
    this.props.getUser();
  }

  componentWillReceiveProps(nextProps) {
    console.log('these are nextProps in dashboard', nextProps);
    // this.sleep = nextProps.sleep;
    // console.log('adfasdfas', parseFloat(this.sleep[0].quality), parseFloat('7.7'));
    // let num = 0;
    // const test = this.sleep.map(function(s) {
    //   const q = parseFloat(s.quality);
    //   const d = parseFloat(s.duration);
    //   s.quality = q;
    //   s.duration = d;
    //   s.index = num;
    //   num++;
    //   return s;
    // });
    // this.sleep = test;
    this.activities = nextProps.activities;
  }

  render() {
    const { user } = this.props;
    const { activities } = this.activities; 

    return (
      <div>
        <SideNavBar />
          {this.props.children && React.cloneElement(this.props.children, {
            user: user,
            // sleep: this.sleep,
            activities: this.activities
          })}
      </div>
    );
  }
}

Dashboard.propTypes = {
  children: PropTypes.element.isRequired,
  getUser: PropTypes.func,
  user: PropTypes.object,
  activities: PropTypes.object,
  getSleep: PropTypes.func,
  sleep: PropTypes.array,
  getActivities: PropTypes.func,
  fetchTips: PropTypes.func
};