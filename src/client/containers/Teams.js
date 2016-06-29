import { connect } from 'react-redux';
import Teams from '../components/Dashboard/Items/Teams/TeamsView';
import { fetchUserTeams, fetchTeamMembers, createTeam, deleteTeam } from '../actions';

const mapStateToProps = ({ teams }) => ({ teams });
const mapDispatchToProps = (dispatch) => ({
  fetchUserTeams: (userId) => dispatch(fetchUserTeams(userId)),
  fetchTeamMembers: (obj) => dispatch(fetchTeamMembers(obj)),
  createTeam: () => dispatch(createTeam()),
  deleteTeam: (obj) => dispatch(deleteTeam(obj))
});

export default connect(mapStateToProps, mapDispatchToProps)(Teams);
