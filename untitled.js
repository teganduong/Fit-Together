import React, { Component, PropTypes } from 'react';
import CreateNewTeamListItem from './CreateNewTeamListItem';

class TeamsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.teams.map(team =>
            <TeamsListItem team={team} deleteTeam={this.props.deleteTeam.bind(this)} />
          )}
        </ul>
      </div>
    );
  }
}

TeamsList.propTypes = {
  teams: PropTypes.object,
  deleteTeam: PropTypes.func
};

export default TeamsList;