import { connect } from 'react-redux';
import Stats from '../components/Dashboard/Items/Stats/Stats.js';
import { getSleep, addMem, addExercise, addFood, addSleep } from '../actions';

const mapStateToProps = ({ activities }) => ({ activities });
const mapDispatchToProps = (dispatch) => ({
  getActivities: () => { console.log('get acts'); }, // dispatch(getSleep()),
  addMem: (obj) => dispatch(addMem(obj)),
  addExercise: (obj) => {
    console.log('inside addExercise');
    return dispatch(addExercise(obj));
  },
  addFood: (obj) => dispatch(addFood(obj)),
  addSleep: (obj) => dispatch(addSleep(obj))
});

export default connect(mapStateToProps, mapDispatchToProps)(Stats);

