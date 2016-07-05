import React, { PropTypes } from 'react';

const DisplayMsg = ({ message }) => (
  <div className="card-deck-wrapper col-sm-8">
    <div className="card-deck">
      <div className="card entry-card">
        <div className="entry-block">
          <h4 className="card-title">
            {message}
          </h4>
        </div>
      </div>
    </div>
  </div>
);

DisplayMsg.propTypes = {
  message: PropTypes.string
};

export default DisplayMsg;
