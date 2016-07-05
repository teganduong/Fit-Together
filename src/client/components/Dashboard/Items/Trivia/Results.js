import React, { PropTypes } from 'react';

const Results = ({ score }) => (
  <div className="results col-sm-3">
    <h3>Current Score: {score}</h3>
  </div>
);

Results.propTypes = {
  score: PropTypes.number
};

export default Results;
