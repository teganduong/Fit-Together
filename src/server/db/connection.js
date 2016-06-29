const promise = require('bluebird');
const options = {
  promiseLib: promise
};
const pgp = require('pg-promise')(options);

const connectionString = {
  host: 'fidgetywidget.c67fs1cxhe7n.us-west-2.rds.amazonaws.com',
  port: 5432,
  database: 'fidgetywidget',
  user: 'fidgetywidget',
  password: 'widget123'
};

const db = pgp(connectionString);

module.exports = db;

// Run to add schema tables to rds db instance
// psql --host=fidgetywidget.c67fs1cxhe7n.us-west-2.rds.amazonaws.com --port=5432 
// --username=fidgetywidget --password --dbname=fidgetywidget < src/server/db/schema.sql

// Run to log into amazon rds db instance
// psql --host=fidgetywidget.c67fs1cxhe7n.us-west-2.rds.amazonaws.com --port=5432 --username=fidgetywidget --password --dbname=fidgetywidget

// Connect to local PostgreSQL database
// const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/vitalhealthdb';
