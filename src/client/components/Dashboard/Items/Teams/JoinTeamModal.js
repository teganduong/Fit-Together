import React, { Component } from 'react';

const JoinTeamModal = () => (
  <div className="modal fade" id="joinTeamModal" role="dialog" data-backdrop="false">
    <div className="modal-dialog modal-sm">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">&times;</button>
          <h4 className="modal-title">Join</h4>
        </div>
        <div className="modal-body">
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default">Join Team</button>
          <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
        </div>
      </div>
    </div>
  </div>
);

export default JoinTeamModal;