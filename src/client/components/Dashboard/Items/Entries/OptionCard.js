import React, { PropTypes } from 'react';

const OptionCard = ({ option }) => (
  <div className="card">
    <img className="card-img-top" src={option.img} alt="" />
    <div className="card-block">
      <h4 className="card-title">{option.option}</h4>
      <a href="#" className="btn btn-primary">Select</a>
    </div>
  </div>
);

OptionCard.propTypes = {
  option: PropTypes.object
};

export default OptionCard;
