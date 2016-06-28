import { connect } from 'react-redux';
import Teams from '../components/Dashboard/Items/Teams/TeamsView';
import { fetchUserTeams, fetchTeamMembers } from '../actions';

const mapStateToProps = ({ teams }) => ({ teams });
const mapDispatchToProps = (dispatch) => ({
  fetchUserTeams: (userId) => dispatch(fetchUserTeams(userId)),
  fetchTeamMembers: (obj) => dispatch(fetchTeamMembers(obj))
});

export default connect(mapStateToProps, mapDispatchToProps)(Teams);
