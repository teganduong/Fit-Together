const fetch = require('node-fetch');
const mongoApiKey = 'b0NtET0Tz9RnFAFE5IdPw9ui_DSZ1cok';
// used to post
const baseLinkMessages = 'https://api.mlab.com/api/1/databases/fit-together/collections/messages?apiKey=';
// used for get
const baseLinkMessagesQuery = 'https://api.mlab.com/api/1/databases/fit-together/collections/messages/';

// const baseLink_users = 'https://api.mlab.com/api/1/databases/frantic-rust/collections/users?apiKey=';
// const baseLink_users_query = 'https://api.mlab.com/api/1/databases/frantic-rust/collections/users/';
// const baseLink_pictures = 'https://api.mlab.com/api/1/databases/frantic-rust/collections/pictures?apiKey=';
// const baseLink_pictures_query = 'https://api.mlab.com/api/1/databases/frantic-rust/collections/pictures/';


exports.sendMessage = (req, res) => {
  const obj = {
    user_id: req.body.user_id,
    team_id: req.body.team_id,
    message: req.body.message,
    date_entered: req.body.date_entered
  };

  fetch(baseLinkMessages + mongoApiKey,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    })
    .then(() => {
      console.log('success');
    })
    .catch((err) => {
      console.log('Error', err);
    });
};

exports.getMessagesByTeam = (req, res) => {
  // send team_id in req.body
  fetch(baseLinkMessages + mongoApiKey + '&q={"team_id":' + req.body.team_id + '}',
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((responseData) => {
      // console.log('response 1', responseData);
      res.status(200)
        .json({
          status: 'success',
          data: responseData,
          message: 'successfully retrieved user\'s teams'
        });
    })
    .catch((err) => {
      console.log('Error', err);
    });
};
