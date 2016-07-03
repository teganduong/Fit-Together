import { connect } from 'react-redux';
import Trivia from '../components/Dashboard/Items/Trivia/Trivia';
import { getEntries } from '../actions';

const mapStateToProps = ({ entries }) => ({ entries });
const mapDispatchToProps = (dispatch) => ({
  getEntries: () => dispatch(getEntries())
});

export default connect(mapStateToProps, mapDispatchToProps)(Trivia);
