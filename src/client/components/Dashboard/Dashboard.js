import React, { Component, PropTypes } from 'react';
import NavBar from './NavBar';
import SideNavBar from './SideNavBar';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUser();
  }

  render() {
    let user;

    if (this.props.user[0]) {
      user = this.props.user[0].name;
    } else {
      user = '';
    }

    return (
      <div>
        <SideNavBar user={user} />
        {this.props.children && React.cloneElement(this.props.children, {
          user: this.props.user.data
        })}
      </div>
    );
  }
}

Dashboard.propTypes = {
  children: PropTypes.element.isRequired,
<<<<<<< 24f7e4bf4bfc5c238b6fafcae67151ab4fcb0b85
  getUser: PropTypes.func,
  user: PropTypes.object,
=======
  fetchUser: PropTypes.func,
  getUser: PropTypes.func,
  user: PropTypes.array,
  params: PropTypes.object
>>>>>>> complete linting
};
