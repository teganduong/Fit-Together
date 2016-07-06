import React, { PropTypes } from 'react';

const Results = ({ score }) => (
  <div className="results">
    <h3>Current Score: {score}</h3>
  </div>
);

Results.propTypes = {
  score: PropTypes.number
};

export default Results;
