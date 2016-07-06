import React, { PropTypes } from 'react';
import DisplayMsg from './DisplayMsg';

const Entry = ({ entry, handleSubmit, handleSelection, next, quizStatus }) => {
  if (quizStatus === 'finished') {
    return (
      <DisplayMsg message="Congrats on finishing the quiz! You've earned: " />
    );
  }

  const options = entry.options.map(option => (
    <div className="radio">
      <label>
        <input name="option" type="radio" value={option} onChange={handleSelection} />
        {option}
      </label>
    </div>
  ));

  if (options.length === 0) {
    return (
      <DisplayMsg message="Select a category from above to start a quiz!" />
    );
  }

  return (
    <div className="card-deck-wrapper">
      <div className="card-deck">
        <div className="card entry-card">
          <div className="entry-block">
            <h3>Category: {entry.category}</h3>
            <h4 className="card-title">{entry.question}</h4>
            <form onSubmit={handleSubmit}>
              <div className="options">
                {options}
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <button className="btn btn-primary" onClick={() => next()}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Entry.propTypes = {
  entry: PropTypes.object,
  handleSubmit: PropTypes.func,
  handleSelection: PropTypes.func,
  next: PropTypes.func,
  quizStatus: PropTypes.string
};

export default Entry;
