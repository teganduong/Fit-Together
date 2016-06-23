import { connect } from 'react-redux';
import { postUser } from '../actions';
import Home from '../components/Home/Home';

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = (dispatch) => ({
  postUser: (name, username, password, email, weight, bmi, goal, points) => 
    dispatch(postUser(name, username, password, email, weight, bmi, goal, points)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

