import React, { Component } from 'react';

const RecentExerciseActivityView = (props) => (
  <li>
     {props.duration} mins [{props.type}] ({props.date})
  </li>
);

export default RecentExerciseActivityView;