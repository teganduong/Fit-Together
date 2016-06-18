import { connect } from 'react-redux';
import { postDoc } from '../actions';
import PostDoc from '../components/PostDoc';

const mapStateToProps = ({ doctor }) => ({ doctor });

const mapDispatchToProps = (dispatch) => ({
  postDoc: (name, dob, office, phone, sex) => dispatch(postDoc(name, dob, office, phone, sex)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostDoc);

