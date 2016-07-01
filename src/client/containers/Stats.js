import { connect } from 'react-redux';
import Stats from '../components/Dashboard/Items/Stats/Stats.js';
import { getSleep } from '../actions';

const mapStateToProps = ({ sleep }) => ({ sleep });
const mapDispatchToProps = (dispatch) => ({
  getSleep: () => dispatch(getSleep()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Stats);

