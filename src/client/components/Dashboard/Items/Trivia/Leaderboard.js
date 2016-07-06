import React, { PropTypes } from 'react';

const users = [
  {
    name: 'Jessica Jones',
    username: 'jjones',
    points: 160,
    user_icon: 'https://assets-cdn.github.com/images/modules/styleguide/linktocat.png',
    rank: 1
  },
  {
    name: 'John Jacobs',
    username: 'johnyj',
    points: 156,
    user_icon: 'https://octodex.github.com/images/gangnamtocat.png',
    rank: 2
  },
  {
    name: 'Jeffrey Jordan',
    username: 'jeffj',
    points: 142,
    user_icon: 'https://stevegrunwell.github.io/wordpress-git/assets/heisencat.png',
    rank: 3
  },
  {
    name: 'Alex Adams',
    username: 'alexa',
    points: 133,
    user_icon: 'https://assets-cdn.github.com/images/modules/styleguide/linktocat.png',
    rank: 4
  }
];

const Leaderboard = () => {
  const leaderboard = users.map(user => (
    <tr>
      <td className="user-rank">{user.rank}</td>
      <td><img className="user-img" src={user.user_icon} alt="" /></td>
      <td className="user-name">{user.name}</td>
      <td>{user.points}</td>
    </tr>
  ));

  return (
    <div className="leaderboard col-sm-4">
      <h3 className="leaderboard-title">Leaderboard</h3>
      <table>
        <tr className="leaderboard-head">
          <th>Rank</th>
          <th></th>
          <th>Name</th>
          <th>Points</th>
        </tr>
        {leaderboard}
      </table>
    </div>
  );
};

export default Leaderboard;
