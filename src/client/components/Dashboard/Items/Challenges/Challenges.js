import React, { Component, PropTypes } from 'react';
import Map from './Map';

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
        <Map />
      </div>
    );
  }
}

export default Challenges;
