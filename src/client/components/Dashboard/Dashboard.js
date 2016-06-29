import React, { Component, PropTypes } from 'react';
import NavBar from './NavBar';
import SideNavBar from './SideNavBar';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    console.log(props, 'dsfadsfadsf');
    this.props.fetchUser(this.props.params.username);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user !== this.props.user) {
      this.props.fetchUser(nextProps.user.username);
    }
  }

  render() {
    let { username } = this.props.params;
    return (
      <div>
        <SideNavBar username={username} />
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
