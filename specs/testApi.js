const test = require('tape');
const request = require('supertest');
const app = require('../src/server/server.js');

// post - get - destroy
// kill `lsof -t -i:3000`

test('Postgres - GET for /api/usersleep:', assert => {
  request(app)
    .get('/api/usersleep')
    .expect('Content-Type', /json/)
    .expect(200)
    .end((err, res) => {
      assert.error(err, 'no error');
      assert.equal(res.status, 200, 'status code 200');
      assert.equal(typeof res.body.data[0].duration, 'string', 'response contains a logged activity');
      assert.end();
    });
});

test('Mongo - GET for /api/getmessages', assert => {
  const req = { team_id: 1 };
  request(app)
    .post('/api/getmessages')
    .send(req)
    .expect(200)
    .end((err, res) => {
      assert.error(err, 'no error');
      assert.equal(res.status, 200, 'status code 200');
      assert.equal(typeof res.body.data[0].message, 'string', 'response contains a message');
      assert.end();
    });
});

test('Redis - GET for /api/userteams', assert => {
  const req = { user_id: 1 };
  request(app)
    .post('/api/userteams')
    .send(req)
    .expect(200)
    .end((err, res) => {
      assert.plan(3);
      assert.error(err, 'no error');
      assert.equal(res.status, 200, 'status code 200');
      assert.equal(typeof res.body.data[0].name, 'string', 'response contains a team');
      assert.end();
    });
});


      // console.log('res', res.status, res.body);
