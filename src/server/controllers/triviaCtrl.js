const fetch = require('node-fetch');
const fileHelper = require(__dirname + '/../fileHelper.js');
const config = require(fileHelper.apiKeyPath);
const mongoApiKey = config.mongo.key;
const baseLinkQuizzes = 'https://api.mlab.com/api/1/databases/fit-together/collections/Quizzes?apiKey=';

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
  console.log('req.params.category in getQuizQuestions: ', req.params.category);
  const category = JSON.stringify(req.params.category);
  fetch(baseLinkQuizzes + mongoApiKey + '&q={"category":' + category + '}')
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
