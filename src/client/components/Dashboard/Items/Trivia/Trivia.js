import React, { Component, PropTypes } from 'react';
import Categories from './Categories';
import Entry from './Entry';

const entry = {
  category: 'Nutrition',
  question: 'Carrots contain a rich source of what vitamin?',
  options: ['C', 'D', 'A', 'B'],
  answer: 'A'
};

class Trivia extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-container">
        <Categories />
        <Entry entry={entry} />
      </div>
    );
  }
}

// Trivia.propTypes = {
//   entries: PropTypes.array,
//   getEntries: PropTypes.func
// };

export default Trivia;
