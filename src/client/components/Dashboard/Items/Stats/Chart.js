import React, { Component } from 'react';
import d3Chart from './d3Chart';
console.log(d3Chart);
class Chart extends Component {
  constructor(props) {
    super(props);
    this.svg = null;
  }

  componentDidMount() {
    this.initChart();
  }

  initChart() {
    const svg = new d3Chart('#main-chart', { width: '100%', height: '100%' }, null);
    svg.makeBars();
    console.log(svg);
    this.svg = svg;
    this.svg.makeDataTexts();
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

