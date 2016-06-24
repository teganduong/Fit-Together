import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

const user = {
  name: 'Jessica Jones',
  username: 'jjones',
  password: 'jjones',
  email: 'jjones@gmail.com',
  weight: 145,
  bmi: 21.3,
  goal: 'Live a healthy lifestyle',
  points: 0
};

class UserInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false
    };
  }

  closeModal() {
    this.setState({ showModal: false });
  }

  openModal() {
    console.log('openModal button clicked!');
    this.setState({ showModal: true });
  }

  render() {
    return (
      <div className="main-container">
        <div className="top-container modal-container">
          <h3>Profile Information</h3>
          <button 
            type="button" 
            className="btn btn-primary"
            onClick={this.openModal}
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
                <h4 className="modal-title" id="myModalLabel">Modal title</h4>
              </div>
              <div className="modal-body">
                ...
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
  }
}

export default UserInfo;
