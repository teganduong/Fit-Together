import React, { Component, PropTypes } from 'react';
import TeamMemberList from './TeamMemberList';

const exampleMembers = [
  {
    username: 'Mom',
    user_icon: 'https://camo.githubusercontent.com/5e6eb0b00d714eb5b8ec84254205c61c2a97c68d/687474703a2f2f6f63746f6465782e6769746875622e636f6d2f696d616765732f77616c646f6361742e6a7067'
  },
  {
    username: 'Sis',
    user_icon: 'https://assets-cdn.github.com/images/modules/styleguide/linktocat.png'
  },
  {
    username: 'Bro',
    user_icon: 'https://octodex.github.com/images/gangnamtocat.png'
  },
  {
    username: 'Grandpa',
    user_icon: 'https://stevegrunwell.github.io/wordpress-git/assets/heisencat.png'
  }
];

class TeamsListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-md-6">
      <div className="team-list-container">
        <div className="team-info-container">
          <div className="team-icon-container">
            <div className="team-image-container">
              <img src={this.props.team.team_icon} className="team-icon img-circle" alt="test" />
            </div>
          </div>
          <div className="team-title-container">
            <p className="team-text-title">{this.props.team.name}</p>
            <p className="team-text-body">{this.props.team.description}</p>
            <button 
              type="button" 
              onClick={() => this.props.deleteTeam({ team_id: this.props.team.id })} 
              className="btn btn-danger btn-sm"
            >
              Leave Team
            </button>
          </div>
        </div>
        <div className="team-members-container">
          <TeamMemberList members={exampleMembers} team={this.props.team} />
        </div>
      </div>
      </div>
    );
  }
}

TeamsListItem.propTypes = {
  team: PropTypes.object,
  members: PropTypes.array,
  deleteTeam: PropTypes.func
};

export default TeamsListItem;
