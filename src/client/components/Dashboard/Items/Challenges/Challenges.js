import React, { Component, PropTypes } from 'react';
import Map from './Map';

class Challenges extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-container">
        <div className="challenge-header">
          <div>
            <p>Challenges</p>
          </div>
        </div>
        <Map />
      </div>
    );
  }
}

export default Challenges;
