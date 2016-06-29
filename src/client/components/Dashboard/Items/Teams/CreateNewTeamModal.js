import React, { Component } from 'react';


const CreateNewTeamModal = () => (
  <div className="modal fade" id="createNewTeamModal" role="dialog" data-backdrop="false">
    <div className="modal-dialog modal-m">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">&times;</button>
          <h4 className="modal-title">Create New Team</h4>
        </div>
        <div className="modal-body">
          <div className="create-icon-container">
            <img className="create-team-icon img-circle" alt="test" />
            <h4>Team Icon Preview</h4>
          </div>
          <div className="form-group">
            <input 
              type="teamIcon" 
              className="form-control" 
              id="teamIcon" 
              placeholder="Enter team icon link" 
            />
          </div>
          <div className="form-group">
            <input 
              type="teamName" 
              className="form-control" 
              id="teamName" 
              placeholder="Enter team name" 
            />
          </div>
          <div className="form-group">
            <input 
              type="description" 
              className="form-control" 
              id="teamDescription" 
              placeholder="Enter team description" 
            />
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default">Create New Team</button>
          <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
        </div>
      </div>
    </div>
  </div>
);

export default CreateNewTeamModal;
