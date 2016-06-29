import d3 from 'd3';
import sleepMemData from './dataSeedAlgo.js';
let sleepData; 
let memData;
[sleepData, memData] = sleepMemData();
const hours = sleepData.map(day => day.time);
console.log(hours);
const dataset = sleepData.slice(0, 10).concat(sleepData.slice(20));
console.log(dataset);

const getDaysDifference = (start, end) => {
  // 1000 milliseconds per sec; 60 sec per min; 60 min per hour; 24 hours per day 
  const convertToDays = (ms) => (((ms / 1000) / 60) / 60) / 24;

  const startTime = new Date(start).getTime();
  const endTime = new Date(end).getTime();
  return Math.floor(convertToDays(endTime - startTime));
};

// mapping a start date to a label
const getDateAxis = (startDate, endDate) => {
  const xScale = 10; // pixels

  return getDaysDifference(startDate, endDate);
};

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
    const scale = 25;
    const barPadding = 1;
    const chartW = 500;
    const chartH = 500; 
    // const dataset = sleepData;
    const numDataPoints = 30;
    // width based on chart width and number of data points
    const barWidth = chartW / numDataPoints;
    this.svg.selectAll('rect')
    .data(dataset)  // array of daily sleep data
    .enter()
    .append('rect')   // create the bar graph
    .each(function(d, index) {
      // if based on time...
      console.log(dataset[0]['date_performed'], d.date_performed);
      console.log(getDaysDifference(dataset[0]['date_performed'], d.date_performed));
      let i = getDaysDifference(dataset[0]['date_performed'], d.date_performed);
      // create bar graph based on x, y, width, and variant color
      d3.select(this)
        .attr({
          x: i * barWidth + 10,
          y: chartH - (d.time * scale),
          width: (barWidth - barPadding),
          fill: d => ("rgb(0, 0, " + Math.floor(d.time * scale) + ")"),
        });
    })
    .attr("height", function(d) {
        var barHeight = d.time * scale;  // Scale up by factor of 5
        return barHeight + "px";
    });
    console.log(getDateAxis(dataset[0].date, dataset[dataset.length-1].date));
  }

  makeDataTexts(el, props, objects) {
    const scale = 25;
    const barPadding = 1;
    const chartW = 500;
    const chartH = 500; 
    // const dataset = sleepData;
    //  bar width based on chart width and number of data points
    //  chartW / dataset.length
    const numDataPoints = 30;
    // width based on chart width and number of data points
    const barWidth = chartW / numDataPoints;
    const fontSize = barWidth * 0.7;
    this.svg.selectAll('text')
    .data(dataset)  // array of daily sleep data
    .enter()
    .append('text')   // create the bar graph
    .each(function(d, index) {
      let i = getDaysDifference(dataset[0]['date_performed'], d.date_performed);
      // create bar graph based on x, y, width, and variant color
      d3.select(this)
        .attr({
          x: i * barWidth + barWidth / 2 + 10,
          y: chartH - (d.time * scale) + fontSize,
          fill: 'white',
          'font-family': 'sans-serif',
          'font-size': `${fontSize}px`,
          'text-anchor': 'middle',
        })
        .text(d => d.time);
    });
  }

  makeScatter(el, props, objects) {
    const scale = 25;
    const barPadding = 1;
    const chartW = 500;
    const chartH = 500; 
    const rSize = 4;
    // const dataset = sleepData;
    //  width based on chart width and number of data points
    //  chartW / dataset.length

    //  chartW / dataset.length
    const numDataPoints = 30;
    // width based on chart width and number of data points
    const barWidth = chartW / numDataPoints - barPadding;
    this.svg.selectAll('circle')
    .data(dataset)  // array of daily sleep data
    .enter()
    .append('circle')   // create the bar graph
    .each(function(d, index) {
      const i = getDaysDifference(dataset[0]['date_performed'], d.date_performed);
      // create bar graph based on x, y, width, and variant color
      d3.select(this)
        .attr({
          cx: i * barWidth + barWidth / 2 + i + 10,
          cy: chartH - (d.time * scale),
          r: rSize,
          fill: datum => ("rgb(" + Math.floor(datum.time * scale) + ", 0, 0)"),
        });
    });
    console.log(getDateAxis(dataset[0].date, dataset[dataset.length-1].date));
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
