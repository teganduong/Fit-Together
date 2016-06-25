import React, { Component } from 'react';
import TeamEntry from './TeamEntry';

const user = {
  name: 'Scarlet',
  score: 1000,
  steps: 2000,
  image: 'https://pbs.twimg.com/profile_images/721759338034044929/uu8JkkSl.jpg'
};

const teamA = [
  {
    name: 'Mom',
    image: 'https://camo.githubusercontent.com/5e6eb0b00d714eb5b8ec84254205c61c2a97c68d/687474703a2f2f6f63746f6465782e6769746875622e636f6d2f696d616765732f77616c646f6361742e6a7067'
  },
  {
    name: 'Sis',
    image: 'https://assets-cdn.github.com/images/modules/styleguide/linktocat.png'
  },
  {
    name: 'Bro',
    image: 'https://octodex.github.com/images/gangnamtocat.png'
  },
  {
    name: 'Grandpa',
    image: 'https://stevegrunwell.github.io/wordpress-git/assets/heisencat.png'
  }
];


const TeamInfo = () => (
  <div>
    <div className="container team-main">
      <div className="team-user">
        <div className="row">
          <div className="col-sm-4 col-md-4">
            <p className="team-user-score">total score: {user.score}</p>
          </div>
          <div className="col-sm-4 col-md-4">
            <img src={user.image} id="team-user-image" alt="test" className="img-circle" />
          </div>
          <div className="col-sm-4 col-md-4">
            <p className="team-user-steps">total steps: {user.steps}</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 col-md-6 playA">
          <img src={teamA[0].image} id="team-user-image" alt="test" className="img-circle" />
          <p>Team Lead: Joe</p>
        </div>
        <div className="col-sm-6 col-md-6 playB">
          <img src={teamA[1].image} id="team-user-image" alt="test" className="img-circle" />
          <p className="team-user-steps">Team Lead: Doe</p>
        </div>
      </div>
      <div>
        Teammates: 
      </div>
      <div>
        Select Teams: 
      </div>
      <div className="team-info">
        {teamA.map((teamMember, index) =>
          <TeamEntry teamMemberA={teamMember} key={index} />
        )}
      </div>
  </div>
  </div>
);

export default TeamInfo;
