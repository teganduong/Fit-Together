DROP DATABASE IF EXISTS vitalhealthdb;

CREATE DATABASE vitalhealthdb;

\c vitalhealthdb;

CREATE TABLE doctors (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  dob DATE,
  office VARCHAR(250),
  phone INTEGER,
  sex VARCHAR(10)
);

CREATE TABLE patients (
  id SERIAL PRIMARY KEY,
  name VARCHAR(250),
  dob DATE,
  phone INTEGER,
  address VARCHAR(250),
  ssn INTEGER,
  email VARCHAR(50),
  sex VARCHAR(10)
);

CREATE TABLE diagnosis (
  id SERIAL PRIMARY KEY,
  category VARCHAR(250)
);
CREATE TABLE medications (
  id SERIAL PRIMARY KEY,
  dosage VARCHAR(50),
  brand_name VARCHAR(50),
  generic_name VARCHAR(50),
  condition VARCHAR(250)
);

CREATE TABLE visits (
  id SERIAL PRIMARY KEY,
  date_of_visit DATE,
  time_of_visit TIME,
  complaint VARCHAR(250),
  doctor_id INTEGER REFERENCES doctors (id),
  diagnosis_id INTEGER REFERENCES diagnosis (id),
  medication_id INTEGER REFERENCES medications (id),
  patient_id INTEGER REFERENCES patients (id)
);

CREATE TABLE history (
  id SERIAL PRIMARY KEY,
  patient_id INTEGER REFERENCES patients (id),
  visit_id INTEGER REFERENCES visits (id)
);

CREATE TABLE patient_medication (
  id SERIAL PRIMARY KEY,
  medication_id INTEGER REFERENCES medications (id),
  patient_id INTEGER REFERENCES patients (id)
);
