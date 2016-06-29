import React, { PropTypes } from 'react';

const UserInfo = ({ user }) => (
  <div>
    <div>
      <h3>Profile Information</h3>
      <button 
        type="button" 
        className="btn btn-primary"
        data-toggle="modal" 
        data-target="#editProfileModal"
      >
        Edit Profile
      </button>
    </div>
    <div className="user-info">
      <div><label>Name:</label> {user.name}</div>
      <div><label>Username:</label> {user.username}</div>
      <div><label>Email:</label> {user.email}</div>
      <div><label>Goal:</label> {user.goal}</div>
    </div>

    <div 
      className="modal fade" 
      id="editProfileModal" 
      tabindex="-1" 
      role="dialog" aria-labelledby="myModalLabel"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 className="modal-title" id="myModalLabel">Edit your profile</h4>
          </div>
          <div className="modal-body">
            <form>
              <label>Name</label>
              <div className="form-group">
                <input type="text" className="form-control" defaultValue={user.name} />
              </div>
              <label>Username</label>
              <div className="form-group">
                <input type="text" className="form-control" defaultValue={user.username} />
              </div>
              <label>Email</label>
              <div className="form-group">
                <input type="text" className="form-control" defaultValue={user.email} />
              </div>
              <label>Goal</label>
              <div className="form-group">
                <input type="text" className="form-control" defaultValue={user.goal} />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-default" data-dismiss="modal">Close
            </button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
); 

UserInfo.propTypes = {
  user: PropTypes.object
}; 

export default UserInfo;
