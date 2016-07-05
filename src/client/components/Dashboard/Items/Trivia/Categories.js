import React, { PropTypes } from 'react';
import Category from './Category';

const categories = [
  {
    id: 1,
    name: 'Nutrition',
    description: 'See how much you know about the foods necessary for health and growth.',
    img: 'https://www.fodsupport.org/images/NutritioniStock_000017664170Small.jpg'
  },
  {
    id: 2,
    name: 'Fitness',
    description: 'How much do you know about being physically fit and healthy?',
    img: 'https://lh3.ggpht.com/DOaemztdSlf8OD6PqWKo3ooF9qYCHZQVgrRvJnvZqWOb5NUnyqc1VmC0hxMYPu2BWjk=w170'
  }
];

const Categories = ({ handleQuizSelection }) => {
  const quizzes = categories.map((category) => (
    <Category 
      key={category.id} 
      category={category} 
      handleQuizSelection={handleQuizSelection}
    />
  ));

  return (
    <div className="card-deck-wrapper col-sm-8">
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
