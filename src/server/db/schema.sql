-- from root directory -- psql < src/server/db/schema.sql
DROP DATABASE IF EXISTS vitalhealthdb;

CREATE DATABASE vitalhealthdb;

\c vitalhealthdb;

CREATE TABLE user (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  username VARCHAR(50),
  password VARCHAR(50),
  email VARCHAR(100),
  weight INTEGER,
  bmi DECIMAL,
  dob DATE,
  goal VARCHAR(255),
  points INTEGER
);

CREATE TABLE team (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  description VARCHAR(255)
);

CREATE TABLE challenges (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  description VARCHAR(255)
);

CREATE TABLE steps (
  id SERIAL PRIMARY KEY,

);

CREATE TABLE daily_activities (
  id SERIAL PRIMARY KEY,
  type VARCHAR(50),
  description VARCHAR(255),
  date_peformed DATE,
);

CREATE TABLE incentives (
  id SERIAL PRIMARY KEY,
  type VARCHAR(50),
  description VARCHAR(255),
);

CREATE TABLE users_team (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users (id),
  team_id INTEGER REFERENCES teams (id)
);

CREATE TABLE users_daily_activities (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users (id),
  daily_activity_id INTEGER REFERENCES daily_activities (id)
);

CREATE TABLE users_incentives (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users (id),
  incentive_id INTEGER REFERENCES incentives (id)
);
