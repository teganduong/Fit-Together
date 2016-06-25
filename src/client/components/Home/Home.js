import React, { PropTypes } from 'react';
import HomeNavBar from './HomeNavBar';
import LoginModal from './LoginModal';
import LandingImage from './LandingImage';

const Home = (props) => (
  <div>
    <HomeNavBar />
    <LoginModal getUser={props.getUser} />
    <LandingImage />
  </div>
);

Home.propTypes = {
  getUser: PropTypes.func,
  addUser: PropTypes.func
};

export default Home;