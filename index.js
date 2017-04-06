// @flow
const urlParse = require('url').parse;

/*:: type RedisConfig = {
  host: string,
  port: number,
  database: string,
  password: ?string
} */

module.exports = (url/*: string */)/*: RedisConfig */ => {
  const redisConfig = urlParse(url);
  return {
    host: redisConfig.hostname || 'localhost',
    port: Number(redisConfig.port || 6379),
    database: (redisConfig.pathname || '/0').substr(1) || '0',
    password: redisConfig.auth && redisConfig.auth.substr(1)
  }
}
