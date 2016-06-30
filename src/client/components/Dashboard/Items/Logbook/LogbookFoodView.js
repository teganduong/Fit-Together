import React, { Component } from 'react';
import LogData from './LogData';
import moment from 'moment';

const today = moment().format("MM-DD-YYYY");

class LogbookFoodView extends Component {
  constructor(props) {
    super(props);
    console.log('INSIDE LOGBOOKENERGY', props);
  }

  handleSubmit(event) {
    event.preventDefault();
    const formData = {
      date_performed: today,
      protein: this.refs.protein.value,
      fats: this.refs.fats.value,
      carbs: this.refs.carbs.value,
      calories: this.refs.calories.value,
    };
    this.props.addFood(formData);
    console.log('added data');
  }

  render() {
    return (
      <div className="log-activity">
        <p>Logging {LogData[0].name}</p>
        <p>Date: {today}</p>
        <table>
          <tr>{LogData[0].chart.map(heading => <th>{heading}</th>)}</tr>
          <tr>{LogData[0].chart.map(heading => <td><input ref={heading} type="text" /></td>)}
          <td><button type="submit" onClick={this.handleSubmit.bind(this)}>ADD</button></td></tr>
        </table>
      </div>
    );
  }
}

export default LogbookFoodView;
