import React, { Component, PropTypes } from 'react';
const {
  // main component
  Chart, 
  // graphs
  Bars, Cloud, Dots, Labels, Lines, Pies, RadialLines, Ticks, Title,
  // wrappers
  Layer, Animate, Transform, Handlers,
  // helpers
  DropShadow, Gradient, helpers
} = require('rumble-charts');

const exampleFoodData = [
  {
    user_id: 1,
    date_performed: '06/01/2016',
    protein: 50,
    fats: 70,
    carbs: 310,
    calories: 2100 
  },
  {
    user_id: 1,
    date_performed: '06/02/2016',
    protein: 60,
    fats: 60,
    carbs: 350,
    calories: 2300 
  },
  {
    user_id: 1,
    date_performed: '06/03/2016',
    protein: 70,
    fats: 80,
    carbs: 370,
    calories: 2400 
  },
  {
    user_id: 1,
    date_performed: '06/04/2016',
    protein: 100,
    fats: 60,
    carbs: 310,
    calories: 2000 
  },
  {
    user_id: 1,
    date_performed: '06/05/2016',
    protein: 50,
    fats: 100,
    carbs: 330,
    calories: 2600 
  },
  {
    user_id: 1,
    date_performed: '06/06/2016',
    protein: 80,
    fats: 70,
    carbs: 320,
    calories: 2250 
  },
  {
    user_id: 1,
    date_performed: '06/07/2016',
    protein: 70,
    fats: 105,
    carbs: 365,
    calories: 3150 
  },
  {
    user_id: 1,
    date_performed: '06/08/2016',
    protein: 70,
    fats: 115,
    carbs: 350,
    calories: 3400 
  },
  {
    user_id: 1,
    date_performed: '06/09/2016',
    protein: 90,
    fats: 90,
    carbs: 380,
    calories: 2750 
  },
  {
    user_id: 1,
    date_performed: '06/10/2016',
    protein: 75,
    fats: 80,
    carbs: 370,
    calories: 2550 
  },
  {
    user_id: 1,
    date_performed: '06/11/2016',
    protein: 95,
    fats: 70,
    carbs: 345,
    calories: 2350 
  },
  {
    user_id: 1,
    date_performed: '06/12/2016',
    protein: 80,
    fats: 70,
    carbs: 320,
    calories: 2250 
  },
  {
    user_id: 1,
    date_performed: '06/13/2016',
    protein: 50,
    fats: 70,
    carbs: 310,
    calories: 2100 
  },
  {
    user_id: 1,
    date_performed: '06/14/2016',
    protein: 85,
    fats: 110,
    carbs: 415,
    calories: 3350 
  },
  {
    user_id: 1,
    date_performed: '06/15/2016',
    protein: 70,
    fats: 80,
    carbs: 370,
    calories: 2400 
  },
  {
    user_id: 1,
    date_performed: '06/16/2016',
    protein: 100,
    fats: 60,
    carbs: 310,
    calories: 2000 
  },
  {
    user_id: 1,
    date_performed: '06/17/2016',
    protein: 90,
    fats: 35,
    carbs: 295,
    calories: 1800 
  },
  {
    user_id: 1,
    date_performed: '06/18/2016',
    protein: 80,
    fats: 70,
    carbs: 320,
    calories: 2250 
  },
  {
    user_id: 1,
    date_performed: '06/19/2016',
    protein: 70,
    fats: 105,
    carbs: 365,
    calories: 3150 
  },
  {
    user_id: 1,
    date_performed: '06/20/2016',
    protein: 80,
    fats: 55,
    carbs: 305,
    calories: 2250 
  },
  {
    user_id: 1,
    date_performed: '06/21/2016',
    protein: 90,
    fats: 90,
    carbs: 380,
    calories: 2750 
  },
  {
    user_id: 1,
    date_performed: '06/22/2016',
    protein: 95,
    fats: 75,
    carbs: 395,
    calories: 2950 
  },
  {
    user_id: 1,
    date_performed: '06/23/2016',
    protein: 85,
    fats: 85,
    carbs: 335,
    calories: 2450 
  },
  {
    user_id: 1,
    date_performed: '06/24/2016',
    protein: 80,
    fats: 70,
    carbs: 320,
    calories: 2250 
  },
  {
    user_id: 1,
    date_performed: '06/25/2016',
    protein: 70,
    fats: 105,
    carbs: 365,
    calories: 3150 
  },
  {
    user_id: 1,
    date_performed: '06/26/2016',
    protein: 80,
    fats: 55,
    carbs: 305,
    calories: 2250 
  },
  {
    user_id: 1,
    date_performed: '06/27/2016',
    protein: 90,
    fats: 90,
    carbs: 380,
    calories: 2750 
  },
  {
    user_id: 1,
    date_performed: '06/28/2016',
    protein: 95,
    fats: 75,
    carbs: 395,
    calories: 2950 
  },
  {
    user_id: 1,
    date_performed: '06/29/2016',
    protein: 85,
    fats: 85,
    carbs: 335,
    calories: 2450 
  },
  {
    user_id: 1,
    date_performed: '06/30/2016',
    protein: 80,
    fats: 70,
    carbs: 320,
    calories: 2250 
  }
];

const proteinData = exampleFoodData.map(s => s.protein);
const carbData = exampleFoodData.map(s => s.carbs);
const fats = exampleFoodData.map(s => s.fats);


const series = [{
    data: proteinData
}, {
    data: carbData
}, {
    data: fats
}];

class FoodChart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="profile-chart-container">
      <Chart
        className="profile-chart"
        width={300} height={100} series={series} minY={0}>
        <Lines />
      </Chart>
      </div>
    );
  }
}

export default FoodChart;