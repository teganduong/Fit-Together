import React, { Component, PropTypes } from 'react';
import TeamMember from './TeamMember';

class TeamMemberList extends Component {
  constructor(props) {
    super(props); 
  }

  render() {
    return (
      <ul>
       {this.props.members.map(member =>
         <TeamMember member={member} />
       )};
      </ul>
    );
  }
}

TeamMemberList.propTypes = {
  members: PropTypes.object
};

export default TeamMemberList;
