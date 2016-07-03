import d3 from 'd3';
const barPadding = 1;

/* eslint-disable func-names */
const getDaysDifference = (start, end) => {
  // 1000 milliseconds per sec; 60 sec per min; 60 min per hour; 24 hours per day 
  const convertToDays = (ms) => (((ms / 1000) / 60) / 60) / 24;

  const startTime = new Date(start).getTime();
  const endTime = new Date(end).getTime();
  return Math.floor(convertToDays(endTime - startTime));
};

const getTrendLine = (xdataset, ydataset, xfield, yfield) => {
  const xReduceSum = (sum, dayData) => sum + dayData[xfield];
  const yReduceSum = (sum, dayData) => sum + dayData[yfield];
  const xBar = xdataset.reduce(xReduceSum) / xdataset.length;
  const yBar = ydataset.reduce(yReduceSum) / ydataset.length;

};

// mapping a start date to a label
const getDateAxis = (startDate, endDate) => {
  const xScale = 10; // pixels

  return getDaysDifference(startDate, endDate);
};

class d3ChartClass {
  constructor(el, props, allData, xyDataType) {
    // currently only compatible with pixels
    // width, width padding, height, height padding, timeframe
    this.width = Number((props.width).match(/\d+/)) * 0.83;
    this.wPad = (props.width * 0.17) / 2;
    this.height = Number((props.height).match(/\d+/)) * 0.92;
    this.hPad = (props.height * 0.08) / 2;
    this.timeFrame = 30;
    this.dataNum = 0;
    this.dataFieldNum = 0;
    this.allData = allData;
    this.D = props.D;
    this.dataset = allData[this.dataNum];
    this.dataType = (this.D)[this.dataNum].fields[this.dataFieldNum];
    // this.dataTypes = this.props.dataTitles; // this.dataset.fields[0];
    // this.dataType = this.dataTypes[0].fields[0];
    // svg element to draw on
    this.svg = d3.select(el).append('svg')
      .attr('class', 'd3')
      .attr('width', props.width)
      .attr('height', props.height);

    this.state = {
      xyDataType
    };
    
    // set up initial attributes
    this.attr = {
      allData: this.allData,
      dataset: this.dataset,
      width: this.width,
      height: this.height,
      wPad: this.wPad,
      hPad: this.hPad,
      timeFrame: this.timeFrame,
      dataNum: this.dataNum,
      dataFieldNum: this.dataFieldNum,
      dataType: this.dataType,
      D: this.D,
      scale: 1
    };
  }

  updateDataTypes() {

  }

  preProcessDataXy(xyDataType) {
    // TODO: RETURN DATA FOR A SPECIFIC XDATANUM AND XFIELDNUM
    const attr = this.attr;
    // data for one
    console.log('preprocess: ', xyDataType);
    const xdataset = (attr.allData)[xyDataType.xdataNum];
    const xdataType = (attr.D)[xyDataType.xdataNum].fields[xyDataType.xfieldNum];
    const ydataset = (attr.allData)[xyDataType.ydataNum];
    const ydataType = (attr.D)[xyDataType.ydataNum].fields[xyDataType.yfieldNum];

    // TODO: Aggregate array of data based on dates, or have the x,y dataset arrays
    // be in order of dates (which it is now w/ the dummy data)
    const xydataset = [];
    for (let i = 0; i < xdataset.length; i++) {
      const datapoint = { x: xdataset[i], y: ydataset[i] };
      xydataset.push(datapoint);
    }

    return ({ xdataset, xdataType, ydataset, ydataType, xydataset });
  }

