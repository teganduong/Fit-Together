import React, { Component, PropTypes } from 'react';
import JoinTeamList from './JoinTeamList';

const teams = [
  {
    user_id: 2,
    name: 'Walk and Talk',
    description: 'This group is for people who love to hike in the great outdoors',
    team_icon: 'http://www.womenshealthmag.com/sites/womenshealthmag.com/files/images/0410-youcan-hiking-0008.jpg'
  },
  {
    user_id: 2,
    name: 'Let\'s stretch',
    description: 'Wanna stretch and be enlightened? This group is for you',
    team_icon: 'http://www.pilatesstyle.com/wp-content/uploads/2016/03/pilates-mental-health.jpg'
  },
  {
    user_id: 2,
    name: 'Swoler Bears United',
    description: 'Wanna exercise during the weekend? Meet likemided people just like you',
    team_icon: 'http://fitnessworkoutideas.com/wp-content/uploads/2014/06/fitness-workout-ideas-group-fitness-games.jpg'
  },
  {
    user_id: 2,
    name: 'Yum Yum in my Tum',
    description: 'I eat healthy, you eat healthy, we all eat healthy',
    team_icon: 'http://www.slt2008.org/wp-content/uploads/2014/02/aa-Healthy-Eating.jpg'
  }
];

const JoinTeamModal = (props) => (
  <div className="modal fade" id="joinTeamModal" role="dialog" data-backdrop="false">
    <div className="modal-dialog modal-m">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">&times;</button>
          <h4 className="modal-title">Click to Join Existing Team</h4>
        </div>
        <div className="modal-body">
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
