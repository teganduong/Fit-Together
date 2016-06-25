import { connect } from 'react-redux';
import { addUser } from '../actions';
import Home from '../components/Home/Home';

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = (dispatch) => ({
  addUser: (name, username, password, email, weight, bmi, goal, points) => dispatch(addUser(name, username, password, email, weight, bmi, goal, points)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

