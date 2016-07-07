const { assert, expect } = require('chai');
const dataTest = require('./testingData.js');

process.env.NODE_ENV = 'testing';
const db = require('../src/server/db/testConnection.js');

/* global describe, it, expect, before, after */
/* eslint-disable func-names, prefer-arrow-callback */
describe('Postgres User Ctrl Methods:', function () {
  before(function (done) {
    
    const user1 = dataTest.users[0];
    const user2 = dataTest.users[1];
    
    db.none('delete from users')
      .then(() => {
        db.none('ALTER SEQUENCE users_id_seq RESTART WITH 1')
          .then(() => {
            db.none('insert into users(name, username, password, email, weight, bmi, goal, points, user_icon)' +
              ' values(${name}, ${username}, ${password}, ${email}, ${weight}, ${bmi}, ${goal}, ${points}, ${user_icon})', user1)
            .then(() => {
              db.none('insert into users(name, username, password, email, weight, bmi, goal, points, user_icon)' +
                ' values(${name}, ${username}, ${password}, ${email}, ${weight}, ${bmi}, ${goal}, ${points}, ${user_icon})', user2)
              .then(() => {
                done();        
              });
            });
          });
      });
  });
  
  after(function (done) {
    db.none('delete from users')
      .then(() => {
        done();        
      });
  });

  it('should retrieve a user from the database', function () {
    db.any('select * from users where name=${name}', { name: 'AJ Grande' }).then(data => {
      expect(data.length).to.not.equal(0);
      expect(data[0].name).to.not.equal(null);
      expect(data[0].name).to.equal('AJ Grande');
    });
  });

  it('should retrieve all users from the database', function () {
    db.any('select * from users').then(data => {
      expect(data.length).to.equal(2);
      expect(data[1].name).to.equal('Peter Chim');
    });
  });
});

describe('Postgres Teams Ctrl Methods:', function () {
  before(function (done) {
    
    const team = dataTest.team;
    const user1 = dataTest.users[0];
    
    db.tx((t) => {
      const q1 = t.none('delete from users_teams');
      const q2 = t.none('delete from users');
      const q3 = t.none('delete from teams');
      const q4 = t.none('ALTER SEQUENCE users_id_seq RESTART WITH 1');
      const q5 = t.none('ALTER SEQUENCE teams_id_seq RESTART WITH 1');
      const q6 = t.none('ALTER SEQUENCE users_teams_id_seq RESTART WITH 1');
      const q7 = t.one('insert into users(name, username, password, email, weight, bmi, goal, points, user_icon) values(${name}, ${username}, ${password}, ${email}, ${weight}, ${bmi}, ${goal}, ${points}, ${user_icon}) returning id', user1);
      const q8 = t.one('insert into teams(name, description, team_icon) values(${name}, ${description}, ${team_icon}) returning id', team);
      return t.batch([q7, q8]);
    })
    .then((data) => {
      const userTeam = {
        user_id: data[0].id,
        team_id: data[1].id
      };
      return db.none('insert into users_teams(user_id, team_id) values((select id from users where id=${user_id}), (select id from teams where id=${team_id}))', userTeam);
    })
    .then(() => {
      done();        
    })
    .catch((err) => {
      console.log('err', err);
    });
  });
  
  after(function (done) {
    db.none('delete from users_teams')
      .then(() => {
        db.none('delete from users');
      })
      .then(() => {
        db.none('delete from teams');
      })
      .then(() => {
        done();        
      });
  });

  it('should retrieve a team from the database', function () {
    db.any('select * from teams where id=${id}', { id: 1 }).then(data => {
      expect(data.length).to.not.equal(0);
      expect(data[0].name).to.not.equal(null);
      expect(data[0].name).to.equal('Bay Area Hikers');
    });
  });

  it('should retrieve all users_teams from the database', function () {
    db.any('select * from users_teams').then(data => {
      expect(data.length).to.equal(1);
      expect(data[0].user_id).to.equal(1);
    });
  });
});
