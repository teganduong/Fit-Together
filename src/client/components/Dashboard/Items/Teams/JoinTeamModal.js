import React, { Component, PropTypes } from 'react';
import JoinTeamList from './JoinTeamList';

const JoinTeamModal = (props) => (
  <div className="modal fade" id="joinTeamModal" role="dialog" data-backdrop="false">
    <div className="modal-dialog modal-m">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">&times;</button>
          <h4 className="modal-title">Click to Join Existing Team</h4>
        </div>
        <div className="modal-body join-team-body">
          <JoinTeamList joinTeam={props.joinTeam.bind(this)} teams={props.teams} />
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default" data-dismiss="modal">Exit</button>
        </div>
      </div>
    </div>
  </div>
);

JoinTeamModal.propTypes = {
  teams: PropTypes.array,
  joinTeam: PropTypes.func
};

export default JoinTeamModal;
