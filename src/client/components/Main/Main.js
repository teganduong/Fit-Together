import React, { Component } from 'react';
import NavBar from './NavBar';
import SideNavBar from './SideNavBar';
import PatientProfile from './PatientProfile/PatientProfile';

const Main = ({ children }) => (
  <div>
    <NavBar />
    <SideNavBar />
    {children}
  </div>
);

export default Main;
