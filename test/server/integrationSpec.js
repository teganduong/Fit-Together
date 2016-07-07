var supertest = require("supertest");
const expect = require('chai').expect;
const pg = require('pg');
const fs = require('fs');
const path = require('path');
// This agent refers to PORT where program is runninng.

request.get('/').expect(200, function(err){
  console.log(err);
});