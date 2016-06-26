import { connect } from 'react-redux';
import Home from '../components/Home/Home';

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(Home);

