import { connect } from 'react-redux';
import Logbook from '../components/Dashboard/Items/Logbook/Logbook';
import { createMem } from '../actions';

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = (dispatch) => ({
  addMem: (date_performed, mood, energy, motivation) => dispatch(createMem(date_performed, mood, energy, motivation)),
  addExercise: (date_performed, type, duration, distance, reps, sets) => dispatch(date_performed, type, duration, distance, reps, sets),
  addFood: (date_performed, protein, fats, carbs, calories) => dispatch(date_performed, protein, fats, carbs, calories),
  addSleep: (date_performed, duration, quality) => dispatch(date_performed, duration, quality)
});
 
export default connect(mapStateToProps, mapDispatchToProps)(Logbook);