  makeScatterXy(xyDataType) {
    // make scatter plot
    const xyData = this.preProcessDataXy(xyDataType);

    const rSize = 4;
    const attr = this.attr;
    const barWidth = attr.width / this.timeFrame - barPadding;
    const dataset = xyData.xydataset;
    const scale = (attr.D)[attr.dataNum].scale;
    const xScale = this.makeXScale(xyData.xdataset, xyData.xdataType);
    const yScale = this.makeYScale2(xyData.ydataset, xyData.ydataType);

    this.makeXAxis2(xyData.xdataset, xyData.xdataType);
    this.makeYAxis2(xyData.ydataset, xyData.ydataType);
    this.makeTitle('x', 0);
    this.makeTitle('y', 0);
    this.svg.selectAll('circle.plot')
    .data(dataset)  // array of daily sleep data
    .enter()
    .append('circle')   // create the bar graph
    .attr('class', 'plot')
    .each(function (dayData, index) {
      // create bar graph based on x, y, width, and variant color
      d3.select(this)
        .attr({
          cx: `${xScale(dayData[xyData.xdataType])}`, // i * barWidth + attr.wPad + i + rSize,
          cy: `${yScale(dayData[xyData.ydataType])}`, // attr.height - (d[attr.dataType] * scale) - attr.hPad,
          r: rSize,
          fill: datum => ("rgb(" + Math.floor(yScale(datum[xyData.xdataType])) + ", 0, 0)"),
        });
    });    
  }

  /////////////////// maybe the scale stays the same??????? //////////////
  updateScatterXy(xyDataType) {
    // make scatter plot
    const xyData = this.preProcessDataXy(xyDataType);
    console.log('in update, xyData: ', xyData);
    const rSize = 4;
    const attr = this.attr;
    const dataset = xyData.xydataset;
    const scale = (attr.D)[attr.dataNum].scale;
    const xScale = this.makeXScale(xyData.xdataset, xyData.xdataType);
    const yScale = this.makeYScale2(xyData.ydataset, xyData.ydataType);
    this.updateTitle('x', xyDataType.xdataNum, xyDataType.xfieldNum);
    this.updateTitle('y', xyDataType.ydataNum, xyDataType.yfieldNum);
    this.updateXAxis2(xyData.xdataset, xyData.xdataType);
    this.updateYAxis2(xyData.ydataset, xyData.ydataType);
    console.log('all for dataset in update scatter ', dataset);
    this.svg.selectAll('circle.plot')
    .data(dataset)
    .each(function (dayData, index) {
      // create bar graph based on x, y, width, and variant color
      console.log('xydata: ', xyData, ' xdataType: ', xyData.xdataType);
      console.log('day data: ', dayData);
      console.log('x dayData: ', (dayData)[xyData.xdataType], ' scaled: ', xScale(dayData[xyData.xdataType]));
      d3.select(this)
        .transition()
        .attr({
          cx: `${Number(xScale(dayData.x[xyData.xdataType]))}`, // i * barWidth + attr.wPad + i + rSize,
          cy: `${Number(yScale(dayData.y[xyData.ydataType]))}`, // attr.height - (d[attr.dataType] * scale) - attr.hPad,
          r: rSize,
          fill: datum => ("rgb(" + Math.floor(yScale(datum[xyData.xdataType])) + ", 0, 0)"),
        });
    });    
  }

  makeBars(el, props, objects) {
    const attr = this.attr;
    const barWidth = this.width / this.timeFrame;
    const chartH = this.height;
    const hPad = this.hPad;
    const wPad = this.wPad / 2;
    const dataset = this.allData[attr.dataNum];
    const dataType = (attr.D)[attr.dataNum].fields[attr.dataFieldNum];
    const scale = (attr.D)[attr.dataNum].scale;
    console.log('dataset should change ', dataset, dataType);
    this.svg.selectAll('rect.bar')
      .data(dataset)  // array of daily sleep data
      .enter()
      .append('rect')   // create the bar graph
      .attr('class', 'bar')
      .each(function (data, index) {
        // if based on time...
        //console.log('hey1', data);
        const i = getDaysDifference(dataset[0]['date_performed'], data.date_performed);
        console.log(i);
        // create bar graph based on x, y, width, and variant color
        d3.select(this)
          .attr({
            x: `${i * (barWidth) + barWidth + wPad}`,
            y: `${chartH - (data[dataType] * scale) - hPad}`,
            width: `${barWidth-1}`,
            height: `${data[dataType] * scale}`,
            fill: `rgb(0, 0, ${Math.floor(data[dataType] * scale)})`,
          });
      });
  }

