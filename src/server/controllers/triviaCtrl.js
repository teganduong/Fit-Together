const fetch = require('node-fetch');
const mongoApiKey = require('../config/api-keys').mongoApiKey;
// used to post
const baseLinkQuizzes = 'https://api.mlab.com/api/1/databases/fit-together/collections/Quizzes?apiKey=';
// used for get
const baseLinkQuizzesQuery = 'https://api.mlab.com/api/1/databases/fit-together/collections/Quizzes/';

exports.addQuizQuestion = (req, res) => {
  fetch(baseLinkQuizzes + mongoApiKey,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(req.body)
    })
  .catch(err => console.log('error in adding quiz question: ', err));
};

exports.getQuizQuestions = (req, res) => {
  fetch(baseLinkQuizzes + mongoApiKey)
  .then(response => response.json())
  .then(data => {
    console.log('data from getQuizQuestions: ', data);
    res.status(200)
      .json({
        status: 'success',
        data: data,
        message: 'Retrieved quiz questions!'
      });
  })
  .catch(err => console.log('error in getting quiz questions'));
};
