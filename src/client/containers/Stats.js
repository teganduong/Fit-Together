import { connect } from 'react-redux';
import Stats from '../components/Dashboard/Items/Stats/Stats.js';
import { getSleep } from '../actions';

const mapStateToProps = ({ activities }) => ({ activities });
const mapDispatchToProps = (dispatch) => ({
  getActivities: () => { console.log('get acts'); } // dispatch(getSleep()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Stats);

