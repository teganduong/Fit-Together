import d3 from 'd3';
import sleepMemData from './dataSeedAlgo.js';
let sleepData; 
let memData;
[sleepData, memData] = sleepMemData();
const hours = sleepData.map(day => day.time);
console.log(hours);

class d3ChartClass {
  constructor(el, props, state) {
    this.width = props.width;
    this.svg = d3.select(el).append('svg')
      .attr('class', 'd3')
      .attr('width', props.width)
      .attr('height', props.height);
  }

  makeCircle(el, props) {
    this.svg.append('circle')
    .attr('cx', '200')
    .attr('cy', '25')
    .attr('r', 22);
  }

  makeBars(el, props, objects) {
    this.svg.selectAll('rect')
    .data(sleepData)  // array of daily sleep data
    .enter()
    .append('rect')
    .each(function(d, i) {
      d3.select(this)
        .attr({
          x: i*10 + 1,
          y: 100,
          width: 10
        });
    })
    .attr('class', 'bar')
    .attr("height", function(d) {
        var barHeight = d.time * 5;  // Scale up by factor of 5
        return barHeight + "px";
    });
  }
}

// const d3Chart = {};

// console.log(sleepData);
// console.log(memData);
// d3Chart.create = function(el, props, state) {
//   const svg = d3.select(el).append('svg')
//       .attr('class', 'd3')
//       .attr('width', props.width)
//       .attr('height', props.height);

//   svg.append('g');

//   // this.update(el, state);
//   return svg;
// };

// d3Chart.makeCircle = function(el, props) {
//   d3.select(el).append('circle')
//     .attr('cx', '25')
//     .attr('cy', '25')
//     .attr('r', 22);
// };

// d3Chart.create('#main-chart', { width: '100px', height: '100px' }, null);


// d3Chart.update = function(el, state) {
//   // Re-compute the scales, and render the data points
//   var scales = this._scales(el, state.domain);
//   this._drawPoints(el, scales, state.data);
// };

// d3Chart.destroy = function(el) {
//   // Any clean-up would go here
//   // in this example there is nothing to do
// };

// d3Chart._drawPoints = function(el, scales, data) {
//   var g = d3.select(el).selectAll('.d3-points');

//   var point = g.selectAll('.d3-point')
//     .data(data, function(d) { return d.id; });

//   // ENTER
//   point.enter().append('circle')
//       .attr('class', 'd3-point');

//   // ENTER & UPDATE
//   point.attr('cx', function(d) { return scales.x(d.x); })
//       .attr('cy', function(d) { return scales.y(d.y); })
//       .attr('r', function(d) { return scales.z(d.z); });

//   // EXIT
//   point.exit()
//       .remove();
// };

export default d3ChartClass;
