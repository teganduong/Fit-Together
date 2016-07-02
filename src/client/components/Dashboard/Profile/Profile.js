import React, { PropTypes } from 'react';

import BmiChart from './Charts/BmiChart';

import ProfileBar from './ProfileBar.js';
import ProfileActivityBar from './ProfileActivityBar.js';

const Profile = ({ user, sleep }) => (
  <div className="main-container">
    <ProfileActivityBar />
    <ProfileBar />
  </div>
);

Profile.propTypes = {
  user: PropTypes.object,
  sleep: PropTypes.array
};

export default Profile;
