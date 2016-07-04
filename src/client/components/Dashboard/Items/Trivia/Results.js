import React, { PropTypes } from 'react';

const Results = ({ score }) => (
  <div className="results">
    Current Score: {score}
  </div>
);

Results.propTypes = {
  score: PropTypes.number
};

export default Results;
