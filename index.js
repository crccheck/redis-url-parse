// @flow
const { URL } = require('url')

/*::
type RedisConfig = {
  host: string,
  port: number,
  database: string,
  password: ?string,
}
*/

module.exports = (url/*: string */)/*: RedisConfig */ => {
  const parsedURL = new URL(url)
  return {
    host: parsedURL.hostname || 'localhost',
    port: Number(parsedURL.port || 6379),
    database: (parsedURL.pathname || '/0').substr(1) || '0',
    password: parsedURL.password ? decodeURIComponent(parsedURL.password) : null
  }
}
