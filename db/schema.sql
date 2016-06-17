DROP DATABASE IF EXISTS fidgetywidget;
​
CREATE DATABASE fidgetywidget;
​
\c fidgetywidget

CREATE TABLE Doctors (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  dob DATE,
  office VARCHAR(250),
  phone INTEGER,
  sex VARCHAR(10)
);

CREATE TABLE Patients (
  id SERIAL PRIMARY KEY,
  name VARCHAR(250),
  dob DATE,
  phone INTEGER,
  address VARCHAR(250),
  ssn INTEGER,
  email VARCHAR(50),
  sex VARCHAR(10)
);
​
CREATE TABLE Visits (
  id SERIAL PRIMARY KEY,
  dateOfVisit DATE,
  timeOfVisit TIME,
  complaint VARCHAR(250),
  doctor_id INTEGER REFERENCES Doctors(id),
  diagnosis_id INTEGER REFERENCES Diagnosis(id),
  medication_id INTEGER REFERENCES Medications(id),
  patient_id INTEGER REFERENCES Patients(id)
);

CREATE TABLE History (
  id SERIAL PRIMARY KEY,
  patient_id INTEGER REFERENCES Patients(id),
  visit_id INTEGER REFERENCES Visits(id)
);

CREATE TABLE Diagnosis (
  id SERIAL PRIMARY KEY,
  category VARCHAR(250)
);
​
CREATE TABLE Medications (
  id SERIAL PRIMARY KEY,
  dosage VARCHAR(50),
  brandName VARCHAR(50),
  genericName VARCHAR(50),
  condition VARCHAR(250),
);

CREATE TABLE Patient_Medication (
  id SERIAL PRIMARY KEY,
  medication_id INTEGER REFERENCES Medications(id),
  patient_id INTEGER REFERENCES Patients(id)
);
