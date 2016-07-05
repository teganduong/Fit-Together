import React, { Component, PropTypes } from 'react';


class CreateNewTeamModal extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(event) {
    event.preventDefault();
    const formData = {
      user_id: 1, 
      team_icon: this.refs.teamIcon.value,
      name: this.refs.teamName.value,
      description: this.refs.teamDescription.value
    };
    this.props.createTeam(formData); 
  }
  
  render() {
    return (
      <div className="modal fade" id="createNewTeamModal" role="dialog" data-backdrop="false">
        <div className="modal-dialog modal-m">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">&times;</button>
              <h4 className="modal-title">Create New Team</h4>
            </div>
            <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="modal-body">
              <div className="create-icon-container">
                <img className="create-team-icon img-circle" alt="test" />
                <h4>Team Icon Preview</h4>
              </div>
              <div className="form-group">
                <input 
                  type="teamIcon" 
                  className="form-control" 
                  ref="teamIcon" 
                  placeholder="Enter team icon link" 
                />
              </div>
              <div className="form-group">
                <input 
                  type="teamName" 
                  className="form-control" 
                  ref="teamName" 
                  placeholder="Enter team name" 
                />
              </div>
              <div className="form-group">
                <input 
                  type="description" 
                  className="form-control" 
                  ref="teamDescription" 
                  placeholder="Enter team description" 
                />
              </div>
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-default">Create New Team</button>
              <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
            </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

CreateNewTeamModal.propTypes = {
  createTeam: PropTypes.func
};

export default CreateNewTeamModal;

    // setTimeout(() => {
    //   browserHistory.push(`/dashboard/${formData.username}`);
    // }, 500);
