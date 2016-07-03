import React, { PropTypes } from 'react';

const Category = ({ category }) => (
  <div className="card">
    <img className="card-img-top" src={category.img} alt="" />
    <div className="card-block">
      <h4 className="card-title">{category.name}</h4>
      <p className="card-text">{category.description}</p>
      <button className="btn btn-primary">Select</button>
    </div>
  </div>
);

Category.propTypes = {
  category: PropTypes.object
};

export default Category;
