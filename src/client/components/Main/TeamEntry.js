import React, { Component } from 'react';

<<<<<<< 4d9c51d108f6e4d76afb116753c5981a4ec0df81
const TeamEntry = ({ teamMemberA }) => (
  <div className="teamMember-image">
    <img src={teamMemberA.image} id="team-user-image" alt="test" className="img-circle" />
    <div>{teamMemberA.name}</div>
  </div>
);

TeamEntry.propTypes = {
  teamMemberA: React.PropTypes.object.isRequired,
};

=======
const TeamEntry = ({teamMemberA}) => (
  <div className="teamMember-image">
    <img src={teamMemberA.image} id="team-user-image" alt="test" className="img-circle" />
    <div>{teamMemberA.name}</div>
  </div>
);

>>>>>>> resolve rebase conflict
export default TeamEntry;
