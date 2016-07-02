import React, { Component } from 'react';
import d3Chart from './d3Chart';
import sleepMemData from './dataSeedAlgo.js';
let sleepData; 
let memData;
[sleepData, memData] = sleepMemData();
let dataset1 = sleepData.slice(0, 10).concat(sleepData.slice(20));

class Chart extends Component {
  constructor(props) {
    super(props);
    this.svg = null;
    this.dataset = this.props.dataset;
    this.subdata = this.dataset;
    this.D = this.props.D;
  }

  componentWillMount() {
    this.preProcessData();
  }


  componentDidMount() {
    this.initChart();
  }

  preProcessData(data, type) {

  }

  initChart() {
    const maxWidth = '900';
    const maxHeight = '350';
    const D = this.D;
    console.log('alldata, ', this.subdata);
    console.log('ChartD', this.D);
    const svg = new d3Chart('#main-chart', { width: maxWidth, height: maxHeight, D: this.D }, this.subdata);
    svg.makeBars();
    console.log(svg);
    this.svg = svg;
    // this.svg.makeScatter();
    this.svg.makeAxis();
    this.svg.makeYAxis();
    this.svg.makeTitleButtons(D);
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

