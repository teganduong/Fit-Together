import { connect } from 'react-redux';
import Dashboard from '../components/Dashboard/Dashboard';
import { getUser, addExercise, getActivities, getSleep, fetchTips } from '../actions';

const mapStateToProps = ({ user, activities, sleep }) => ({ user, activities, sleep });
const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(getUser()),
  fetchUser: (username) => dispatch(fetchUser(username)),
  getActivities: () => dispatch(getActivities()),
  getSleep: () => dispatch(getSleep()),
  fetchTips: () => dispatch(fetchTips())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
