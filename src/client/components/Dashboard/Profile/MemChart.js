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


const exampleMemData = [
  { user_id: 1,
    date_performed: '06/01/2016',
    mood: 0.3,
    energy: 4.8,
    motivation: 2.6 },
  { user_id: 1,
    date_performed: '06/02/2016',
    mood: 8.1,
    energy: 3.9,
    motivation: 6 },
  { user_id: 1,
    date_performed: '06/03/2016',
    mood: 8,
    energy: 4.8,
    motivation: 6.4 },
  { user_id: 1,
    date_performed: '06/04/2016',
    mood: 9.3,
    energy: 3.4,
    motivation: 6.3 },
  { user_id: 1,
    date_performed: '06/05/2016',
    mood: 1.6,
    energy: 2.7,
    motivation: 2.2 },
  { user_id: 1,
    date_performed: '06/06/2016',
    mood: 8.9,
    energy: 2.2,
    motivation: 5.5 },
  { user_id: 1,
    date_performed: '06/07/2016',
    mood: 5.6,
    energy: 5.9,
    motivation: 5.7 },
  { user_id: 1,
    date_performed: '06/08/2016',
    mood: 9,
    energy: 4.4,
    motivation: 6.7 },
  { user_id: 1,
    date_performed: '06/09/2016',
    mood: 2.7,
    energy: 1.6,
    motivation: 2.1 },
  { user_id: 1,
    date_performed: '06/10/2016',
    mood: 6.6,
    energy: 4,
    motivation: 5.3 },
  { user_id: 1,
    date_performed: '06/11/2016',
    mood: 1.6,
    energy: 1.5,
    motivation: 1.5 },
  { user_id: 1,
    date_performed: '06/12/2016',
    mood: 5,
    energy: 0.2,
    motivation: 2.6 },
  { user_id: 1,
    date_performed: '06/13/2016',
    mood: 8.8,
    energy: 6.3,
    motivation: 7.6 },
  { user_id: 1,
    date_performed: '06/14/2016',
    mood: 6.9,
    energy: 2,
    motivation: 4.4 },
  { user_id: 1,
    date_performed: '06/15/2016',
    mood: 9,
    energy: 1.6,
    motivation: 5.3 },
  { user_id: 1,
    date_performed: '06/16/2016',
    mood: 5.5,
    energy: 1.2,
    motivation: 3.4 },
  { user_id: 1,
    date_performed: '06/17/2016',
    mood: 5.1,
    energy: 1,
    motivation: 3.1 },
  { user_id: 1,
    date_performed: '06/18/2016',
    mood: 3.7,
    energy: 0.8,
    motivation: 2.2 },
  { user_id: 1,
    date_performed: '06/19/2016',
    mood: 0.2,
    energy: 0.7,
    motivation: 0.4 },
  { user_id: 1,
    date_performed: '06/20/2016',
    mood: 5.1,
    energy: 9.4,
    motivation: 7.2 },
  { user_id: 1,
    date_performed: '06/21/2016',
    mood: 8.3,
    energy: 9.1,
    motivation: 8.7 },
  { user_id: 1,
    date_performed: '06/22/2016',
    mood: 1.7,
    energy: 2.3,
    motivation: 2 },
  { user_id: 1,
    date_performed: '06/23/2016',
    mood: 10,
    energy: 1.9,
    motivation: 5.9 },
  { user_id: 1,
    date_performed: '06/24/2016',
    mood: 9.7,
    energy: 2.9,
    motivation: 6.3 },
  { user_id: 1,
    date_performed: '06/25/2016',
    mood: 3.2,
    energy: 6,
    motivation: 4.6 },
  { user_id: 1,
    date_performed: '06/26/2016',
    mood: 6.7,
    energy: 4.8,
    motivation: 5.8 },
  { user_id: 1,
    date_performed: '06/27/2016',
    mood: 0.6,
    energy: 3.8,
    motivation: 2.2 },
  { user_id: 1,
    date_performed: '06/28/2016',
    mood: 4.2,
    energy: 4.6,
    motivation: 4.4 },
  { user_id: 1,
    date_performed: '06/29/2016',
    mood: 2.5,
    energy: 6.3,
    motivation: 4.4 },
  { user_id: 1,
    date_performed: '06/30/2016',
    mood: 8.5,
    energy: 5,
    motivation: 6.7 } 
];

const memData = exampleMemData.map(s => s.mood);
const eneData = exampleMemData.map(s => s.energy);
const motiData = exampleMemData.map(s => s.motivation);


const series = [{
    data: memData
}, {
    data: eneData
}, {
    data: motiData
}];


class MemChart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="profile-chart-container">

<Chart className="profile-chart" width={300} height={200} series={series}>
  <Transform method={['transpose', 'stackNormalized']}>
    <Pies
      colors='category10'
      combined={true}
      innerRadius='33%'
      padAngle={0.025}
      cornerRadius={5}
      innerPadding={2}
      pieAttributes={{
        onMouseMove: (e) => e.target.style.opacity = 1,
        onMouseLeave: (e) => e.target.style.opacity = 0.5
      }}
      pieStyle={{opacity: 0.5}}
    />
  </Transform>
</Chart>
      </div>

    );
  }
}

export default MemChart;