import React, { Component } from 'react';
import HomeNavBar from './HomeNavBar';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';
import LandingImage from './LandingImage';

const Home = () => (
  <div>
    <HomeNavBar />
    <LoginModal />
    <SignupModal />
    <LandingImage />
  </div>
);

export default Home;
