import React, { Component, PropTypes } from 'react';
import NavBar from './NavBar';
import SideNavBar from './SideNavBar';
import Profile from './Profile/Profile';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.props.getUser();
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
    const { user } = this.props;
    console.log('user in Dashboard: ', user);
    return (
      <div className="row">
        <div className="col-md-2">
          <SideNavBar />
        </div>
        <div className="col-md-10">
          {this.props.children && React.cloneElement(this.props.children, {
            user: user
          })}
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  children: PropTypes.element.isRequired,
  user: PropTypes.object,
  getUser: PropTypes.func,
};
