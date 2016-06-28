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
  
  componentWillReceiveProps(nextProps) {
      // this.props.fetchUser(nextProps.user);
    console.log('these are nextProps in dashboard', nextProps);
    // if (nextProps.user !== this.props.user) {
    // }

  }

  render() {

    let { user } = this.props;
        console.log('THIS IS DASHBOARD USER', this.props.user);

    return (
      <div>
        <SideNavBar username={username} />
        <NavBar />
        <SideNavBar username={user} />
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
