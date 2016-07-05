import React, { Component, PropTypes } from 'react';
import TeamMember from './TeamMember';

class TeamMemberList extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.members, 'TeamMemberList');
  }

  componentWillReceiveProps(nextProps) {

  }

  render() {
    return (
      <ul className="list">
       {this.props.members.map(member =>
         <TeamMember member={member} />
       )};
      </ul>
    );
  }
}

TeamMemberList.propTypes = {
  members: PropTypes.array
};

export default TeamMemberList;
