import React, { Component, PropTypes } from 'react';
import Categories from './Categories';
import Entry from './Entry';
import Results from './Results';
import Leaderboard from './Leaderboard';

class Trivia extends Component {
  constructor(props) {
    super(props);

    this.handleQuizSelection = this.handleQuizSelection.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
    this.next = this.next.bind(this);
    this.questions = [{ options: [] }];
    this.entry = { options: [], category: '' };
    this.index = 0;
    this.score = 0;
    this.quizStatus = '';
  }

  componentWillReceiveProps(nextProps) {
    this.questions = nextProps.questions;
    this.entry = nextProps.question;
    this.score = nextProps.score;
    this.quizStatus = nextProps.quizStatus;
    this.index = nextProps.index;
  }

  handleQuizSelection(category) {
    const { updateQuizStatus, fetchQuizQuestions, updateScore, updateIndex } = this.props;
    updateIndex(0);
    updateQuizStatus('');
    updateScore(0);
    fetchQuizQuestions(category);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { selectedOption, updateScore, score } = this.props;

    if (selectedOption === this.entry.answer) {
      this.score++;
      updateScore(this.score);
    } else {
      this.score--;
      updateScore(this.score);
    }
  }

  handleSelection(event) {
    const { selectOption } = this.props;
    selectOption(event.target.value);
  }

  // next question
  next() {
    const { receiveCurrentQuestion, updateQuizStatus, updateUserPoints, updateIndex } = this.props;
    this.index++;
    updateIndex(this.index);
    const nextQuestion = this.questions[this.index];
    if (nextQuestion) {
      receiveCurrentQuestion(nextQuestion);
    } else {
      updateQuizStatus('finished');
      updateUserPoints(this.score);
    }
  }

  render() {
    return (
      <div className="main-container">
        <div className="row">
          <div className="col-sm-8">
            <Categories 
              handleQuizSelection={this.handleQuizSelection}
            />
            <Entry 
              entry={this.questions[this.index]}
              handleSelection={this.handleSelection}
              handleSubmit={this.handleSubmit} 
              next={this.next}
              quizStatus={this.quizStatus}
              score={this.score}
            />
          </div>
          <div className="col-sm-4">
            <Leaderboard />
            <Results score={this.score} />
          </div>
        </div>
      </div>
    );
  }
}

Trivia.propTypes = {
  fetchQuizQuestions: PropTypes.func,
  questions: PropTypes.array,
  question: PropTypes.object,
  receiveCurrentQuestion: PropTypes.func,
  selectOption: PropTypes.func,
  selectedOption: PropTypes.oneOfType([       
    PropTypes.string,
    PropTypes.number 
  ]),
  score: PropTypes.number,
  updateScore: PropTypes.func,
  updateQuizStatus: PropTypes.func,
  quizStatus: PropTypes.string,
  updateUserPoints: PropTypes.func,
  updateIndex: PropTypes.func,
  index: PropTypes.number
};

export default Trivia;
