import { connect } from 'react-redux';
import Teams from '../components/Dashboard/Items/Teams';
import { fetchUserTeams } from '../actions';

const mapStateToProps = ({ teams }) => ({ teams });
const mapDispatchToProps = (dispatch) => ({
  fetchUserTeams: (userId) => dispatch(fetchUserTeams(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Teams);
