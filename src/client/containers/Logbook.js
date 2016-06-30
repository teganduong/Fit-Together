import { connect } from 'react-redux';
import Logbook from '../components/Dashboard/Items/Logbook/Logbook';
import { addMem, addExercise, addFood, addSleep } from '../actions';

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = (dispatch) => ({
  addMem: (date_performed, mood, energy, motivation) => dispatch(addMem(date_performed, mood, energy, motivation)),
  addExercise: (date_performed, type, duration, distance, reps, sets) => dispatch(addExercise(date_performed, type, duration, distance, reps, sets)),
  addFood: (date_performed, protein, fats, carbs, calories) => dispatch(addFood(date_performed, protein, fats, carbs, calories)),
  addSleep: (date_performed, duration, quality) => dispatch(addSleep(date_performed, duration, quality))
});
 
export default connect(mapStateToProps, mapDispatchToProps)(Logbook);
