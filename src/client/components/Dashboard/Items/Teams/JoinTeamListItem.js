import React, { Component, PropTypes } from 'react';

class JoinTeamListItem extends Component {
  constructor(props) {
    super(props);
    console.log('JoinTeamListItem', props);
  }

  render() {
    return (
      <div className="join-list-container">
        <a onClick={() => this.props.joinTeam({ user_id: 1, team_id: parseInt(this.props.team.team_id, 10) })}>
          <div className="join-icon-container">
            <img src={this.props.team.team_icon} className="join-team-icon img-circle" alt="test" />
          </div>
          <div className="join-title-container">
            <p className="join-text-title">{this.props.team.name}</p>
            <p className="join-text-body">{this.props.team.description}</p> 
          </div>
        </a>
      </div>
    );
  }
}

JoinTeamListItem.propTypes = {
  team: PropTypes.object,
  joinTeam: PropTypes.func
};

export default JoinTeamListItem;
