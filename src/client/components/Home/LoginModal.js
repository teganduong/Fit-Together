import React, { Component } from 'react';

class LoginModal extends Component {
  constructor(props) {
    super(props);
    console.log('inside login', props);
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
  this.props.addUser(formData.name, formData.username, formData.password, formData.email, formData.weight, formData.bmi, formData.goal, formData.points);
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
          <form action="/login" method="post" onSubmit={this.handleSubmit.bind(this)}>
          <div className="modal-body">
            <div className="form-group">
              <input 
                type="email" 
                className="form-control" 
                ref="email" 
                placeholder="Enter email" 
              />
            </div>
            <div className="form-group">
              <input 
                type="password" 
                className="form-control" 
                ref="password" 
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
          </form>
        </div>
      </div>
    </div>
  )
};
}

export default LoginModal;
