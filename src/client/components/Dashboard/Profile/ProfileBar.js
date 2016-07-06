import React, { Component, PropTypes } from 'react';
 
const user = {
  name: 'Jessica Jones',
  username: 'jjones',
  password: 'jjones',
  email: 'jjones@gmail.com',
  age: 26,
  weight: 145,
  height: 154.6,
  bmi: 21.3,
  goal: 'Live a healthy lifestyle',
  points: 0,
  user_icon: 'http://i988.photobucket.com/albums/af3/TheLightChasers/Portraits/portrait-sigma-50mm-f14-hsm-canon-eos-5d-mk2-face-Favimcom-473053_zpsd55e8d8e.jpg'
};

const heightIcon = 'http://www.clker.com/cliparts/L/D/O/L/0/7/male-restroom-symbol-white-on-transparent-hi.png';

class ProfileBar extends Component {
  constructor(props) {
    super(props);
    console.log('inside profileBar!! =====?============', props);
  }

  render() {
    return (
      <div>
        <div className="profile-image-container">
          <img className="profile-image" src={user.user_icon} alt="test" />
          <div className="profile-text-box">
            <div className="profile-inner-text-box">
              <h5 className="profile-text-small">{user.name}</h5>
            </div>
          </div>
        </div>
        <div className="profile-bottom-bar">
          <div className="profile-stat-header">
            <p className="profile-stat-header-text">SUMMARY</p>
          </div>  
          <div className="profile-stat-row">
            <div className="profile-stat-row-item first bottom">
              <p className="profile-stat-value">22</p>
              <p className="profile-stat-description">Age</p>
            </div>
            <div className="profile-stat-row-item bottom">
              <p className="profile-stat-value">63 kg</p>
              <p className="profile-stat-description">Weight</p>
            </div>
          </div>
          <div className="profile-stat-row height">
            <div className="profile-stat-row-item">
              <img className="height-image" src={heightIcon} alt="test" />
            </div>
            <div className="profile-stat-row-item">
              <p className="profile-stat-value">172 cm</p>
              <p className="profile-stat-description">Height</p>
            </div>
          </div>
          <div className="profile-stat-row">
            <div className="profile-stat-row-item first top">
              <p className="profile-stat-value">20.4</p>
              <p className="profile-stat-description">BMI</p>
            </div>
            <div className="profile-stat-row-item top">
              <p className="profile-stat-value">11%</p>
              <p className="profile-stat-description">Fat</p>
            </div>
          </div>
          <div className="profile-stat-header">
            <p className="profile-stat-header-text">ALLERGIES</p>
          </div> 
        </div>
      </div>
    ); 
  }
}

export default ProfileBar;
