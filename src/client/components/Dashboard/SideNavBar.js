import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const SideNavBar = () => (
  <div id="sidebar-wrapper">
    <p id="sidebar-title">Fit Together</p>
    <ul className="sidebar-nav">
      <li><Link to="/dashboard">My Dashboard</Link></li>
      <li><Link to="/dashboard/teams">Teams</Link></li>
      <li><Link to="/dashboard/log">Log</Link></li>
      <li><Link to="/dashboard/stats">Stats</Link></li>
      <li><Link to="/dashboard/settings">Settings</Link></li>
      <li><Link to="/dashboard/tips">Tips</Link></li>
      <li><Link to="/dashboard/trivia">Trivia</Link></li>
      <li><a href="/signout" action="post">Signout</a></li>
    </ul>
  </div>
);

export default SideNavBar;
