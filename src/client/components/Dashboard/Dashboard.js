import React, { Component, PropTypes } from 'react';
import NavBar from './NavBar';
import SideNavBar from './SideNavBar';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.props.fetchUser('jjones');
  }

  componentWillMount() {
    console.log('inside componentWillMount of Dashboard');
    this.props.fetchUser('jjones');
    // this.props.fetchUser(this.props.user.username);
  }

  componentWillReceiveProps(nextProps) {
    console.log('inside componentWillReceiveProps of Dashboard');
    console.log('this.props.user: ', this.props.user);
    console.log('nextProps: ', nextProps);
    if (nextProps.user !== this.props.user) {
      this.props.fetchUser(nextProps.user.username);
    }
  }

  render() {
    return (
      <div>
        <NavBar />
        <SideNavBar />
        {this.props.children}
      </div>
    );
  }
}

Dashboard.propTypes = {
  children: PropTypes.element.isRequired,
  fetchUser: PropTypes.func,
  user: PropTypes.object
};
