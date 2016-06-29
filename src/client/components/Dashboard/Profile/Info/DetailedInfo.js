import React, { Component } from 'react';
import moment from 'moment';

const summary = {
  "date": "20130315",
  "summary": [
    {
      "activity": "walking",
      "group": "walking",
      "duration": 2133,
      "distance": 1847,
      "steps": 2500,
      "calories": 60
    },
    {
      "activity": "running",
      "group": "running",
      "duration": 254,
      "distance": 436,
      "steps": 624,
      "calories": 99
    },
    {
      "activity": "cycling",
      "group": "cycling",
      "duration": 2688,
      "distance": 4049,
      "calories": 999
    },
    {
      "activity": "zumba",
      "duration": 1200,
      "calories": 500
    }
  ],
  "caloriesIdle": 1785,
  "lastUpdate": "20130317T121143Z"
};

const date = moment(summary.date, 'YYYYMMDD').format('dddd, MMMM Do YYYY');
const totalSteps = () => {
  let total = 0;
  summary.summary.forEach((activity) => {
    if (activity.steps) {
      total += activity.steps;
    }
  });
  return total;
};

const DetailedInfo = () => (
  <div>
    <div>Summary for Today: {date}</div>
    <div>Total Steps: {totalSteps()}</div>
  </div>
);

export default DetailedInfo;
