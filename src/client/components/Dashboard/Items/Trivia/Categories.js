import React, { PropTypes } from 'react';
import Category from './Category';

const Categories = ({ handleQuizSelection, categories }) => {
  const quizzes = categories.map((category) => (
    <Category 
      key={category.id} 
      category={category} 
      handleQuizSelection={handleQuizSelection}
    />
  ));

  return (
    <div className="card-deck-wrapper">
      <div className="card-deck">
        {quizzes}
      </div>
    </div>
  );
};

Categories.propTypes = {
  categories: PropTypes.array,
  handleQuizSelection: PropTypes.func
};

export default Categories;
