import React, { Component } from 'react';
import LogData from './LogData';
import moment from 'moment';

const today = moment().format("MM-DD-YYYY");

const LogbookSleepView = () => (
  <div className="log-activity">
    <p>Logging {LogData[2].name}</p>
    <p>Date: {today}</p>
    <table>
      <tr>{LogData[2].chart.map(heading => <th>{heading}</th>)}</tr>
      <tr>{LogData[2].chart.map(heading => <td><input type="text" /></td>)}
        <td><button>ADD</button></td></tr>
    </table>
  </div>
);

export default LogbookSleepView;
