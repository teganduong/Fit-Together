import React, { Component } from 'react';
import { LineChart, BarChart } from 'react-d3-basic';
import chartData from './DummyData';

const title = 'User sample';
const x = d => d.index;
const width = 500;
const height = 300;
const margins = {
  left: 100, 
  right: 100, 
  top: 50, 
  bottom: 50
};
const chartSeries = [
  {
    field: 'glucose',
    name: 'Glucose',
    color: '#43abd9'
  },
];

const GlucoseChart = () => (
  <div className="data-container">
    <div className="panel panel-default chart-container">
      <div className="panel-heading" id="glucose-heading">
        <h3 className="panel-title">Glucose Level</h3>
      </div>
      <div className="panel-body">
        <div className="row chart">
          <LineChart
            margins={margins}
            title={title}
            data={chartData}
            width={width}
            height={height}
            chartSeries={chartSeries}
            x={x}
          />
        </div>
        <div className="row chart-info">
          <p>As of: 02-Mar-2016 at 22:28</p>
          <h2 id="glucose-output">127 mg/dL</h2>
        </div>
      </div>
    </div>
  </div>
);

export default GlucoseChart;
