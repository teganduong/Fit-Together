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
    field: 'BMI',
    name: 'BMI',
    color: '#ff7f0e'
  }
];

const Data = () => (
  <div className="data-container">
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
);

export default Data;
