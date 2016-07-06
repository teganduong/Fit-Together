import React, { PropTypes } from 'react';

const users = [
  {
    name: 'Richard Hendricks',
    username: 'piedpiper',
    points: 160,
    user_icon: 'http://i.imgur.com/4RhhCZK.png',
    rank: 1
  },
  {
    name: 'Erlich Bachman',
    username: 'bachman',
    points: 156,
    user_icon: 'http://i.imgur.com/zLCxI02.png',
    rank: 2
  },
  {
    name: 'Jared Dunn',
    username: 'jared',
    points: 142,
    user_icon: 'http://i.imgur.com/qXFHqxc.png',
    rank: 3
  },
  {
    name: 'Bertram Gilfoyle',
    username: 'bertman',
    points: 133,
    user_icon: 'http://i.imgur.com/kSnJSMb.png',
    rank: 4
  },
  {
    name: 'Dinesh Chugtai',
    username: 'dineshc',
    points: 121,
    user_icon: 'http://i.imgur.com/kPyPCur.png',
    rank: 5
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
    <div className="leaderboard">
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
