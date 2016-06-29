import React, { Component, PropTypes } from 'react';

class JoinTeamListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="join-list-container">
          <div className="join-icon-container">
            <img src={this.props.team.team_icon} className="join-team-icon img-circle" alt="test" />
          </div>
          <div className="join-title-container">
            <p className="join-text-title">{this.props.team.name}</p>
            <p className="join-text-body">{this.props.team.description}</p> 
          </div>
      </div>
    );
  }
}

JoinTeamListItem.propTypes = {
  team: PropTypes.object
};

export default JoinTeamListItem;