import React, { Component } from 'react';

const HomeNavBar = () => (
  <div className="masthead clearfix">
    <div className="inner">
      <h3 className="masthead-brand">Vital Health</h3>
      <nav>
        <ul className="nav masthead-nav">
          <li className="active"><a href="#">Home</a></li>
          <li><a href="#">Login</a></li>
          <li><a href="#">Signup</a></li>
        </ul>
      </nav>
    </div>
  </div>
);

export default HomeNavBar;
          // <li><a data-toggle="modal" data-target="#loginModal">Login</a></li>
          // <li><a data-toggle="modal" data-target="#signupModal">Signup</a></li>
