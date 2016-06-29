import React, { Component, PropTypes } from 'react';
import TeamsList from './TeamsList';

class TeamsView extends Component {
  constructor(props) {
    super(props);
    console.log('team', props);
    // this.props.createTeam();
    // this.props.deleteTeam();
    this.props.fetchUserTeams({ user_id: 1 });
    this.teams = [];
  }

  componentWillReceiveProps(nextProps) {
    this.teams = nextProps.teams;
  }

  render() {
    return (
      <div className="main-container">
        <div className="team-header">
          <div className="team-header-items">
            <h3>Teams</h3>
          </div>
          <div className="team-header-items team-header-button-container">
            <button type="button" className="btn btn-success">Create New Team</button>
          </div>
          <div className="team-header-items team-header-button-container">
            <button type="button" className="btn btn-default">Find New Team</button>
          </div>  
        </div>
        <TeamsList teams={this.teams} deleteTeam={this.props.deleteTeam.bind(this)} />
      </div>
    );
  }
}

TeamsView.propTypes = {
  teams: PropTypes.object,
  fetchUserTeams: PropTypes.func,
  fetchTeamMembers: PropTypes.func,
  createTeam: PropTypes.func,
  deleteTeam: PropTypes.func
};

export default TeamsView;
