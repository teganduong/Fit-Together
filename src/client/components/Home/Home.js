import React, { PropTypes } from 'react';
import HomeNavBar from './HomeNavBar';
import LoginModal from './LoginModal';
import LandingImage from './LandingImage';
import SignupModal from './SignupModal';

const Home = (props) => (
  <div>
    <HomeNavBar />
    <LoginModal getUser={props.getUser} />
    <SignupModal addUser={props.addUser} />
    <LandingImage />
  </div>
);

Home.propTypes = {
  getUser: PropTypes.func,
  addUser: PropTypes.func
};

export default Home;
