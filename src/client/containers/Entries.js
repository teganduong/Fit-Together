import { connect } from 'react-redux';
import Entries from '../components/Dashboard/Items/Entries/Entries';
import { getEntries } from '../actions';

const mapStateToProps = ({ entries }) => ({ entries });
const mapDispatchToProps = (dispatch) => ({
  getEntries: () => dispatch(getEntries())
});

export default connect(mapStateToProps, mapDispatchToProps)(Entries);
