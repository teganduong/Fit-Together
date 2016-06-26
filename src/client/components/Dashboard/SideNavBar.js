import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const SideNavBar = ({ username }) => (
  <div id="sidebar-wrapper">
    <p id="sidebar-title">Fit Together</p>
    <ul className="sidebar-nav">
      <li><Link to={`/dashboard/${username}/settings`}>Settings</Link></li>
      <li><Link to={`/dashboard/${username}/log`}>Log</Link></li>
      <li><Link to={`/dashboard/${username}/stats`}>Stats</Link></li>
      <li><Link to={`/dashboard/${username}/challenges`}>Challenges</Link></li>
      <li><Link to={`/dashboard/${username}/teams`}>Teams</Link></li>
      <li><Link to={`/dashboard/${username}/tips`}>Tips</Link></li>
    </ul>
  </div>
);

SideNavBar.propTypes = {
  username: PropTypes.string
};

export default SideNavBar;
