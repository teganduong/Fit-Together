import React, { PropTypes } from 'react';

const Entry = ({ entry, handleSubmit, handleSelection, next }) => {
  const options = entry.options.map(option => (
    <div className="radio">
      <label>
        <input name="option" type="radio" value={option} onChange={handleSelection} />
        {option}
      </label>
    </div>
  ));

  return (
    <div className="card-deck-wrapper">
      <div className="card-deck">
        <div className="card entry-card">
          <div className="entry-block">
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
  next: PropTypes.func
};

export default Entry;
