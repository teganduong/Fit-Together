import React, { Component, PropTypes } from 'react';

class TeamMember extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="team-member">
        <img src={this.props.member.user_icon} className="user-icon img-circle" alt="test" />
        <p>{this.props.member.username}</p>
      </div>
    );
  }
}

TeamMember.propTypes = {
  member: PropTypes.object
};

export default TeamMember;