import React, { Component, PropTypes } from 'react';

class Challenges extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-container">
        <div className="challenges-header">
          <div className="challenges-header-items">
            <h3>Challenges</h3>
          </div> 
        </div>
        <div>
          <div className="challenges-button-container">
            <button 
              type="button" 
              className="btn btn-success" 
              data-toggle="modal" 
              data-target="#chooseTeamModal"
            >
              Choose your Team
            </button>
          </div>
          <div className="challenges-button-container">
            <button 
              type="button" 
              className="btn btn-default" 
              data-toggle="modal" 
              data-target="#challengeTeamModal"
            >
              Challenge a Team
            </button>
          </div> 
        </div>
      </div>
    );
  }
}

export default Challenges;

