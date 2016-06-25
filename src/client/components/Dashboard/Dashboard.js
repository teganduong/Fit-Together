import React, { Component } from 'react';
import NavBar from './NavBar';
import SideNavBar from './SideNavBar';

const Dashboard = ({ children }) => (
  <div>
    <SideNavBar />
    <NavBar />
    {children}
  </div>
);

Dashboard.propTypes = {
  children: React.PropTypes.element.isRequired
};

export default Dashboard;
