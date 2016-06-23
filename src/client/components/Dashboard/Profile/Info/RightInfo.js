// TODO: This is a container for information
// May not be needed, DELETE if necessary
import React, { Component } from 'react';

const user = {
  allergies: ['cows milk', 'weeds', 'egg yolk', 'butter'],
  medications: ['Fortecortin (deksametazon) 2 mg tbl - 6mg'],
  problems: ['Conductive hearing loss, bilateral', 'Respiratory syncytial virus pneumonia', 
    'Acute amoebic dysentery', 'Superficial frostbite of neck']
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
        <h3 className="panel-title">Problems</h3>
      </div>
      <div className="panel-body">
        {user.problems.map(problem =>
          <li>{problem}</li>
        )}
      </div>
    </div>
  </div>
);

export default RightInfo;
