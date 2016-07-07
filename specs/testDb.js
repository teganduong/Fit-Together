const { assert, expect } = require('chai');


// set up testing database
process.env.NODE_ENV = 'testing';
const db = require('../src/server/db/testConnection.js');
console.log('test');
/* global describe, it, expect, before, after */
/* eslint-disable func-names, prefer-arrow-callback */
describe('User Methods', function () {
  before(function (done) {
    // test data
    const user1 = {
      name: 'AJ Grande',
      username: 'ajgrande',
      password: 'ajgrande',
      email: 'ajgrande@gmail.com',
      weight: 145,
      bmi: 21.3,
      goal: 'Live happy',
      points: 9000,
      user_icon: 'https://s-media-cache-ak0.pinimg.com/564x/7c/1d/15/7c1d156f6e62f5559e8fada72b2117f7.jpg'
    }; 
    const user2 = {
      name: 'Peter Chim',
      username: 'peterc',
      password: 'peterc',
      email: 'peterc@gmail.com',
      weight: 130,
      bmi: 21.4,
      goal: 'Be Calm',
      points: 8000,
      user_icon: 'https://s-media-cache-ak0.pinimg.com/564x/7c/1d/15/7c1d156f6e62f5559e8fada72b2117f7.jpg'
    };  
    // clear out the database of doctors, restart sequence id and insert a doc
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

