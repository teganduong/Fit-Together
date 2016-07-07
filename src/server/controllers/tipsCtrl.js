const fetch = require('node-fetch');
const fileHelper = require(__dirname + '/../fileHelper.js');
const config = require(fileHelper.apiKeyPath);
const mongoApiKey = config.mongo.key;
const baseLinkTips = 'https://api.mlab.com/api/1/databases/fit-together/collections/tips?apiKey=';

exports.getTips = (req, res) => {
  fetch(baseLinkTips + mongoApiKey)
  .then(response => response.json())
  .then(data => {
    res.status(200)
      .json({
        status: 'success',
        data: data,
        message: 'Retrieved tips!'
      });
  })
  .catch(err => console.log('error in getting tips: ', err));
};
