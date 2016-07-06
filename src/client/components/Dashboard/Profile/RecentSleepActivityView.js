import React, { Component } from 'react';

const RecentSleepActivityView = (props) => (
  <div>
    <li>
      {props.quality}[Q], {props.duration}[D] ({props.date})  
    </li>
  </div>
);

export default RecentSleepActivityView;
