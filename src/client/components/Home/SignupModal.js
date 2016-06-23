import React, { Component } from 'react';

class SignupModal extends Component {
  constructor(props) {
    super(props);
<<<<<<< HEAD
<<<<<<< HEAD
=======
    console.log("INSIDE SIGNUP MODAL", props);
>>>>>>> parent of d69e2bd... complete linting
=======
    console.log("INSIDE SIGNUP MODAL", props);
>>>>>>> parent of d69e2bd... complete linting
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
    console.log('shows formdata', formData);
    this.props.postUser(formData.name, formData.username, formData.password, formData.email, formData.weight, formData.bmi, formData.goal, formData.points);
    console.log('inside signup and posted')
  }

  render() {
    return (
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
              <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
            </div>
          </form>
          </div>
        </div>
      </div>
    );
  };
};
<<<<<<< HEAD

SignupModal.propTypes = {
  postUser: React.PropTypes.func,
};
=======
>>>>>>> parent of d69e2bd... complete linting

export default SignupModal;
