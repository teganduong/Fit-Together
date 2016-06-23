import React, { Component } from 'react';
import { Link } from 'react-router';

const SideNavBar = () => (
  <div id="sidebar-wrapper">
    <ul className="sidebar-nav">
      <p className="sidebar-brand">ACCOUNT</p>
      <ul className="sidebar-part">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/dash">Settings</Link></li>
        <li><Link to="/dash">My Dashboard</Link></li>
      </ul>
      <p className="sidebar-brand">ACTIONS</p>
      <ul className="sidebar-part">
        <li><Link to="/dash/log">Log</Link></li>
        <li><Link to="/dash/stats">Stats</Link></li>
        <li><Link to="/dash/goals">Goals</Link></li>
        <li><Link to="/dash/challenges">Challenges</Link></li>
        <li><Link to="/dash/teams">Teams</Link></li>
        <li><Link to="/dash/tips">Tips</Link></li>
      </ul>
    </ul>
  </div>
);

export default SideNavBar;
