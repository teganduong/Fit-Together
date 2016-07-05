import React, { Component, PropTypes } from 'react';
import JoinTeamListItem from './JoinTeamListItem';

class JoinTeamList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.teams.map(team =>
            <JoinTeamListItem joinTeam={this.props.joinTeam.bind(this)} team={team} />
          )}
        </ul>
      </div>
    );
  }
}

JoinTeamList.propTypes = {
  teams: PropTypes.array,
  joinTeam: PropTypes.func
};

export default JoinTeamList;
