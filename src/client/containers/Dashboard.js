import { connect } from 'react-redux';
import Dashboard from '../components/Dashboard/Dashboard';
import { getUser, addExercise, getActivities, fetchTips, fetchUser } from '../actions';

const mapStateToProps = ({ user, activities, tips }) => ({ user, activities, tips });
const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(getUser()),
  fetchUser: (username) => dispatch(fetchUser(username)),
  getActivities: () => dispatch(getActivities()),
  fetchTips: () => dispatch(fetchTips())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
