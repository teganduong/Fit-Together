import { connect } from 'react-redux';
import Dashboard from '../components/Dashboard/Dashboard';
import { fetchUser, getUser } from '../actions';

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = (dispatch) => ({
  fetchUser: (username) => dispatch(fetchUser(username)),
  getUser: () => dispatch(getUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
