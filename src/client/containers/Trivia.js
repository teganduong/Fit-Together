import { connect } from 'react-redux';
import Trivia from '../components/Dashboard/Items/Trivia/Trivia';
import { 
  getEntries, 
  selectOption, 
  fetchQuizQuestions, 
  receiveCurrentQuestion, 
  updateScore,
  updateQuizStatus,
  updateUserPoints,
  updateIndex 
} from '../actions';

const mapStateToProps = ({ questions, question, selectedOption, score, quizStatus, index }) => 
  ({ questions, question, selectedOption, score, quizStatus, index });

const mapDispatchToProps = (dispatch) => ({
  getEntries: () => dispatch(getEntries()),
  selectOption: (option) => dispatch(selectOption(option)),
  fetchQuizQuestions: (category) => dispatch(fetchQuizQuestions(category)),
  receiveCurrentQuestion: (question) => dispatch(receiveCurrentQuestion(question)),
  updateScore: (score) => dispatch(updateScore(score)),
  updateQuizStatus: (status) => dispatch(updateQuizStatus(status)),
  updateUserPoints: (points) => dispatch(updateUserPoints(points)),
  updateIndex: (index) => dispatch(updateIndex(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(Trivia);
