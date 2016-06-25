import { connect } from 'react-redux';
import UserInfo from '../components/Dashboard/Items/Settings';
import { fetchUserInfo } from '../actions';

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = (dispatch) => ({
  fetchUserInfo: (username) => dispatch(fetchUserInfo(username))
});

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(UserInfo);
export default UserContainer;

// import React, { Component, PropTypes } from 'react';
// import UserInfo from '../components/Dashboard/Items/Settings';
// import { fetchUserInfo } from '../actions';
// import { connect } from 'react-redux';

// class FetchingComponent extends Component {
//   componentDidMount() {
//     this.props.dispatch(fetchUserInfo('jjones'));
//   }

//   componentWillReceiveProps(nextProps) {
//     if (nextProps.username !== 'jjones') {
//       this.props.fetchUserInfo(nextProps.username);
//     }
//   }

//   render() {
//     // have to deal with the case where the store state is
//     // returned before the fetch action is dispatched
//     if (!this.props.user) {
//       return null;
//     }

//     return <UserInfo user={this.props.user} />;
//   }
// }

// FetchingComponent.propTypes = {
//   fetchUserInfo: PropTypes.func,
//   username: PropTypes.string,
//   user: PropTypes.object,
//   dispatch: PropTypes.func
// };

// const UserContainer = connect((state, props) => {
//   const user = state.user;
//   return { user };
// }, dispatch => {
//   return {
//     fetchUserInfo: username => dispatch(fetchUserInfo(username))
//   };
// })(FetchingComponent);

// UserContainer.propTypes = {
//   username: PropTypes.string
// };

// export default UserContainer;