  updateBars(el, props, objects) {
    const attr = this.attr;
    const barWidth = this.width / this.timeFrame;
    const chartH = this.height;
    const hPad = this.hPad;
    const wPad = this.wPad / 2;
    const dataset = this.allData[attr.dataNum];
    const dataType = (attr.D)[attr.dataNum].fields[attr.dataFieldNum];
    // const scale = (attr.D)[attr.dataNum].scale;
    const yScale = this.makeYScale();
    console.log('dataset should change ', dataset, dataType);
    this.svg.selectAll('rect.bar')
      .data(dataset)  // array of daily sleep data
      .each(function (data, index) {
        // if based on time...
        //console.log('hey1', data);
        const i = getDaysDifference(dataset[0]['date_performed'], data.date_performed);
        console.log(i);
        // create bar graph based on x, y, width, and variant color
        d3.select(this)
          .transition()
          .attr({
            x: `${i * barWidth + barWidth + wPad}`,
            y: `${(yScale(data[dataType]))}`,
            width: `${barWidth-1}`,
            height: `${attr.height - attr.hPad - yScale(data[dataType])}`,
            fill: `rgb(0, 0, ${Math.floor(yScale(data[dataType]))} )`,
            // fill: `#${Math.floor(yScale(0x00)}8B8B))}`
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
    // make scatter plot
    const rSize = 4;
    const attr = this.attr;
    const barWidth = attr.width / this.timeFrame - barPadding;
    const dataset = attr.dataset;
    const scale = (attr.D)[attr.dataNum].scale;

    this.svg.selectAll('circle')
    .data(dataset)  // array of daily sleep data
    .enter()
    .append('circle')   // create the bar graph
    .each(function (d, index) {
      // create bar graph based on x, y, width, and variant color
      d3.select(this)
        .attr({
          cx: i * barWidth + attr.wPad + i + rSize,
          cy: attr.height - (d[attr.dataType] * scale) - attr.hPad,
          r: rSize,
          fill: datum => ("rgb(" + Math.floor(datum.time * scale) + ", 0, 0)"),
        });
    });
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
    const mScale = this.makeScale(attr.dataset, attr.height, [attr.wPad, attr.width+attr.wPad], attr.timeFrame);
    const mAxis = d3.svg.axis()
                    .scale(mScale)
                    .orient('bottom')
                    .ticks(5);
    this.svg.append('g')
            .attr('class', 'axis')
            .attr('transform', `translate(0,${attr.height - attr.hPad})`)
            .call(mAxis);
  }

  makeXScale(dataset, dataType) {
    const attr = this.attr;
    const quantities = (dataset).map(dayData => Number(dayData[dataType]));
    console.log('data type, quants make x scale..... ', dataset, quantities);
    const xScale = d3.scale.linear()
      .domain([0, Math.max(...quantities)])
      .range([attr.wPad, attr.wPad + attr.width]);
    console.log('xCales for this ---------------------------------', xScale);
    return xScale; 
  }

  makeXAxis(ds) {
    const attr = this.attr;
    console.log('attr', attr);
    const dataType = (attr.D)[attr.dataNum].fields[attr.dataFieldNum];
    console.log('set in x axis', ds);
    const mScale = this.makeXScale(ds);
    // this.makeScale(attr.dataset, attr.height, [attr.wPad, attr.width+attr.wPad], attr.timeFrame);
    const mAxis = d3.svg.axis()
                    .scale(mScale)
                    .orient('bottom')
                    .ticks(5);
    this.svg.append('g')
            .attr('class', 'x axis')
            .attr('transform', `translate(0,${attr.height - attr.hPad})`)
            .call(mAxis);
  }

  makeXAxis2(dataset, dataType) {
    const attr = this.attr;
    const mScale = this.makeXScale(dataset, dataType);
    // this.makeScale(attr.dataset, attr.height, [attr.wPad, attr.width+attr.wPad], attr.timeFrame);
    const mAxis = d3.svg.axis()
                    .scale(mScale)
                    .orient('bottom')
                    .ticks(5);
    this.svg.append('g')
            .attr('class', 'x axis')
            .attr('transform', `translate(0,${attr.height - attr.hPad})`)
            .call(mAxis);
  }

  updateXAxis2(dataset, dataType) {
    const attr = this.attr;
    const mScale = this.makeXScale(dataset, dataType);
    // this.makeScale(attr.dataset, attr.height, [attr.wPad, attr.width+attr.wPad], attr.timeFrame);
    const mAxis = d3.svg.axis()
                    .scale(mScale)
                    .orient('bottom')
                    .ticks(5);
    this.svg.select('.x')
            .transition()
            .call(mAxis);
  }  


  makeYScale2(dataset, dataType) {
    const attr = this.attr;
    const quantities = (dataset).map(dayData => Number(dayData[dataType]));
    console.log('data type, quants ', dataType, quantities);
    const yScale = d3.scale.linear()
      .domain([0, Math.max(...quantities)])
      .range([attr.height - attr.hPad, attr.hPad]);   
    return yScale; 
  }

  makeYAxis2(dataset, dataType) {
    const attr = this.attr;
    const barWidth = attr.width / this.timeFrame;
    const mScale = this.makeYScale(dataset);
    // this.makeScale(attr.dataset, attr.height, [attr.wPad, attr.width+attr.wPad], attr.timeFrame);
    const mAxis = d3.svg.axis()
                    .scale(mScale)
                    .orient('left')
                    .ticks(5);
    this.svg.append('g')
            .attr('class', 'y axis')
            .attr('transform', `translate(${attr.wPad}, 0)`)
            .call(mAxis);
  }

  updateYAxis2(dataset, dataType) {
    const attr = this.attr;
    const quantities = (dataset).map(dayData => Number(dayData[dataType]));
    const mScale = d3.scale.linear()
                     .domain([0, Math.max(...quantities)])
                     .range([attr.height - attr.hPad, attr.hPad]);
    const mAxis = d3.svg.axis()
                    .scale(mScale)
                    .orient('left')
                    .ticks(5);
    this.svg.select('.y') // append('g')
            .transition()
            .call(mAxis);
  }  

  makeYScale(data) {
    const attr = this.attr;
    const quantities = (attr.dataset).map(dayData => Number(dayData[attr.dataType]));
    console.log('data type, quants ', attr.dataType, quantities);
    const yScale = d3.scale.linear()
      .domain([0, Math.max(...quantities)])
      .range([attr.height - attr.hPad, attr.hPad]);   
    return yScale; 
  }

  makeYAxis(m) {
    const attr = this.attr;
    console.log('attr', attr);
    const barWidth = attr.width / this.timeFrame;
    const dataType = (attr.D)[attr.dataNum].fields[attr.dataFieldNum];
    console.log('set in y axis', attr.dataset);
    const mScale = this.makeYScale(attr.dataset);
    // this.makeScale(attr.dataset, attr.height, [attr.wPad, attr.width+attr.wPad], attr.timeFrame);
    const mAxis = d3.svg.axis()
                    .scale(mScale)
                    .orient('left')
                    .ticks(5);
    this.svg.append('g')
            .attr('class', 'y axis')
            .attr('transform', `translate(${this.wPad}, 0)`)
            .call(mAxis);
  }



  makeTitleButtons(D, options) {
    console.log('MAKING TITLES!!!', D);
    const context = this;
    // const dataset = sleepData;
    //  bar width based on chart width and number of data points
    // width based on chart width and number of data points
    const attr = this.attr;
    const titles = D.map(category => category.title);
    const barWidth = attr.width / titles.length;
    const fontSize = barWidth * 0.1;
    console.log('Actual titles ', titles);
    this.svg.selectAll('text.title')
    .data(titles)  // array of daily titles
    .enter()
    .append('text')   // create the bar graph
    .attr('class', 'title')
    .each(function (d, index) {
      // create bar graph based on x, y, width, and variant color
      d3.select(this)
        .attr({
          x: index * barWidth + barWidth / 2 + 10,
          y: attr.height / 0.9 - 10,
          fill: 'grey',
          'font-family': 'sans-serif',
          'font-size': `${fontSize}px`,
          'text-anchor': 'middle',
        })
        .text(d)
        .on('click', function () {
          attr.dataNum = index;
          attr.dataFieldNum = 0;
          const dataType = (attr.D)[attr.dataNum].fields[attr.dataFieldNum];
          attr.dataType = dataType;
          console.log('i am clicked ', attr.dataNum);
          attr.dataset = attr.allData[attr.dataNum];
          const quantities = (attr.dataset).map(dayData => Number(dayData[dataType]));
          attr.scale = quantities;
          context.svg.selectAll('text.title')
            .attr('fill', 'grey');
          d3.select(this)
            .attr('fill', 'red');
          context.updateBars();
          context.updateYAxis();
        });
    });
  }

  updateYAxis() {
    const attr = this.attr;
    const dataType = (attr.D)[attr.dataNum].fields[attr.dataFieldNum];
    console.log('set in y axis', attr.dataset);
    const quantities = (attr.dataset).map(dayData => Number(dayData[dataType]));
    console.log('data type, quants ', dataType, quantities);
    const mScale = d3.scale.linear()
                     .domain([0, Math.max(...quantities)])
                     .range([attr.height - attr.hPad, attr.hPad]);
    // this.makeScale(attr.dataset, attr.height, [attr.wPad, attr.width+attr.wPad], attr.timeFrame);
    const mAxis = d3.svg.axis()
                    .scale(mScale)
                    .orient('left')
                    .ticks(5);
    console.log('max ', Math.max(...quantities));
    this.svg.select('.y') // append('g')
            .transition()
            .call(mAxis);
  }

  makeTitle(axis, dataNum) {
    const attr = this.attr;
    const fontSize = '20';
    console.log('called... ');
    if (axis === 'x') {
      console.log('in here... ');
      this.svg.selectAll('text.x.title')
        .data([dataNum])
        .enter()
        .append('text')
        .attr('class', 'x title')
        .attr({
          x: attr.width / 2 - attr.wPad,
          y: attr.height - 2 * attr.hPad,
          'font-family': 'sans-serif',
          'font-size': `${fontSize}px`,
        })
        .text('Hello!');
    } else if (axis === 'y') {
      this.svg.selectAll('text.y.title')
        .data([dataNum])
        .enter()
        .append('text')
        .attr('class', 'y title')
        .attr({
          x: 2 * attr.wPad,
          y: attr.hPad,
          'font-family': 'sans-serif',
          'font-size': `${fontSize}px`,
        })
        .text('Hello!');      
    }
  }

  updateTitle(axis, dataNum, fieldNum) {
    const attr = this.attr;
    if (axis === 'x') {
      this.svg.selectAll('text.x.title')
        .text(`x: ${(attr.D)[dataNum].title} ${(attr.D)[dataNum].fields[fieldNum]}`);
    } else if (axis === 'y') {
      this.svg.selectAll('text.y.title')
        .text(`y: ${(attr.D)[dataNum].title} ${(attr.D)[dataNum].fields[fieldNum]}`);
    }
  }

}

export default d3ChartClass;
