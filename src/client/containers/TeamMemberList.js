import { connect } from 'react-redux';
import TeamMemberList from '../components/Dashboard/Items/Teams/TeamMemberList';
import { fetchTeamMembers } from '../actions';

const mapStateToProps = ({ members }) => ({ members });
const mapDispatchToProps = (dispatch) => ({
  fetchTeamMembers: (obj) => dispatch(fetchTeamMembers(obj))
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamMemberList);
