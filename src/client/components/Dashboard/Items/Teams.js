import React, { Component, PropTypes } from 'react';
import TeamEntry from './TeamEntry';

const user = {
  name: 'Scarlet',
  score: 1000,
  steps: 2000,
  image: 'https://pbs.twimg.com/profile_images/721759338034044929/uu8JkkSl.jpg'
};

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

class UserTeamPage extends Component {
  constructor(props) {
    super(props);
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
        <UserTeamList teams={this.teams} />
      </div>
    );
  }
}

UserTeamPage.propTypes = {
  teams: PropTypes.object,
  fetchUserTeams: PropTypes.func
};

class UserTeamList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.teams.map(team =>
            <UserTeamListItem team={team} />
          )}
        </ul>
      </div>
    );
  }
}

UserTeamList.propTypes = {
  teams: PropTypes.object.isRequired
};

// This class should fetch all the users from this team list item
class UserTeamListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="team-list-container">
        <div className="team-info-container">
          <div className="team-icon-container">
            <img src={this.props.team.team_icon} className="team-icon img-circle" alt="test" />
          </div>
          <div className="team-title-container">
            <p>{this.props.team.name}</p>
            <p>{this.props.team.description}</p>
            <button type="button" className="btn btn-danger">Leave Team</button>
          </div>
        </div>
        <div className="team-members-container">
          <TeamMemberList members={exampleMembers} />
        </div>
      </div>
    );
  }
}

UserTeamListItem.propTypes = {
  team: PropTypes.object.isRequired,
  members: PropTypes.object.isRequired
};

class TeamMemberList extends Component {
  constructor(props) {
    super(props); 
  }

  render() {
    return (
      <ul>
       {this.props.members.map(member =>
         <TeamMember member={member} />
       )};
      </ul>
    );
  }
}

TeamMemberList.propTypes = {
  members: PropTypes.object.isRequired
};

class TeamMember extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="team-member">
        <img src={this.props.member.user_icon} className="user-icon img-circle" alt="test" />
        <p>{this.props.member.username}</p>
      </div>
    );
  }
}

TeamMember.propTypes = {
  member: PropTypes.object.isRequired
};

export default UserTeamPage;
