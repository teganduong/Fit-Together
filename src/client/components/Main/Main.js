import React, { Component } from 'react';
import NavBar from './NavBar';
import SideNavBar from './SideNavBar';
import PatientProfile from './PatientProfile/PatientProfile';

const Main = () => (
  <div>
    <NavBar />
    <SideNavBar />
    <PatientProfile />
  </div>
);

export default Main;
