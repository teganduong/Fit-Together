import React, { Component } from 'react';

const TeamEntry = ({ teamMemberA }) => (
  <div className="teamMember-image">
    <img src={teamMemberA.image} id="team-user-image" alt="test" className="img-circle" />
    <div>{teamMemberA.name}</div>
  </div>
);

TeamEntry.propTypes = {
  teamMemberA: React.PropTypes.object.isRequired,
};

export default TeamEntry;
