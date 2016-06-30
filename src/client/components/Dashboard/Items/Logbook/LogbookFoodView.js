import React, { Component } from 'react';
import LogData from './LogData';
import moment from 'moment';

const today = moment().format("MM-DD-YYYY");

const LogbookFoodEntry = () => (
  <div className="log-activity">
    <p>Logging {LogData[0].name}</p>
    <p>Date: {today}</p>
    <table>
      <tr>{LogData[0].chart.map(heading => <th>{heading}</th>)}</tr>
      <tr>{LogData[0].chart.map(heading => <td><input type="text" /></td>)}
        <td><button>ADD</button></td></tr>
    </table>
  </div>
);

export default LogbookFoodEntry;
