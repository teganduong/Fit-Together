import React, { Component } from 'react';

const RecentFoodActivityView = (props) => (
  <div>
    <li>
      {props.date} - Ate {props.carbs}g of carbs {props.fats}g of fats and {props.protein}g of protein 
    </li>
  </div>
);

export default RecentFoodActivityView;
