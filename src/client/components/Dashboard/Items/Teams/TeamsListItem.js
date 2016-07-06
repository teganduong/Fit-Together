import React, { Component, PropTypes } from 'react';
import TeamMemberList from './TeamMemberList';

class TeamsListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="team-list-container">
        <div className="row">
          <div className="col-md-4">
            <div className="team-image-container">
              <img src={this.props.team.team_icon} className="team-icon img-circle" alt="test" />
            </div>
          </div>
          <div className="col-md-8">
            <p className="team-text-title">{this.props.team.name}</p>
            <p className="team-text-body">{this.props.team.description}</p>
            <div className="row">
              <div className="col-md-6">
                <button 
                  type="button"  
                  className="btn btn-success btn-sm"
                  onClick={() => this.props.fetchTeamChat(parseInt(this.props.team.team_id, 10), 1)}
                >
                  Chat
                </button>
              </div>
              <div className="col-md-6">
                <button 
                  type="button" 
                  onClick={() => this.props.deleteTeam({ team_id: parseInt(this.props.team.team_id, 10), user_id: 1 })} 
                  className="btn btn-danger btn-sm"
                >
                  Leave Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

TeamsListItem.propTypes = {
  team: PropTypes.object,
  members: PropTypes.array,
  deleteTeam: PropTypes.func,
  fetchTeamChat: PropTypes.func
};

export default TeamsListItem;
