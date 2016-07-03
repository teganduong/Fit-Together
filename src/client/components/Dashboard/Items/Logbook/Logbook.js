import React, { Component, PropTypes } from 'react';
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
      <div className="main-log-container" >
        <div className="log-container top-container">
          <div className="horizontal-dash debug">
            <p>Log Activity</p>
          </div>
          <div className="horizontal-dash debug">
            {LogData.map((card, index) => <LogbookCard card={card} key={index} onClick={this.handleClick} />)}
          </div>
          <div className="horizontal-dash debug">
            <LogbookMemView addMem={this.props.addMem} />
            <LogbookExerciseView addExercise={this.props.addExercise} />
            <LogbookFoodView addFood={this.props.addFood} />
            <LogbookSleepView addSleep={this.props.addSleep} />
          </div>      
        </div>
      </div>
    )
  }
}

Logbook.propTypes = {
  adMem: PropTypes.func,
  addExercise: PropTypes.func,
  addFood: PropTypes.func,
  addSleep: PropTypes.func
};

export default Logbook;