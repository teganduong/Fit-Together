import React, { Component } from 'react';

const RecentExerciseActivityView = (props) => (
  <div>
    <li>
      {props.date} - {props.type} for {props.duration} mins 
    </li>
  </div>
);

export default RecentExerciseActivityView;
