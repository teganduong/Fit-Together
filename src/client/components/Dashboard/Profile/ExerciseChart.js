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
    console.log('this is exercise data', props);
  }

  componentWillReceiveProps(nextProps) {
    console.log('exercisechart', nextProps);
    this.exerciseData = nextProps.activities.data;
  }

  render() {  
    if (this.exerciseData) { 
      this.exerciseData = this.exerciseData[1].slice(-7).map(s => parseInt(s.duration, 10));
      console.log('this is exercise data', this.durationData);
      console.log('this is exercise with map data', this.exerciseData);
    }  
    const series = [{
      data: this.exerciseData
    }];
    console.log('this is duration', this.exerciseData);

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
