import React, { Component, PropTypes } from 'react';
import MemData from './MemData';
const {
  // main component
  Chart, 
  // graphs
  Bars, Cloud, Dots, Labels, Lines, Pies, RadialLines, Ticks, Title,
  // wrappers
  Layer, Animate, Transform, Handlers,
  // helpers
  DropShadow, Gradient, helpers
} = require('rumble-charts');

class MemChart extends Component {
  constructor(props) {
    super(props);
    const moodData = [];
    const motivationData = [];
    const energyData = [];
    console.log('inside mem chart', props);
  }

  componentWillReceiveProps(nextProps) {
    console.log('exercisechart', nextProps);
    this.moodData = nextProps.activities.data;
    this.motivationData = nextProps.activities.data;
    this.energyData = nextProps.activities.data;
  }

  render() {
    console.log('this is mood data', this.moodData);
    if (this.moodData) { 
      this.moodData = MemData.slice(-7).map(s => parseInt(s.mood, 10));
      this.energyData = MemData.slice(-7).map(s => parseInt(s.energy, 10));
      this.motivationData = MemData.slice(-7).map(s => parseInt(s.motivation, 10));
    }  

    const series = [{
      data: this.moodData
    }, {
      data: this.energyData
    }, {
      data: this.motivationData
    }];


    console.log('this is mood!', this.moodData);

    return (
      <div className="mem-chart-container">
        <div className="chart-title">Mood, Energy, Motivation</div>
        <Chart
          className="mem-chart" 
          width={500} height={150} series={series} minY={0}

        >
          <Lines />
        </Chart>

      </div>

    );
  }
}

export default MemChart;
