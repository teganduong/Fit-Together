import React, { Component } from 'react';

const RecentSleepActivityView = (props) => (
  <div>
    <li>
      {props.date} - quality: {props.quality} duration: {props.duration} 
    </li>
  </div>
);

export default RecentSleepActivityView;
