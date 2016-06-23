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

Main.propTypes = {
  children: React.PropTypes.element.isRequired
};

export default Main;
