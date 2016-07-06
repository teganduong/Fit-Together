import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

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
                <a href="/auth/fitbit" className="btn btn-primary"><img className="fitbit" src="images/FitbitLogo.png"  alt="Fitbit logo" />Fitbit</a>
                <a href="/auth/moves" className="btn btn-primary">Moves</a>
                <a href="/demo" className="btn btn-primary">Demo</a>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default">Login</button>
              <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginModal;
