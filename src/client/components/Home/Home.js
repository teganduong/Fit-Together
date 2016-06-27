import React, { Component } from 'react';
import HomeNavBar from './HomeNavBar';
import LoginModal from './LoginModal';
import LandingImage from './LandingImage';
import SignupModal from './SignupModal';

const Home = (props) => (
  <div>
    <HomeNavBar />
    <LoginModal addUser={props.addUser}  />
    <SignupModal addUser={props.addUser} />
    <LandingImage />
  </div>
);

export default Home;
