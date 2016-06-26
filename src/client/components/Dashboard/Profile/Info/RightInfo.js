// TODO: This is a container for information
// May not be needed, DELETE if necessary
import React, { Component } from 'react';

const user = {
  allergies: ['cows milk', 'weeds', 'egg yolk', 'butter'],
  medications: ['Fortecortin (deksametazon) 2 mg tbl - 6mg'],
  goal: 'Lose 15 pounds by 08/24/16'
};

const RightInfo = () => (
  <div className="right-container">
    <div className="panel panel-default side-panel">
      <div className="panel-heading">
        <h3 className="panel-title">Allergies</h3>
      </div>
      <div className="panel-body">
          {user.allergies.map(allergy =>
            <li>{allergy}</li>
          )}
      </div>
    </div>
    <div className="panel panel-default side-panel">
      <div className="panel-heading">
        <h3 className="panel-title">Medications</h3>
      </div>
      <div className="panel-body">
        {user.medications.map(medication =>
          <li>{medication}</li>
        )}
      </div>
    </div>
    <div className="panel panel-default side-panel">
      <div className="panel-heading">
        <h3 className="panel-title">Goal</h3>
      </div>
      <div className="panel-body">
        <p>{user.goal}</p>
      </div>
    </div>
  </div>
);

export default RightInfo;
