let apiKeyPath = `${__dirname}/config/api-keys.js`;

if (process.env.NODE_ENV === 'production') {
  apiKeyPath = 'productionpath';
}

module.exports = {
  apiKeyPath
};
