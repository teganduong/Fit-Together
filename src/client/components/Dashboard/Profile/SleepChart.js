import React, { Component, PropTypes } from 'react';
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

class SleepChart extends Component {
  constructor(props) {
    super(props);
    const sleepData = [];
    console.log('inside sleep chart');
  }

  componentWillReceiveProps(nextProps) {
    console.log('sleep', nextProps);
    this.sleepData = nextProps.activities.data;
  }

  render() {
    if (this.sleepData) { 
      this.durationData = this.sleepData[0].slice(-7).map(s => parseInt(s.duration, 10));
      this.qualityData = this.sleepData[0].slice(-7).map(s => parseInt(s.quality, 10));

      console.log('this is sleep data', this.durationData);
      console.log('this is sleep with map data', this.sleepData);
    }  
    const series = [{
      data: this.durationData
    }, {
      data: this.qualityData
    }];
    console.log('this is duration', this.sleepData);

    return (
      <div className="sleep-chart-container">
        <div className="chart-title">Daily Sleep Quality and Duration</div>
        <Chart
          className="sleep-chart" 
          width={500} height={150} series={series} minY={0}
        >
          <Transform method="stack">
            <Lines asAreas={true} />
            <Dots />
          </Transform>
        </Chart>
      </div>

    );
  }
}

export default SleepChart;