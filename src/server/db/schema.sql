-- from root directory -- psql < src/server/db/schema.sql

\c fidgetywidget;

-- DROP TABLE IF EXISTS users_teams;    
-- DROP TABLE IF EXISTS users_daily_activities;    
-- DROP TABLE IF EXISTS users_incentives;    
-- DROP TABLE IF EXISTS challenges;    
-- DROP TABLE IF EXISTS users;   
-- DROP TABLE IF EXISTS daily_activities;    
-- DROP TABLE IF EXISTS incentives;    
-- DROP TABLE IF EXISTS teams;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  username VARCHAR(50),
  password VARCHAR(50),
  email VARCHAR(100),
  weight INTEGER,
  bmi DECIMAL,
  goal VARCHAR(255),
  points INTEGER
);

CREATE TABLE challenges (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  description VARCHAR(255),
  challenger INTEGER REFERENCES users (id),
  opponent INTEGER REFERENCES users (id),
  winner INTEGER
);

CREATE TABLE teams (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  description VARCHAR(255)
);

CREATE TABLE daily_activities (
  id SERIAL PRIMARY KEY,
  type VARCHAR(50),
  category VARCHAR(50),
  description VARCHAR(255),
  date_performed VARCHAR(50),
  count DECIMAL,
  units VARCHAR(50)
);

CREATE TABLE incentives (
  id SERIAL PRIMARY KEY,
  type VARCHAR(50),
  description VARCHAR(255)
);

CREATE TABLE users_teams (
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
