const urlParse = require('url').parse;

module.exports = (url) => {
  const redisConfig = urlParse(url);
  return {
    host: redisConfig.hostname || 'localhost',
    port: redisConfig.port || 6379,
    database: (redisConfig.pathname || '/0').substr(1) || '0',
  }
}
