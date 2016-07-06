import React, { Component } from 'react';

const RecentFoodActivityView = (props) => (
  <div>
    <li>
      {props.carbs}g [Cb], {props.fats}g [Ft], {props.protein}g [Pr] ({props.date})
    </li>
  </div>
);

export default RecentFoodActivityView;
