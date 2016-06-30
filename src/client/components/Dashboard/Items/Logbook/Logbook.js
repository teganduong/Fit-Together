import React, { Component } from 'react';
import LogbookCard from './LogbookCard';
import LogbookMemView from './LogbookMemView';
import LogbookExerciseView from './LogbookExerciseView';
import LogbookFoodView from './LogbookFoodView';
import LogbookSleepView from './LogbookSleepView';
import LogData from './LogData';

class Logbook extends Component {
  constructor(props) {
    super(props);
    console.log('INSIDE LOGBOOK===>', props);
  }

  render() {
    return(
      <div className="main-container">
        <div className="log-container top-container">
          <div className="horizontal-dash debug">
            <p>Log Activity</p>
          </div>
          <div className="horizontal-dash debug">
            {LogData.map((card, index) => <LogbookCard card={card} key={index} />)}
          </div>
          <div className="horizontal-dash debug">
            <LogbookMemView addMem={this.props.addMem} />
            <LogbookExerciseView addFood={this.props.addFood} />
            <LogbookFoodView addExercise={this.props.addExercise} />
            <LogbookSleepView addSleep={this.props.addSleep} />
          </div>      
        </div>
      </div>
    )
  }
}

export default Logbook;