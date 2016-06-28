import { connect } from 'react-redux';
import Dashboard from '../components/Dashboard/Dashboard';
import { fetchUser, getUser, addExercise } from '../actions';

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = (dispatch) => ({
  fetchUser: (username) => dispatch(fetchUser(username)),
  getUser: () => dispatch(getUser()),
  addExercise: (date_performed, type, duration, distance, reps, sets) =>
    dispatch(addExercise(date_performed, type, duration, distance, reps, sets)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

/*
  addFood: (date_performed, protein, fats, carbs, calories) =>
    dispatch(addFood(date_performed, type, duration, distance, reps, sets)),
  addMem: (date_performed, mood, energy, motivation) =>
    dispatch(addMem(date_performed, mood, energy, motivation)),
  addSleep: (date_performed, duration, quality) =>
    dispatch(addSleep(date_performed, duration, quality)),

*/
