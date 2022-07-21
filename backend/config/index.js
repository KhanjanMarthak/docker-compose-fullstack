const config = require('config');
const { config: configure } = require('dotenv');

configure();

const configuration = {
  port: config.get('server.port')
};

module.exports = { configuration };
