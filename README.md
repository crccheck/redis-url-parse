Redis URL Parse
===============

[![Build Status](https://travis-ci.org/crccheck/redis-url-parse.svg?branch=master)](https://travis-ci.org/crccheck/redis-url-parse)
[![npm version](https://badge.fury.io/js/redis-url-parse.svg)](https://badge.fury.io/js/redis-url-parse)

Spread a Redis URL string into a configuration object.

Module usage
------------

```javascript
const redisUrlParse = require('redis-url-parse')

// Defaults to localhost:6379/0
redisUrlParse('redis://')
//=> {host: 'localhost', port: 6379, database: '0', password: undefined}

// But you can change databases by adding a path
redisUrlParse('redis:///1')
//=> {host: 'localhost', port: 6379, database: '1', password: undefined}

// And change hosts
redisUrlParse('redis://example.com:39143/')
//=> {host: 'example.com', port: 39143, database: '0', password: undefined}

// And even add passwords
redisUrlParse('redis://:n9y25ah7@example.com:39143/')
//=> {host: 'example.com', port: 39143, database: '0', password: 'n9y25ah7'}

// If you add a username, it's ignored
redisUrlParse('redis://user:hunter2@example.com:39143/')
//=> {host: 'example.com', port: 39143, database: '0', password: 'hunter2'}

// If your password uses special characters, you may need to URI encode it
redisUrlParse('redis://:my%3Asuper%21secure%3Fpassword@example.com:39143/')
//=> {host: 'example.com', port: 39143, database: '0', password: 'my:super!secure?password'}
```


Complete example
----------------

```
const redisUrlParse = require('redis-url-parse')
redisUrlParse(process.env.REDIS_URL)  // redis://
//=> {host: 'localhost', port: 6379, database: '0', password: undefined}
```


Prior art
---------

* [parse-redis-url](https://github.com/laggyluke/node-parse-redis-url) not maintained and has an extremely awkward interface `require('parse-redis-url')(null).parse(url)`
* [redis-url](https://github.com/ddollar/redis-url) not maintained and requires `redis` as a requirement
* [redis-url-parser](https://github.com/cilindrox/redis-url-parser) not maintained and only works if your URL has a password
