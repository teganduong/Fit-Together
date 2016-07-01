import d3 from 'd3';
const scale = 30;
const barPadding = 1;

/* eslint-disable func-names */
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
  constructor(el, props, dataset) {
    // currently only compatible with pixels
    // width, width padding, height, height padding, timeframe
    this.width = Number((props.width).match(/\d+/)) * 0.9;
    this.wPad = (props.width * 0.1) / 2;
    this.height = Number((props.height).match(/\d+/)) * 0.9;
    this.hPad = (props.height * 0.1) / 2;
    this.dataset = dataset;
    this.timeFrame = 30;
    this.dataType = 'quality';
    // svg element to draw on
    this.svg = d3.select(el).append('svg')
      .attr('class', 'd3')
      .attr('width', props.width)
      .attr('height', props.height);
    // set up attributes
    this.attr = {
      dataset: this.dataset,
      width: this.width,
      height: this.height,
      wPad: this.wPad,
      hPad: this.hPad,
      timeFrame: this.timeFrame,
      dataType: this.dataType
    };
  }

  makeBars(el, props, objects) {
    const attr = this.attr;
    const barWidth = this.width / this.timeFrame;
    const chartH = this.height;
    const units = this.units;
    const hPad = this.hPad;
    const wPad = this.wPad / 2;
    const dataset = this.dataset;
    this.svg.selectAll('rect')
      .data(dataset)  // array of daily sleep data
      .enter()
      .append('rect')   // create the bar graph
      .each(function (data, index) {
        // if based on time...
        //console.log('hey1', data);
        const i = getDaysDifference(dataset[0]['date_performed'], data.date_performed);
        console.log(i);
        // create bar graph based on x, y, width, and variant color
        console.log('chart height ', chartH);
        console.log('hey', data[attr.dataType]*scale);
        console.log('wpad ', wPad);
        d3.select(this)
          .attr({
            x: `${i * barWidth + barWidth/2 + wPad}`,
            y: `${chartH - (data[attr.dataType] * scale) - hPad}`,
            width: `${barWidth-0.5}`,
            height: `${data[attr.dataType] * scale}`,
            fill: `rgb(0, 0, ${Math.floor(data[attr.dataType] * scale)})`,
          });
      });
  }

  makeDataTexts(el, props, objects) {
    const attr = this.attr;
    // const dataset = sleepData;
    //  bar width based on chart width and number of data points
    // width based on chart width and number of data points
    const chartW = this.width;
    const chartH = this.height;
    const barWidth = chartW / this.timeFrame;
    const fontSize = barWidth * 0.7;
    const dataset = this.dataset;
    this.svg.selectAll('text')
    .data(dataset)  // array of daily sleep data
    .enter()
    .append('text')   // create the bar graph
    .each(function (d, index) {
      const i = getDaysDifference(dataset[0]['date_performed'], d.date_performed);
      // create bar graph based on x, y, width, and variant color
      d3.select(this)
        .attr({
          x: i * barWidth + barWidth / 2 + 10,
          y: chartH - (d[attr.dataType] * scale) + fontSize,
          fill: 'white',
          'font-family': 'sans-serif',
          'font-size': `${fontSize}px`,
          'text-anchor': 'middle',
        })
        .text(data => data.time);
    });
  }

  makeScatter(el, props, objects) {
    const rSize = 4;
    const attr = this.attr;
    const barWidth = attr.width / this.timeFrame - barPadding;
    this.svg.selectAll('circle')
    .data(dataset)  // array of daily sleep data
    .enter()
    .append('circle')   // create the bar graph
    .each(function (d, index) {
      const i = getDaysDifference(dataset[0]['date_performed'], d.date_performed);
      // create bar graph based on x, y, width, and variant color
      d3.select(this)
        .attr({
          cx: i * barWidth + attr.wPad + i + rSize,
          cy: attr.height - (d[attr.dataType] * scale) - attr.hPad,
          r: rSize,
          fill: datum => ("rgb(" + Math.floor(datum.time * scale) + ", 0, 0)"),
        });
    });
    console.log(getDateAxis(dataset[0].date, dataset[dataset.length-1].date));
  }

  makeScale(data, h, w, timeFrame) {
    const xScale = d3.scale.linear()
      .domain([0, timeFrame])
      .range([w[0], w[1]]);
    return xScale;    
  }

  makeAxis(m) {
    const attr = this.attr;
    const barWidth = attr.width / this.timeFrame;
    const mScale = this.makeScale(dataset, attr.height, [attr.wPad, attr.width+attr.wPad], attr.timeFrame);
    const mAxis = d3.svg.axis()
                    .scale(mScale)
                    .orient('bottom')
                    .ticks(5);
    this.svg.append('g')
            .attr('class', 'axis')
            .attr('transform', `translate(0,${attr.height - attr.hPad})`)
            .call(mAxis);
  }

  makeDateAxis(startDate, endDate, timeFrame) {
    timeFrame = this.timeFrame;
  }

}

export default d3ChartClass;
