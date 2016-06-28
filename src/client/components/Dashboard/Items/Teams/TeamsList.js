import React, { Component, PropTypes } from 'react';
import TeamsListItem from './TeamsListItem';

class TeamsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.teams.map(team =>
            <TeamsListItem team={team} fetchTeamMembers={this.props.fetchTeamMembers.bind(this)} />
          )}
        </ul>
      </div>
    );
  }
}

TeamsList.propTypes = {
  teams: PropTypes.object,
  fetchTeamMembers: PropTypes.func
};

export default TeamsList;
