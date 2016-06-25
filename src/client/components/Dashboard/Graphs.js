import React, { Component, PropTypes } from 'react';
import * as V from "victory";

class Graphs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <svg viewBox="0 0 100 100" width="50%">s
          <V.VictoryLine
            width={500}
            height={300}
            standalone={false}
            interpolation={"cardinal"}
            style={{
              data: {
                stroke: "#822722",
                strokeWidth: 3
              }
            }}

            data={[
              {x: '6/19', y: 8},
              {x: '6/20', y: 9},
              {x: '6/21', y: 8},      
              {x: '6/22', y: 7},
              {x: '6/23', y: 5},
              {x: '6/24', y: 6}
            ]}
          />
          <V.VictoryScatter
            width={500}
            height={300}
            standalone={false}
            style={{
              data: {
                fill: "#822722",
                stroke: "white",
                strokeWidth: 3
              },
              labels: {
                fill: "#822722",
                fontSize: 18,
                padding: 12
              }
            }}
            size={6}
            labels={[
             "a", "b", "c", "d", "e", "f"
            ]}
            data={[
              {x: '6/19', y: 8},
              {x: '6/20', y: 9},
              {x: '6/21', y: 8},      
              {x: '6/22', y: 7},
              {x: '6/23', y: 5},
              {x: '6/24', y: 6}
            ]}
          />
        </svg>
      </div>
    );
  }

}
export default Graphs;

