import React, { Component, PropTypes } from 'react';

class TeamMember extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="clearfix">
        <img className="img-circle member-icon" src={this.props.member.user_icon} alt="avatar" />
        <div className="about">
          <div className="name">{this.props.member.name}</div>
          <div className="status">
            <i className="fa fa-circle offline"></i> left 7 mins ago
          </div>
        </div>
      </li>
    );
  }
}

TeamMember.propTypes = {
  member: PropTypes.object
};

export default TeamMember;
