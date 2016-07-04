import { connect } from 'react-redux';
import Trivia from '../components/Dashboard/Items/Trivia/Trivia';
import { getEntries, selectOption, fetchQuizQuestions, receiveCurrentQuestion, updateScore } 
  from '../actions';

const mapStateToProps = ({ questions, question, selectedOption, score }) => 
  ({ questions, question, selectedOption, score });

const mapDispatchToProps = (dispatch) => ({
  getEntries: () => dispatch(getEntries()),
  selectOption: (option) => dispatch(selectOption(option)),
  fetchQuizQuestions: () => dispatch(fetchQuizQuestions()),
  receiveCurrentQuestion: (question) => dispatch(receiveCurrentQuestion(question)),
  updateScore: (score) => dispatch(updateScore(score))
});

export default connect(mapStateToProps, mapDispatchToProps)(Trivia);
