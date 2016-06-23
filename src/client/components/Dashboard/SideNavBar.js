import React, { Component } from 'react';
import { Link } from 'react-router';

const SideNavBar = () => (
  <div id="sidebar-wrapper">
    <p id="sidebar-title">Fit Together</p>
    <ul className="sidebar-nav">
      <li><Link to="/dashboard">My Dashboard</Link></li>
      <li><Link to="/dashboard/teams">Teams</Link></li>
      <li><Link to="/dashboard/challenges">Challenges</Link></li>
      <li><Link to="/dashboard/stats">Stats</Link></li>
      <li><Link to="/dashboard/log">Log</Link></li>
      <li><Link to="/dashboard/tips">Tips</Link></li>
      <li><Link to="/settings">Settings</Link></li>
      <li><Link to="/home">Signout</Link></li>
    </ul>
  </div>
);

export default SideNavBar;
