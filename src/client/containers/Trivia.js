import { connect } from 'react-redux';
import Trivia from '../components/Dashboard/Items/Trivia/Trivia';
import { 
  getEntries, 
  selectOption, 
  fetchQuizQuestions, 
  receiveCurrentQuestion, 
  updateScore,
  updateQuizStatus 
} from '../actions';

const mapStateToProps = ({ questions, question, selectedOption, score, quizStatus }) => 
  ({ questions, question, selectedOption, score, quizStatus });

const mapDispatchToProps = (dispatch) => ({
  getEntries: () => dispatch(getEntries()),
  selectOption: (option) => dispatch(selectOption(option)),
  fetchQuizQuestions: (category) => dispatch(fetchQuizQuestions(category)),
  receiveCurrentQuestion: (question) => dispatch(receiveCurrentQuestion(question)),
  updateScore: (score) => dispatch(updateScore(score)),
  updateQuizStatus: (status) => dispatch(updateQuizStatus(status))
});

export default connect(mapStateToProps, mapDispatchToProps)(Trivia);
