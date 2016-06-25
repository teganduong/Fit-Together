import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class SignupModal extends Component {
  constructor(props) {
    super(props);
  } 

  handleSubmit(event) {
    event.preventDefault();
    const formData = {
      name: this.refs.firstName.value,
      username: this.refs.userName.value,
      password: this.refs.password.value,
      email: this.refs.email.value,
    };
    this.props.addUser(formData.name, formData.username, formData.password, formData.email);

    setTimeout(() => {
      browserHistory.push(`/dashboard/${formData.username}`);
    }, 500);
  }

  render() {
    return (
<<<<<<< 238ca0c661d7827e2884ad758aaadd13e59bcf81
      <div className="signupForm">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <div className="form-group">
              <input 
                type="text" 
                className="form-control" 
                ref="firstName" 
                placeholder="Enter full name" 
              />
              <input 
                type="text" 
                className="form-control" 
                ref="userName" 
                placeholder="Enter username" 
              />
              <input 
                type="password" 
                className="form-control" 
                ref="password" 
                placeholder="Enter password" 
              />
              <input
                type="email"
                className="form-control"
                ref="email"
                placeholder="Enter email"
              />
            </div>
=======
      <div className="modal fade" id="signupModal" role="dialog">
        <div className="modal-dialog modal-sm">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">&times;</button>
              <h4 className="modal-title">Signup</h4>
            </div>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <div className="modal-body">
                <div className="form-group">
                  <input 
                    type="firstName" 
                    className="form-control" 
                    ref="firstName" 
                    placeholder="Enter first name" 
                  />
                  <input 
                    type="userName" 
                    className="form-control" 
                    ref="userName" 
                    placeholder="Enter username" 
                  />
                  <input 
                    type="password" 
                    className="form-control" 
                    ref="password" 
                    placeholder="Enter password" 
                  />
                  <input
                    type="email"
                    className="form-control"
                    ref="email"
                    placeholder="Enter email"
                  />
                  <input
                    type="weight"
                    className="form-control"
                    ref="weight"
                    placeholder="Enter weight"
                  />
                  <input
                    type="bmi"
                    className="form-control"
                    ref="bmi"
                    placeholder="Enter bmi"
                  />
                  <input
                    type="goal"
                    className="form-control"
                    ref="goal"
                    placeholder="Enter goal"
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-default">Login</button>
                <button type="button" className="btn btn-default" data-dismiss="modal">
                  Cancel
                </button>
              </div>
            </form>
>>>>>>> complete fitbit and moves integration
          </div>
          <div className="signupButton">
            <button type="submit" className="btn btn-primary">Sign up</button>
          </div>
        </form>
      </div>
    );
  }
}

SignupModal.propTypes = {
  addUser: React.PropTypes.func,
};

export default SignupModal;
