import React, { Component } from 'react';
import d3Chart from './d3Chart';
import sleepMemData from './dataSeedAlgo.js';
let sleepData; 
let memData;
[sleepData, memData] = sleepMemData();
let dataset1 = sleepData.slice(0, 10).concat(sleepData.slice(20));


console.log(d3Chart);
class Chart extends Component {
  constructor(props) {
    super(props);
    this.svg = null;
    this.dataset = this.props.dataset;
  }

  componentDidMount() {
    this.initChart();
  }

  initChart() {
    const maxWidth = '900';
    const maxHeight = '600';
    const svg = new d3Chart('#main-chart', { width: maxWidth, height: maxHeight }, this.dataset);
    svg.makeBars();
    console.log(svg);
    this.svg = svg;
    this.svg.makeDataTexts();
    this.svg.makeScatter();
    this.svg.makeAxis();
  }

  render() {
    return (
      <div className="chart" id="main-chart"></div>
    );
  }
}

Chart.propTypes = {
  data: React.PropTypes.array,
  domain: React.PropTypes.object
};

export default Chart;

