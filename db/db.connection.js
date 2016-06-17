var pg = require('pg');
var promise = require('bluebird');
var options = {
	promiseLib: promise
};
var pgp = require('pg-promise')(options);
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/fidgetywidget';

var db = pgp(connectionString);

db.any('CREATE TABLE test(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)')
	.then(db.any('CREATE TABLE test2(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)'))
	.then(function(data) {
 		console.log('Success!', data);
	})
	.catch(function(err) {
		console.log('Error!', err);
	})
	.finally(function() {
		pgp.end();
	});

module.exports = db;

