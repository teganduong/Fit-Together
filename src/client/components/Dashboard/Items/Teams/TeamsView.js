import React, { Component, PropTypes } from 'react';
import TeamsList from './TeamsList';
import CreateNewTeamModal from './CreateNewTeamModal';
import JoinTeamModal from './JoinTeamModal';
import Map from './Map';

class TeamsView extends Component {
  constructor(props) {
    super(props);
    console.log('team props', props);
    this.props.fetchUserTeams({ user_id: 1 });
    this.props.fetchOtherTeams({ user_id: 1 });
    this.teams = [];
    this.otherteams = [];
  }

  componentWillReceiveProps(nextProps) {
    this.teams = nextProps.teams;
    this.otherteams = nextProps.otherteams;
  }

  render() {
    return (
      <div>
        <div className="main-container">
          <div className="team-header">
            <div className="team-header-items">
              <h3>Teams</h3>
            </div>
            <div className="team-header-items team-header-button-container">
              <button 
                type="button" 
                className="btn btn-success" 
                data-toggle="modal" 
                data-target="#createNewTeamModal"
              >
                Create New Team
              </button>
            </div>
            <div className="team-header-items team-header-button-container">
              <button 
                type="button" 
                className="btn btn-default" 
                data-toggle="modal" 
                data-target="#joinTeamModal"
              >
                Join Team
              </button>
            </div>  
          </div>
          <div>
            <Map />
          </div>
          <div>
            <TeamsList teams={this.teams} deleteTeam={this.props.deleteTeam.bind(this)} />
          </div>
        </div>
        <div>
          <CreateNewTeamModal createTeam={this.props.createTeam.bind(this)} />
          <JoinTeamModal joinTeam={this.props.joinTeam.bind(this)} teams={this.otherteams} />
        </div>
      </div>
    );
  }
}

TeamsView.propTypes = {
  teams: PropTypes.object,
  fetchUserTeams: PropTypes.func,
  fetchOtherTeams: PropTypes.func,
  fetchTeamMembers: PropTypes.func,
  createTeam: PropTypes.func,
  deleteTeam: PropTypes.func,
  joinTeam: PropTypes.func
};

export default TeamsView;
