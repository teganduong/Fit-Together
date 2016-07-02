import React, { Component, PropTypes } from 'react';
import SideNavBar from './SideNavBar';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    // this.props.getSleep();
    // this.props.getUser();
    // this.sleep = [];
    // // this.props.fetchMovesSteps();
    // console.log('invoked moves');
  }



  render() {
    const { user } = this.props;
    console.log('user in Dashboard: ', this.props);

    return (
      <div>
        <div>
          <SideNavBar />
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  children: PropTypes.element.isRequired,
  getUser: PropTypes.func,
  user: PropTypes.object,
  getSleep: PropTypes.func,
  sleep: PropTypes.array
};