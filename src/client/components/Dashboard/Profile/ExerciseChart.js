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
    if(this.exerciseData) { 
      this.exerciseData = this.exerciseData[1].slice(-7).map(s => parseInt(s.duration));
      console.log('this is exercise data', this.durationData);
      console.log('this is exercise with map data', this.exerciseData);
    }  
    const series = [{
      data: this.exerciseData
    }];
    console.log('this is duration', this.exerciseData);

    return (
      <div className="profile-chart-container">
        <Chart width={300} height={100} series={series} minY={0}>
          <Lines />
        </Chart>
      </div>
    );
  }
}

export default ExerciseChart;
