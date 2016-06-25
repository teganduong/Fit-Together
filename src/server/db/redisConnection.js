const redis = require('redis');
const bluebird = require('bluebird');
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

const client = redis.createClient('6379', 'localhost');

client.on('error', (err) => {
  console.log('Error:', err);
});

module.exports = client;

// client.hmset('points', 'jjones', 0, 'johnyj', 0, 'jeffj', 0);
// client hmset('token', 'jjones', 123, 'johnyj', 123, 'jeffj', 123);

exports.storeToken = (req, res) => {
  client.hmset('token', req.body.username, req.body.token);
};

exports.deleteToken = (req, res) => {
  client.hdel('token', req.body.username);
};

exports.iniitializeUser = (req, res) => {
  client.hmset('points', req.body.username, 0);
};

exports.updatePoints = (req, res) => {
  client.hmset('points', req.body.username, req.body.points);
};

