import { connect } from 'react-redux';
import Teams from '../components/Dashboard/Items/Teams/TeamsView';
import { 
	fetchUserTeams, 
	fetchTeamMembers, 
	createTeam, 
	deleteTeam, 
	fetchOtherTeams,
	joinTeam,
  sendMessage,
  fetchMessages
} from '../actions';

const mapStateToProps = ({ teams, otherteams, messages, members }) => ({ teams, otherteams, messages, members });
const mapDispatchToProps = (dispatch) => ({
  fetchUserTeams: (obj) => dispatch(fetchUserTeams(obj)),
  fetchOtherTeams: (obj) => dispatch(fetchOtherTeams(obj)),
  fetchTeamMembers: (obj) => dispatch(fetchTeamMembers(obj)),
  createTeam: (obj) => dispatch(createTeam(obj)),
  deleteTeam: (obj) => dispatch(deleteTeam(obj)),
  joinTeam: (obj) => dispatch(joinTeam(obj)),
  sendMessage: (obj) => dispatch(sendMessage(obj)),
  fetchMessages: (obj) => dispatch(fetchMessages(obj))
});

export default connect(mapStateToProps, mapDispatchToProps)(Teams);
