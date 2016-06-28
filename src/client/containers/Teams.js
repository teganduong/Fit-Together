import { connect } from 'react-redux';
import Teams from '../components/Dashboard/Items/Teams/TeamsView';
import { fetchUserTeams, fetchTeamMembers, createTeam } from '../actions';

const mapStateToProps = ({ teams }) => ({ teams });
const mapDispatchToProps = (dispatch) => ({
  fetchUserTeams: (userId) => dispatch(fetchUserTeams(userId)),
  fetchTeamMembers: (obj) => dispatch(fetchTeamMembers(obj)),
  createTeam: () => dispatch(createTeam())
});

export default connect(mapStateToProps, mapDispatchToProps)(Teams);
