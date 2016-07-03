import React, { Component, PropTypes } from 'react';
import Chart from './Chart.js';
import sleepMemData from './dataSeedAlgo.js';
import D from './dataConstants.js';

class Stats extends Component {
  constructor(props) {
    super(props);
    console.log('component constructor stats ', this.props);
    this.activities = this.props.activities;
    console.log(this.props.activities);
    // data constants
    this.D = D;
    this.dataNum = 0;
    this.fieldNum = 0;
    this.state = {
      xdataNum: 2,
      xfieldNum: 0,
      ydataNum: 2,
      yfieldNum: 0,
    };
  }

  componentWillMount() {
    // this.props.getSleep();
  }

  componentDidMount() {
    // this.props.getSleep();
  }

  componentWillReceiveProps(propsSoon) {
    // this.sleep = propsSoon;
  }

  xsetDataNum(xdataNum) {
    console.log('clicked!!!'); //
    this.setState({ xdataNum, xfieldNum: 0 });
  }

  xsetFieldNum(xfieldNum) {
    console.log('clicked!!!'); //
    this.setState({ xfieldNum });
  }

  ysetDataNum(ydataNum) {
    console.log('clicked!!!'); //
    this.setState({ ydataNum, yfieldNum: 0 });
  }

  ysetFieldNum(yfieldNum) {
    console.log('clicked!!!'); //
    this.setState({ yfieldNum });
  }

  render() {
    const chartType = 'bar';
    const dataType = 'sleep';
    return (
      <div className="main-container">
        
        <div className="stats-box debug">
          {console.log('===================================== inside render', this.state)}       
          <Chart 
            dataset={this.props.activities.data} 
            chartType={chartType}
            xyDataType={this.state}
            dataTitle={dataType}
            D={this.D}
            size={{ height: '445', width: '445'}} 
            id='small_chart'
          />
        </div>
        <div className="stats-box debug">
          <div className="stats-box inner">
            <h1>X-Axis</h1>
            <div>
              {D.map((dayData, index) => 
                <button 
                  className="stats-axis-type" 
                  onClick={this.xsetDataNum.bind(this, index)}
                >{dayData.title}</button>)
                }
            </div>
            <div>
              {D[this.state.xdataNum].fields.map((fields, index) => 
                <button 
                  className="stats-axis-type" 
                  onClick={this.xsetFieldNum.bind(this, index)}
                >{fields}</button>)
                }
            </div>
          </div>
          <div className="stats-box inner">
            <h1>Y-Axis</h1>
            <div>
              {D.map((dayData, index) => 
                <button 
                  className="stats-axis-type" 
                  onClick={this.ysetDataNum.bind(this, index)}
                >{dayData.title}</button>)
                }
            </div>
            <div>
              {D[this.state.ydataNum].fields.map((fields, index) => 
                <button 
                  className="stats-axis-type" 
                  onClick={this.ysetFieldNum.bind(this, index)}
                >{fields}</button>)
                }
            </div>
          </div>
        </div>
        <Chart 
          dataset={this.props.activities.data} 
          chartType={chartType} 
          dataTitle={dataType}
          D={this.D} 
          size={{ height: '350', width: '900' }}
          id='big_chart' 
        />
      </div>);
  }
}

Stats.propTypes = {
  getSleep: PropTypes.func,
  activities: PropTypes.object
};

export default Stats;
