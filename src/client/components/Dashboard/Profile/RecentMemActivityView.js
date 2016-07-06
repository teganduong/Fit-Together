import React, { Component } from 'react';

const RecentMemActivityView = (props) => (
  <div>
    <li>
      {props.mood} [Md], {props.energy} [En], {props.motivation} [Mt] ({props.date})
    </li>
  </div>
);

export default RecentMemActivityView;
