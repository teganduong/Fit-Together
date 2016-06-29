import { connect } from 'react-redux';
import Home from '../components/Home/Home';
import { getUser } from '../actions';

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(getUser())
});
export default connect(mapStateToProps)(Home);

