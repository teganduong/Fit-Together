import React, { Component } from 'react';

const RecentSleepActivityView = (props) => (
  <li>
    {props.quality}[Q], {props.duration}[D] ({props.date})  
  </li>
);

export default RecentSleepActivityView;
