import React, { Component } from 'react';

const SideNavBar = () => (
  <div id="sidebar-wrapper">
    <ul className="sidebar-nav">
      <p className="sidebar-brand"><a href="#">ACTIONS</a></p>
      <ul className="sidebar-part">
        <li><a href="#">My Dashboard</a></li>
        <li><a href="#">Find Patient</a></li>
        <li><a href="#">View Patient Profile</a></li>
        <li><a href="#"></a></li>
      </ul>
      <p className="sidebar-brand"><a href="#">DESK</a></p>
      <ul className="sidebar-part">
        <li><a href="#">Secure Message</a></li>
        <li><a href="#">Daily Schedule</a></li>
        <li><a href="#">Upload File</a></li>
      </ul>
    </ul>
  </div>
);

export default SideNavBar;
