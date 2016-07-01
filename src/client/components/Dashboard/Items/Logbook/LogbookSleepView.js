import React, { Component } from 'react';
import LogData from './LogData';
import moment from 'moment';

const today = moment().format("MM-DD-YYYY");

class LogbookSleepView extends Component {
  constructor(props) {
    super(props);
    console.log('INSIDE sleep', props);
  }

  handleSubmit(event) {
    event.preventDefault();
    const formData = {
      user_id: 1,
      duration: this.refs.duration.value,
      quality: this.refs.quality.value,
      date_performed: today,
    };
    this.props.addSleep(formData);
    console.log('added data');
  }

  render() {
    return (
      <div className="log-activity">
        <p>Logging {LogData[2].name}</p>
        <p>Date: {today}</p>
        <table>
          <tr>{LogData[2].chart.map(heading => <th>{heading}</th>)}</tr>
          <tr>{LogData[2].chart.map(heading => <td><input ref={heading} type="text" /></td>)}
          <td><button type="submit" onClick={this.handleSubmit.bind(this)}>ADD</button></td></tr>
        </table>
      </div>
    );
  }
}

export default LogbookSleepView;
