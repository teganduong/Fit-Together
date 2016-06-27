import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

class LoginModal extends Component {
  constructor(props) {
    super(props);
  } 

// handleSubmit() {
// fetch('/auth/fitbit', {
//       method: 'GET',
//     headers: {
//       'Access-Control-Allow-Origin': '*'
//    },
//    dataTy: 'text/html',
//    crossDomain:true
//   }).then(function(json) {
//     console.log('parsed json', json);
//   }).catch(function(ex) {
//     console.log('parsing failed', ex);
//   });
// }
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
  </div>
);
}
}

export default LoginModal;