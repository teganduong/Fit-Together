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
    this.props.addUser(formData);

    setTimeout(() => {
      browserHistory.push(`/dashboard/${formData.username}`);
    }, 500);
  }

  render() {
    return (
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