import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const SideNavBar = ({ username }) => (
  <div id="sidebar-wrapper">
    <p id="sidebar-title">Fit Together</p>
    <ul className="sidebar-nav">
      <p className="sidebar-brand">ACCOUNT</p>
      <ul className="sidebar-part">
        <li><Link to="/home">Home</Link></li>
        <li><Link to={`/dashboard/${username}`}>My Dashboard</Link></li>
      </ul>
      <p className="sidebar-brand">ACTIONS</p>
      <ul className="sidebar-part">
        <li><Link to={`/dashboard/${username}/settings`}>Settings</Link></li>
        <li><Link to={`/dashboard/${username}/log`}>Log</Link></li>
        <li><Link to={`/dashboard/${username}/stats`}>Stats</Link></li>
        <li><Link to={`/dashboard/${username}/challenges`}>Challenges</Link></li>
        <li><Link to={`/dashboard/${username}/teams`}>Teams</Link></li>
        <li><Link to={`/dashboard/${username}/tips`}>Tips</Link></li>
      </ul>
    </ul>
  </div>
);

SideNavBar.propTypes = {
  username: PropTypes.string
};

export default SideNavBar;
