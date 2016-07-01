import { connect } from 'react-redux';
import Teams from '../components/Dashboard/Items/Teams/TeamsView';
import { 
	fetchUserTeams, 
	fetchTeamMembers, 
	createTeam, 
	deleteTeam, 
	fetchOtherTeams
} from '../actions';

const mapStateToProps = ({ teams, otherteams }) => ({ teams, otherteams });
const mapDispatchToProps = (dispatch) => ({
  fetchUserTeams: (obj) => dispatch(fetchUserTeams(obj)),
  fetchOtherTeams: (obj) => dispatch(fetchOtherTeams(obj)),
  fetchTeamMembers: (obj) => dispatch(fetchTeamMembers(obj)),
  createTeam: (obj) => dispatch(createTeam(obj)),
  deleteTeam: (obj) => dispatch(deleteTeam(obj))
});

export default connect(mapStateToProps, mapDispatchToProps)(Teams);
