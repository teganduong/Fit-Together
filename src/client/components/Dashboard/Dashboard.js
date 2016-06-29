import React, { Component, PropTypes } from 'react';
import NavBar from './NavBar';
import SideNavBar from './SideNavBar';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUser();
    console.log('inside dashboard', this.props.user);
  }

  componentWillReceiveProps(nextProps) {
    console.log('inside dashboard', nextProps);
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
  fetchUser: PropTypes.func,
  user: PropTypes.object,
  params: PropTypes.object,
};