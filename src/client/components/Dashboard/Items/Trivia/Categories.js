import React, { PropTypes } from 'react';
import Category from './Category';

const categories = [
  {
    id: 1,
    name: 'Nutrition',
    description: 'See how much you know about the foods necessary for health and growth.',
    img: 'https://www.organicconsumers.org/sites/default/files/nutrition-food.jpg'
  },
  {
    id: 2,
    name: 'Fitness',
    description: 'How much do you know about being physically fit and healthy?',
    img: 'https://lh3.ggpht.com/DOaemztdSlf8OD6PqWKo3ooF9qYCHZQVgrRvJnvZqWOb5NUnyqc1VmC0hxMYPu2BWjk=w170'
  }
];

const Categories = () => {
  const quizzes = categories.map((category) => (
    <Category category={category} key={category.id} />
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
  categories: PropTypes.array
};

export default Categories;
