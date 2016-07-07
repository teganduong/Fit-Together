import React, { PropTypes } from 'react';

const Leaderboard = ({ leaderboard }) => {
  const board = leaderboard.map((user, index) => {
    const rank = index + 1;
    return (
      <tr key={index}>
        <td className="user-rank">{rank}</td>
        <td><img className="user-img" src={user.user_icon} alt="" /></td>
        <td className="user-name">{user.name}</td>
        <td>{user.points}</td>
      </tr>
    );
  });

  return (
    <div className="leaderboard">
      <h3 className="leaderboard-title">Leaderboard</h3>
      <table>
        <tr className="leaderboard-head">
          <th>Rank</th>
          <th></th>
          <th>Name</th>
          <th>Points</th>
        </tr>
        {board}
      </table>
    </div>
  );
};

Leaderboard.propTypes = {
  leaderboard: PropTypes.array
};

export default Leaderboard;
