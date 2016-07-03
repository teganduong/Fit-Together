import React, { Component, PropTypes } from 'react';
import SleepChart from './SleepChart.js';
import FoodChart from './FoodChart.js';
import MemChart from './MemChart.js';
import ExerciseChart from './ExerciseChart.js';

class Charts extends Component {
  render() {
    return (
      <div>
          <SleepChart />
          <FoodChart />
          <MemChart />
          <ExerciseChart />
      </div>
    ); 
  }
}

export default Charts;
