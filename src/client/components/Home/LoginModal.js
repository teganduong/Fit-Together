import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

const images = {
  fitbit: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSHYmJAb3Zp52mrMRnjjrmPYsB2riKeDxBUH9mnO1ebtDIqakvdlg',
  moves: 'data:image/png;base64,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'
};

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
              <a href="/auth/fitbit"><img className="login-icon" alt="Stats Icon" src={images.fitbit} /></a>
              <a href="/auth/moves"><img className="login-icon" alt="Stats Icon" src={images.moves} /></a>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginModal;
