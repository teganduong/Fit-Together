const pg = require('pg');
const promise = require('bluebird');
const options = {
	promiseLib: promise
};
const pgp = require('pg-promise')(options);
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/fidgetywidget';
const db = pgp(connectionString);

db.any('CREATE TABLE test(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)')
	.then(function(data) {
 		console.log('Success!');
	})
	.catch(function(err) {
		console.log('Error!');
	})
	.finally(function() {
		pgp.end();
	});

module.exports = db;

