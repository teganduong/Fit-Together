import React, { Component, PropTypes } from 'react';
import SideNavBar from './SideNavBar';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.props.getUser();
  }

  // componentWillMount() {
  //   this.props.getUser();
  // }

  componentDidMount() {
    this.props.getUser();
  }

  componentWillReceiveProps(nextProps) {
    console.log('these are nextProps in dashboard', nextProps);
    // if (nextProps.user !== this.props.user) {
    // }
  }

  render() {
    const { user } = this.props;
    console.log('user in Dashboard: ', user);

    return (
      <div>
        <SideNavBar />
          {this.props.children && React.cloneElement(this.props.children, {
            user: user
          })}
      </div>
    );
  }
}

Dashboard.propTypes = {
  children: PropTypes.element.isRequired,
  getUser: PropTypes.func,
  user: PropTypes.object
};
