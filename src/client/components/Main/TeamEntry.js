import React, { Component } from 'react';

const TeamEntry = ({ teamMemberA }) => (
  <div className="teamMember-image">
    <img src={teamMemberA.image} id="team-user-image" alt="test" className="img-circle" />
    <div>{teamMemberA.name}</div>
  </div>
);

export default TeamEntry;

TeamEntry.propTypes = {
  teamMemberA: React.PropTypes.object
};
