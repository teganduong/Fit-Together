import React, { Component, PropTypes } from 'react';
import Categories from './Categories';
import Entry from './Entry';

// const entry = {
//   category: 'Nutrition',
//   question: 'Carrots contain a rich source of what vitamin?',
//   options: ['C', 'D', 'A', 'B'],
//   answer: 'A'
// };

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
  }

  componentWillMount() {
    this.props.fetchQuizQuestions();
  }

  componentWillReceiveProps(nextProps) {
    this.questions = nextProps.questions;
    this.entry = nextProps.question;
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('submit button clicked!');
    // console.log('this.state.selectedOption: ', this.state.selectedOption);
    // const { selectedOption, entry } = this.state;
    // if (selectedOption === entry.answer) {
    //   console.log('answer correct!');
    // } else {
    //   console.log('answer wrong!');
    // }
  }

  handleSelection(event) {
    console.log('event.target.value for handleSelection: ', event.target.value);
  }

  // next question
  next() {
    const { receiveCurrentQuestion } = this.props;
    this.index++;
    console.log('next index: ', this.index);
    console.log('next question: ', this.questions[this.index]);
    const nextQuestion = this.questions[this.index];
    if (nextQuestion) {
      receiveCurrentQuestion(nextQuestion);
    }
  }

  render() {
    console.log('this.entry in Trivia: ', this.entry);

    return (
      <div className="main-container">
        <Categories />
        <Entry 
          entry={this.questions[this.index]}
          handleSelection={this.handleSelection}
          handleSubmit={this.handleSubmit} 
          next={this.next}
        />
      </div>
    );
  }
}

Trivia.propTypes = {
  entries: PropTypes.array,
  getEntries: PropTypes.func,
  fetchQuizQuestions: PropTypes.func,
  questions: PropTypes.array,
  question: PropTypes.object,
  receiveCurrentQuestion: PropTypes.func
};

export default Trivia;
