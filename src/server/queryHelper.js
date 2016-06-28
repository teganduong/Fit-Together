const Promise = require('bluebird');
const fetch = require('isomorphic-fetch');

exports.getUserData = (id, accessToken) => {
    const requestUrl = "https://api.fitbit.com/1/user/23BRMH/sleep/date/2014-09-01.json";
    fetch(requestUrl, {
      method: 'GET',
      dataType: 'jsonp',
      headers: {
        'Authorization': `Bearer: ${accessToken}`, 
      },
      credentials: 'cross-origin',
    })
    .then(res => res.json());
};

