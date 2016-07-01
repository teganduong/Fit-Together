import React, { Component, PropTypes } from 'react';
import LogData from './LogData';
import moment from 'moment';

const today = moment().format("MM-DD-YYYY");

class LogbookExerciseView extends Component {
  constructor(props) {
    super(props);
    console.log('INSIDE log exercise', props);
  }

  handleSubmit(event) {
    event.preventDefault();
    const formData = {
      type: this.refs.type.value,
      duration: this.refs.duration.value,
      distance: this.refs.distance.value,
      reps: this.refs.reps.value,
      sets: this.refs.sets.value,
      date_performed: today,
      user_id: 1
    };
    this.props.addExercise(formData);
    console.log('added data');
  }

  render() {
    return (
      <div className="log-activity">
        <p>Logging {LogData[1].name}</p>
        <p>Date: {today}</p>
        <table>
          <tr>{LogData[1].chart.map(heading => <th>{heading}</th>)}</tr>
          <tr>{LogData[1].chart.map(heading => <td><input ref={heading} type="text" /></td>)}
          <td><button type="submit" onClick={this.handleSubmit.bind(this)}>ADD</button></td></tr>
        </table>
      </div>
    );
  }
}

LogbookExerciseView.propTypes = {
  addExercise: PropTypes.func
};

export default LogbookExerciseView;
