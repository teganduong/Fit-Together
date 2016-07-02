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
    this.height=this.props.size.height;
    this.width=this.props.size.width;
    this.id = this.props.id;
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
    const maxWidth = this.width;
    const maxHeight = this.height;
    const D = this.D;
    console.log('alldata, ', this.subdata);
    console.log('ChartD', this.D);
    const svg = new d3Chart(`#${this.id}`, { width: maxWidth, height: maxHeight, D: this.D }, this.subdata);
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
      <div className="chart" id={this.id}></div>
    );
  }
}

Chart.propTypes = {
  data: React.PropTypes.array,
  domain: React.PropTypes.object
};

export default Chart;

