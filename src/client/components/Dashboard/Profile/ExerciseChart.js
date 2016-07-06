import React, { Component, PropTypes } from 'react';

const {
  Chart, 
  Bars, Cloud, Dots, Labels, Lines, Pies, RadialLines, Ticks, Title,
  DropShadow, Gradient, helpers
} = require('rumble-charts');

class ExerciseChart extends Component {
  constructor(props) {
    super(props);
    const exerciseData = [];
  }

  componentWillReceiveProps(nextProps) {
    this.exerciseData = nextProps.activities.data;
  }

  render() {  
    if (this.exerciseData) { 
      this.exerciseData = this.exerciseData[1].slice(-7).map(s => parseInt(s.duration, 10));
    }  
    const series = [{
      data: this.exerciseData
    }];

    return (
      <div className="exercise-chart-container">
        <div className="chart-title">Daily Exercise Duration</div>
        <Chart 
          className="exercise-chart"
          width={200} height={150} 
          series={series} minY={0}
        >
          <Lines />
        </Chart>
        <div className="chart-result">15:30</div>
      </div>
    );
  }
}

export default ExerciseChart;
