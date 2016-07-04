import React, { Component, PropTypes } from 'react';
import Categories from './Categories';
import Entry from './Entry';
import Results from './Results';

class Trivia extends Component {
  constructor(props) {
    super(props);

    this.props.fetchQuizQuestions();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
    this.next = this.next.bind(this);
    this.questions = [{ options: [] }];
    this.entry = { options: [] };
    this.index = 0;
    this.score = 0;
  }

  componentWillMount() {
    this.props.fetchQuizQuestions();
  }

  componentWillReceiveProps(nextProps) {
    this.questions = nextProps.questions;
    this.entry = nextProps.question;
    this.score = nextProps.score;
  }

  handleSubmit(event) {
    event.preventDefault();
    const { selectedOption, updateScore, score, selectOption } = this.props;

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
    console.log('event.target.value for handleSelection: ', event.target.value);
    selectOption(event.target.value);
  }

  // next question
  next() {
    const { receiveCurrentQuestion } = this.props;
    this.index++;
    const nextQuestion = this.questions[this.index];
    if (nextQuestion) {
      receiveCurrentQuestion(nextQuestion);
    }
  }

  render() {

    return (
      <div className="main-container">
        <Categories />
        <Entry 
          entry={this.questions[this.index]}
          handleSelection={this.handleSelection}
          handleSubmit={this.handleSubmit} 
          next={this.next}
        />
        <Results score={this.score} />
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
  updateScore: PropTypes.func
};

export default Trivia;
