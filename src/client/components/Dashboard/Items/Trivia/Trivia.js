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
  }

  handleQuizSelection(category) {
    this.props.fetchQuizQuestions(category);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { selectedOption, updateScore, score } = this.props;

    if (selectedOption === this.entry.answer) {
      console.log('answer correct!');
      this.score++;
      updateScore(this.score);
    } else {
      console.log('answer wrong!');
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
    const { receiveCurrentQuestion, updateQuizStatus } = this.props;
    this.index++;
    const nextQuestion = this.questions[this.index];
    if (nextQuestion) {
      receiveCurrentQuestion(nextQuestion);
    } else {
      console.log('Finished quiz!');
      updateQuizStatus('finished');
    }
  }

  render() {
    return (
      <div className="main-container">
        <div className="row">
          <Categories 
            handleQuizSelection={this.handleQuizSelection}
          />
          <Leaderboard />
        </div>
        <div className="row">
          <Entry 
            entry={this.questions[this.index]}
            handleSelection={this.handleSelection}
            handleSubmit={this.handleSubmit} 
            next={this.next}
            quizStatus={this.quizStatus}
          />
          <Results score={this.score} />
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
  quizStatus: PropTypes.string
};

export default Trivia;
