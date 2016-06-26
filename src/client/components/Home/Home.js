import React, { Component } from 'react';
import HomeNavBar from './HomeNavBar';
import LoginModal from './LoginModal';
import LandingImage from './LandingImage';

const Home = () => (
  <div>
    <HomeNavBar />
    <LoginModal />
    <LandingImage />
  </div>
);

export default Home;
