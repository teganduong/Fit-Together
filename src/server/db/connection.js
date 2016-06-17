const promise = require('bluebird');
const options = {
  promiseLib: promise
};
const pgp = require('pg-promise')(options);
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/vitalhealthdb';
const db = pgp(connectionString);

module.exports = db;

// sample query
// db.any('CREATE TABLE test(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)')
//   .then(function(data) {
//  		console.log('Successfully connected to vitalhealthdb!');
// 	})
// 	.catch(function(err) {
// 		console.log('Error in connecting to vitalhealthdb!');
// 	})
// 	.finally(function() {
// 		pgp.end();
// 	});

