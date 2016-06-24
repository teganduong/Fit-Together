import { connect } from 'react-redux';
import UserInfo from '../components/Dashboard/Items/Settings';

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(UserInfo);
