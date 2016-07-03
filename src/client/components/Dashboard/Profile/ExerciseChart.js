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

const exampleExerciseData = [
  { user_id: 1,
    date_performed: '06/01/2016',
    type: 'walking',
    duration: 30,
    distance: 2,
    reps: null,
    sets: null 
  },
  { user_id: 1,
    date_performed: '06/02/2016',
    type: 'weights',
    duration: 60,
    distance: null,
    reps: 30,
    sets: 24 
  },
  { user_id: 1,
    date_performed: '06/03/2016',
    type: 'running',
    duration: 45,
    distance: 4,
    reps: null,
    sets: null 
  },
  { user_id: 1,
    date_performed: '06/04/2016',
    type: 'swimming',
    duration: 45,
    distance: 3,
    reps: null,
    sets: null 
  },
  { user_id: 1,
    date_performed: '06/05/2016',
    type: 'weights',
    duration: 60,
    distance: null,
    reps: 30,
    sets: 24 
  },
  { user_id: 1,
    date_performed: '06/06/2016',
    type: 'walking',
    duration: 60,
    distance: 4,
    reps: null,
    sets: null 
  },
  { user_id: 1,
    date_performed: '06/07/2016',
    type: 'walking',
    duration: 60,
    distance: 4,
    reps: null,
    sets: null 
  },
  { user_id: 1,
    date_performed: '06/08/2016',
    type: 'weights',
    duration: 45,
    distance: null,
    reps: 45,
    sets: 24 
  },
  { user_id: 1,
    date_performed: '06/09/2016',
    type: 'walking',
    duration: 45,
    distance: 4,
    reps: null,
    sets: null 
  },
  { user_id: 1,
    date_performed: '06/10/2016',
    type: 'walking',
    duration: 45,
    distance: 4,
    reps: null,
    sets: null 
  },
  { user_id: 1,
    date_performed: '06/11/2016',
    type: 'swimming',
    duration: 30,
    distance: 2,
    reps: null,
    sets: null 
  },
  { user_id: 1,
    date_performed: '06/12/2016',
    type: 'running',
    duration: 45,
    distance: 4,
    reps: null,
    sets: null 
  },
  { user_id: 1,
    date_performed: '06/13/2016',
    type: 'running',
    duration: 45,
    distance: 4,
    reps: null,
    sets: null 
  },
  { user_id: 1,
    date_performed: '06/14/2016',
    type: 'walking',
    duration: 30,
    distance: 2,
    reps: null,
    sets: null 
  },
  { user_id: 1,
    date_performed: '06/15/2016',
    type: 'walking',
    duration: 45,
    distance: 3,
    reps: null,
    sets: null 
  },
  { user_id: 1,
    date_performed: '06/16/2016',
    type: 'ballet',
    duration: 60,
    distance: null,
    reps: null,
    sets: null 
  },
  { user_id: 1,
    date_performed: '06/17/2016',
    type: 'ballet',
    duration: 60,
    distance: null,
    reps: null,
    sets: null 
  },
  { user_id: 1,
    date_performed: '06/18/2016',
    type: 'swimming',
    duration: 45,
    distance: 3,
    reps: null,
    sets: null 
  },
  { user_id: 1,
    date_performed: '06/19/2016',
    type: 'walking',
    duration: 30,
    distance: 2,
    reps: null,
    sets: null 
  },
  { user_id: 1,
    date_performed: '06/20/2016',
    type: 'walking',
    duration: 45,
    distance: 3,
    reps: null,
    sets: null 
  },
  { user_id: 1,
    date_performed: '06/21/2016',
    type: 'weights',
    duration: 45,
    distance: null,
    reps: 30,
    sets: 24 
  },
  { user_id: 1,
    date_performed: '06/22/2016',
    type: 'ballet',
    duration: 60,
    distance: null,
    reps: null,
    sets: null 
  },
  { user_id: 1,
    date_performed: '06/23/2016',
    type: 'running',
    duration: 45,
    distance: 4,
    reps: null,
    sets: null 
  },
  { user_id: 1,
    date_performed: '06/24/2016',
    type: 'walking',
    duration: 30,
    distance: 2,
    reps: null,
    sets: null 
  },
  { user_id: 1,
    date_performed: '06/25/2016',
    type: 'ballet',
    duration: 60,
    distance: null,
    reps: null,
    sets: null 
  },
  { user_id: 1,
    date_performed: '06/26/2016',
    type: 'walking',
    duration: 45,
    distance: 3,
    reps: null,
    sets: null 
  },
  { user_id: 1,
    date_performed: '06/27/2016',
    type: 'walking',
    duration: 45,
    distance: 3,
    reps: null,
    sets: null 
  },
  { user_id: 1,
    date_performed: '06/28/2016',
    type: 'swimming',
    duration: 45,
    distance: 3,
    reps: null,
    sets: null 
  },
  { user_id: 1,
    date_performed: '06/29/2016',
    type: 'tennis',
    duration: 45,
    distance: 3,
    reps: null,
    sets: null 
  },
  { user_id: 1,
    date_performed: '06/30/2016',
    type: 'ballet',
    duration: 60,
    distance: null,
    reps: null,
    sets: null 
  }
];

const durationData = exampleExerciseData.map(s => s.duration);
const distanceData = exampleExerciseData.map(s => s.distance);

const series = [{
    data: durationData
}, {
    data: distanceData
}];


class ExerciseChart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="profile-chart-container">
        <Chart
          className="profile-chart" 
          width={300} height={100} series={series} minY={0}
          scaleX={{paddingStart: 0, paddingEnd: 0}}
          scaleY={{paddingTop: 10}}>
          <Lines />
        </Chart>
      </div>
    );
  }
}

export default ExerciseChart;
