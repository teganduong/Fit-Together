import { connect } from 'react-redux';
import Charts from '../components/Dashboard/Profile/ChartData.js';
import { getActivities } from '../actions';

const mapStateToProps = ({ activities }) => ({ activities });
const mapDispatchToProps = (dispatch) => ({
  getActivities: () => dispatch(getActivities())
});

export default connect(mapStateToProps, mapDispatchToProps)(Charts);

