import React, { Component } from 'react';
import SideNavBar from './SideNavBar';

const Dashboard = () => (
  <div>
    <SideNavBar />
  </div>
);

Dashboard.propTypes = {
  children: React.PropTypes.element.isRequired
};

export default Dashboard;
