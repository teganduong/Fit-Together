import React, { Component, PropTypes } from 'react';

const LogbookCard = ({ card }) => (
  <div className="log-activity card debug">
    <div className="image debug">
      <img src={card.image} alt="" className="create-team-icon img-circle" />
    </div>
    <div className="content">
      {card.name}
    </div>
  </div>
);


LogbookCard.propTypes = {
  card: PropTypes.obj
};

export default LogbookCard;