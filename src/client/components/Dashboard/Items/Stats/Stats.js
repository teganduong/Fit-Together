import React, { Component, PropTypes } from 'react';
import Chart from './Chart.js';
import sleepMemData from './dataSeedAlgo.js';
import D from './dataConstants.js';

let sleepData; 
let memData;
[sleepData, memData] = sleepMemData();
let dataset1 = sleepData;

const dummyData = [
  { id: '5fbmzmtc', x: 7, y: 41, z: 6 },
  { id: 's4f8phwm', x: 11, y: 45, z: 9 },
  // ...
];
const dummyDomain = { x: [0, 30], y: [0, 100] };

class Stats extends Component {
  constructor(props) {
    super(props);
    console.log('component constructor stats ', this.props);
    this.activities = this.props.activities;
    console.log(this.props.activities);
    // data constants
    this.D = D;
  }

  componentWillMount() {
    // this.props.getSleep();
  }

  componentDidMount() {
    // this.props.getSleep();
  }

  componentWillReceiveProps(propsSoon) {
    // this.sleep = propsSoon;
  }

  render() {
    const chartType = 'bar';
    const dataType = 'sleep';
    return (
      <div className="main-container">
        {console.log('===================================== inside render', this.props.activities, this.D)}
        <Chart 
          dataset={this.props.activities.data} 
          chartType={chartType} 
          dataTitle={dataType}
          D={this.D} 
        />
      </div>);
  }
}

Stats.propTypes = {
  getSleep: PropTypes.func,
  activities: PropTypes.object
};

export default Stats;
