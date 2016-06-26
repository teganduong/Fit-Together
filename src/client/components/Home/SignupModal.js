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
      weight: this.refs.weight.value,
      bmi: this.refs.bmi.value,
      goal: this.refs.goal.value,
      points: 0
    };
    this.props.addUser(formData.name, formData.username, formData.password, formData.email, 
      formData.weight, formData.bmi, formData.goal, formData.points);

    browserHistory.push(`/dashboard/${formData.username}`);
  }

  render() {
    return (
      <div className="signupForm">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
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
          <div className="signupButton">
            <button type="submit" className="btn btn-default">Sign up</button>
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
