const promise = require('bluebird');
const options = {
  promiseLib: promise
};
const pgp = require('pg-promise')(options);
const fileHelper = require(__dirname + '/../fileHelper.js');
const connectionString = require(fileHelper.apiKeyPath).Aws.rds.key;

const db = pgp(connectionString);

module.exports = db;
