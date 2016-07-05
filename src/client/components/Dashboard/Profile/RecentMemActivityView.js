import React, { Component } from 'react';

const RecentMemActivityView = (props) => (
  <div>
    <li>
      {props.date} - mood: {props.mood} energy: {props.energy} and motivation: {props.motivation} 
    </li>
  </div>
);

export default RecentMemActivityView;
