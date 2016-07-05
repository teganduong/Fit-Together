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

// const exampleFoodData = [
//   {
//     user_id: 1,
//     date_performed: '06/24/2016',
//     protein: 80,
//     fats: 70,
//     carbs: 320,
//     calories: 2250 
//   },
//   {
//     user_id: 1,
//     date_performed: '06/25/2016',
//     protein: 70,
//     fats: 105,
//     carbs: 365,
//     calories: 3150 
//   },
//   {
//     user_id: 1,
//     date_performed: '06/26/2016',
//     protein: 80,
//     fats: 55,
//     carbs: 305,
//     calories: 2250 
//   },
//   {
//     user_id: 1,
//     date_performed: '06/27/2016',
//     protein: 90,
//     fats: 90,
//     carbs: 380,
//     calories: 2750 
//   },
//   {
//     user_id: 1,
//     date_performed: '06/28/2016',
//     protein: 95,
//     fats: 75,
//     carbs: 395,
//     calories: 2950 
//   },
//   {
//     user_id: 1,
//     date_performed: '06/29/2016',
//     protein: 85,
//     fats: 85,
//     carbs: 335,
//     calories: 2450 
//   },
//   {
//     user_id: 1,
//     date_performed: '06/30/2016',
//     protein: 80,
//     fats: 70,
//     carbs: 320,
//     calories: 2250 
//   }
// ];

// const proteinData = exampleFoodData.map(s => s.protein);
// const carbData = exampleFoodData.map(s => s.carbs);
// const fats = exampleFoodData.map(s => s.fats);
// const calories = exampleFoodData.map(s => s.calories);


class FoodChart extends Component {
  constructor(props) {
    super(props);
    const foodData = [];
    console.log('inside foodchRT', props);
  }

  componentWillReceiveProps(nextProps) {
    console.log('foodchart', nextProps);
    this.foodData = nextProps.activities.data;
  }

  render() {
    if(this.foodData) { 
      this.foodData = this.foodData[2].slice(-7).map(s => parseInt(s.calories));
      console.log('this is food data', this.durationData);
      console.log('this is food with map data', this.foodData);
    }  
    const series = [{
      data: this.foodData
    }];
    console.log('this is duration', this.foodData);

    return (
      <div className="profile-chart-container">
      <div>
      <Chart
        className="profile-chart"
        width={300} height={300} series={series} minY={0}>
        <Lines />
        <Title position='top center' style={{textAnchor:'middle'}}>
          Calorie Intake
        </Title>
      </Chart>
      </div>
      </div>
    );
  }
}

export default FoodChart;