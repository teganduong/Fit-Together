const redis = require('redis');
const bluebird = require('bluebird');
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

const client = redis.createClient('6379', 'localhost');

client.on('error', (err) => {
  console.log('Error:', err);
});

module.exports = client;

const seedUsers = [
  {
    username: 'a',
    password: 'b'
  },
  {
    username: 'c',
    password: 'd'
  },
  {
    username: 'e',
    password: 'f'
  },
  {
    username: 'g',
    password: 'h'
  }
];

// get all values in the db --> client.keysAsync('*')
// delete all values from connection's current db --> client.flushdbAsync()
// delete all values from all db's --> client.flushdbAsync()

seedUsers.forEach((user) => {
  // client.setAsync('username:' + user.username + ':password:', user.password)
  //   .then(() => console.log('success'))
  //   .catch((err) => console.log('error'));
  client.flushallAsync().then((res) => console.log('data', res));
});


// exports.storeToken = (req, res) => {
//   client.setAsync('token:' + req.body.username + ':', req.body.token)
//     .then(() => res.status(201).send('success'))
//     .catch((err) => res.status(400));
// };

// exports.deleteToken = (req, res) => {
//   client.delAsync('token:' + req.body.username + ':')
//     .then(() => res.status(200).send('deleted'))
//     .catch((err) => res.status(400));
// };

// exports.iniitializeUser = (req, res) => {
//   client.setAsync('user:' + req.body.username + ':points:', req.body.points)
//     .then(() => client.setAsync('user:' + req.body.username + '::', req.body....))
//     .then(() => client.setAsync('user:' + req.body.username + '::', req.body....))
//     .then(() => client.setAsync('user:' + req.body.username + '::', req.body....))
//     .then(() => res.status(201).send('success'))
//     .catch((err) => res.status(400));
// };

// exports.updatePoints = (req, res) => {
//   client.setAsync('user:' + req.body.username + ':points:', req.body.points)
//     .then(() => res.status(201).send('success'))
//     .catch((err) => res.status(400));
// };

// // Test in server.js to make sure async works --> you have to promisify in the same js file
// const redis = require('redis');
// const bluebird = require('bluebird');
// bluebird.promisifyAll(redis.RedisClient.prototype);
// bluebird.promisifyAll(redis.Multi.prototype);
// const client = redis.createClient('6379', 'localhost');

// app.get('/', (req, res) => {
// 	client.setAsync('token:' + 'jjones' + ':', 12345)
// 	  .then(() => {
// 	    return client.getAsync('token:jjones:');
// 	  })
// 	  .then((data) => {
// 	  	req.data = data;
// 	  	console.log('data', data);
// 	  	return client.getAsync('token:jjones:');
// 	  })
// 	  .then((next) => {
// 	  	console.log('next', next);
// 	  	console.log('req.data', req.data);
// 	  })
// 	  .catch((err) => {
// 	  	console.log('err');
// 	  });
// });
