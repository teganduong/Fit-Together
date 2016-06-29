import { connect } from 'react-redux';
import { addUser } from '../actions';
import SignupModal from '../components/Home/SignupModal';

const mapDispatchToProps = (dispatch) => ({
  addUser: (name, username, password, email, weight, bmi, goal, points) => 
    dispatch(addUser(name, username, password, email, weight, bmi, goal, points)),
});

const Signup = connect(null, mapDispatchToProps)(SignupModal);

export default Signup;
