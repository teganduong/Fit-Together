import React, { Component, PropTypes } from 'react';
import { LineChart, BarChart } from 'react-d3-basic';
import chartData from '../DummyData';

const title = 'User sample';
const x = d => d.duration;
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
    field: 'quality',
    name: 'quality vs. duration',
    color: '#ff7f0e'
  }
];

const BmiChart = ({ sleep }) => (
  <div className="team-list-container">
    <LineChart
      margins={margins}
      title={title}
      data={sleep}
      width={width}
      height={height}
      chartSeries={chartSeries}
      x={x}
    />
  </div>
);

BmiChart.propTypes = {
  sleep: PropTypes.array
};

export default BmiChart;
