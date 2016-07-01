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
            <JoinTeamListItem team={team} />
          )}
        </ul>
      </div>
    );
  }
}

JoinTeamList.propTypes = {
  teams: PropTypes.object
};

export default JoinTeamList;