import React, { Component } from 'react';
import HomeNavBar from './HomeNavBar';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';
import LandingImage from './LandingImage';

const Home = () => (
  <div>
    <div className="site-wrapper">
      <div className="site-wrapper-inner">
        <div className="cover-container">
          <div className="masthead clearfix">
            <div className="inner">
              <h3 className="masthead-brand">Vital Health</h3>
              <nav>
                <ul className="nav masthead-nav">
                  <li><a data-toggle="modal" data-target="#loginModal">Login</a></li>
                  <li><a data-toggle="modal" data-target="#signupModal">Signup</a></li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="inner cover">
            <h1 className="cover-heading">HEALTH</h1>
            <p className="lead">
              <a href="#" className="btn btn-lg btn-default">Learn more</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <LoginModal />
    <SignupModal />
  </div>
);

export default Home;
