import React, { Component } from 'react';

const RecentExerciseActivityView = (props) => (
  <div>
    <li>
       {props.duration} mins [{props.type}] ({props.date})
    </li>
  </div>
);

export default RecentExerciseActivityView;
