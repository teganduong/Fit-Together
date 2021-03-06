import React, { PropTypes } from 'react';
import DisplayMsg from './DisplayMsg';

const Entry = ({ entry, handleSubmit, handleSelection, next, quizStatus, score }) => {
  if (quizStatus === 'finished') {
    return (
      <DisplayMsg message="Congrats on finishing the quiz! You've earned: " score={score} />
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
      <div className="card-deck-wrapper col-sm-8">
        <div className="card-deck">
          <div className="card entry-card start-quiz">
            <div className="entry-block">
              <h4 className="card-title">
                Select a category from above to start a quiz!
              </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card-deck-wrapper">
      <div className="card-deck">
        <div className="card entry-card">
          <div className="entry-block">
            <h3>Category: {entry.category}</h3>
            <h4 className="entryQuestion">{entry.question}</h4>
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
  quizStatus: PropTypes.string,
  score: PropTypes.number
};

export default Entry;
