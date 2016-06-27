import { connect } from 'react-redux';
import Dashboard from '../components/Dashboard/Dashboard';
import { fetchUser, fetchUserTeams } from '../actions';

const mapStateToProps = ({ user, teams }) => ({ user, teams });
const mapDispatchToProps = (dispatch) => ({
  fetchUser: (username) => dispatch(fetchUser(username)),
  fetchUserTeams: (userId) => dispatch(fetchUserTeams(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
