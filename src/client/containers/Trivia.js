import { connect } from 'react-redux';
import Trivia from '../components/Dashboard/Items/Trivia/Trivia';
import { getEntries, selectOption, fetchQuizQuestions, receiveCurrentQuestion } from '../actions';

const mapStateToProps = ({ questions, question, selectedOption }) => 
  ({ questions, question, selectedOption });

const mapDispatchToProps = (dispatch) => ({
  getEntries: () => dispatch(getEntries()),
  selectOption: (option) => dispatch(selectOption(option)),
  fetchQuizQuestions: () => dispatch(fetchQuizQuestions()),
  receiveCurrentQuestion: (question) => dispatch(receiveCurrentQuestion(question))
});

export default connect(mapStateToProps, mapDispatchToProps)(Trivia);
