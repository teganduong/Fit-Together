import React, { Component, PropTypes } from 'react';
import TeamMember from './TeamMember';

class TeamMemberList extends Component {
  constructor(props) {
    super(props); 
    // this.props.fetchTeamMembers({ user_id: 1, team_id: this.props.team.id });
    // console.log('inside teammeberlist', props);
    this.members = [];
  }

  componentWillReceiveProps(nextProps) {
    console.log('members', nextProps);
    // this.members = nextProps.members;
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
  members: PropTypes.array,
  fetchTeamMembers: PropTypes.func
};

export default TeamMemberList;
