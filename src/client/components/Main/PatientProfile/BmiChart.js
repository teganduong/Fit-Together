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
    field: 'bmi',
    name: 'BMI',
    color: '#ff7f0e'
  }
];

const BmiChart = () => (
  <div className="data-container">
    <div className="panel panel-default chart-container">
      <div className="panel-heading" id="bmi-heading">
        <h3 className="panel-title">Body Mass Index</h3>
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
          <h2 id="bmi-output">28.6 kg/m2</h2>
        </div>
      </div>
    </div>
  </div>
);

export default BmiChart;
