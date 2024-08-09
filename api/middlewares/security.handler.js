const helmet = require('helmet');

function securityHandler(app) {
  app.use(helmet());
}

module.exports = securityHandler;
