import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

<<<<<<< 238ca0c661d7827e2884ad758aaadd13e59bcf81
class LoginModal extends Component {
  constructor(props) {
    super(props);
  } 

  render() {
    return (
      <div className="modal fade" id="loginModal" role="dialog">
        <div className="modal-dialog modal-sm">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">&times;</button>
              <h4 className="modal-title">Login</h4>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <input 
                  type="username" 
                  className="form-control" 
                  id="username" 
                  placeholder="Enter username" 
                />
              </div>
              <div className="form-group">
                <input 
                  type="password" 
                  className="form-control" 
                  id="pwd" 
                  placeholder="Enter password" 
                />
                <a href="/auth/fitbit" className="btn btn-primary">Fitbit</a>
                <a href="/auth/moves" className="btn btn-primary">Moves</a>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default">Login</button>
              <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
            </div>
          </div>
        </div>
=======
const LoginModal = () => (
  <div className="modal fade" id="loginModal" role="dialog">
    <div className="modal-dialog modal-sm">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">&times;</button>
          <h4 className="modal-title">Login</h4>
        </div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="modal-body">
            <div className="form-group">
              <input 
                type="username" 
                className="form-control" 
                id="username" 
                placeholder="Enter username" 
              />
            </div>
            <div className="form-group">
              <input 
                type="password" 
                className="form-control" 
                id="pwd" 
                placeholder="Enter password" 
              />
              <a href="/auth/fitbit" className="btn btn-primary">Fitbit</a>
              <a href="/auth/moves" className="btn btn-primary">Moves</a>
            </div>
          </div>
          <div className="modal-footer">
            <button type="submit" className="btn btn-default">Login</button>
            <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
          </div>
        </form>
>>>>>>> complete fitbit and moves integration
      </div>
    );
  }
}

export default LoginModal;
