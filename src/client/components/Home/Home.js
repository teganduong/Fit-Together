import React, { Component } from 'react';
import HomeNavBar from './HomeNavBar';
import LoginModal from './LoginModal';
import LandingImage from './LandingImage';

const Home = () => (
  <div>
    <HomeNavBar />
    <LoginModal addUser={props.addUser} onClick={() => browserHistory.push('/login')} />
    <SignupModal addUser={props.addUser} />
    <LandingImage />
  </div>
);

export default Home;
