import React, { Component } from 'react';

const RecentMemActivityView = (props) => (
  <li>
    {props.carbs}g [Cb], {props.fats}g [Ft], {props.protein}g [Pr] ({props.date})
  </li>
);

export default RecentMemActivityView;
