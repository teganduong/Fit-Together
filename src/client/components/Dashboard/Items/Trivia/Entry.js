import React, { PropTypes } from 'react';

const Entry = ({ entry }) => {
  const options = entry.options.map(option => (
    <div className="radio">
      <label>
        <input name="option" type="radio" value={option} />
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
            <form>
              <div className="options">
                {options}
              </div>
              <button className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

Entry.propTypes = {
  entry: PropTypes.object
};

export default Entry;
