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
            <TeamsListItem team={team} />
          )}
        </ul>
      </div>
    );
  }
}

TeamsList.propTypes = {
  teams: PropTypes.object.isRequired
};

export default TeamsList;
