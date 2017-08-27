Redis URL Parse
===============

[![Greenkeeper badge](https://badges.greenkeeper.io/crccheck/redis-url-parse.svg)](https://greenkeeper.io/)

[![Build Status](https://travis-ci.org/crccheck/redis-url-parse.svg?branch=master)](https://travis-ci.org/crccheck/redis-url-parse)
[![npm version](https://badge.fury.io/js/redis-url-parse.svg)](https://badge.fury.io/js/redis-url-parse)

Spread a Redis URL string into a configuration object.

Module usage
------------

```javascript
const redisUrlParse = require('redis-url-parse')

redisUrlParse('redis://')
//=> {host: 'localhost', port: 6379, database: '0', password: undefined}

redisUrlParse('redis:///1')
//=> {host: 'localhost', port: 6379, database: '1', password: undefined}

redisUrlParse('redis://example.com:39143/')
//=> {host: 'example.com', port: 39143, database: '0', password: undefined}

redisUrlParse('redis://:n9y25ah7@example.com:39143/')
//=> {host: 'example.com', port: 39143, database: '0', password: 'n9y25ah7'}

redisUrlParse('redis://user:hunter2@example.com:39143/')
//=> {host: 'example.com', port: 39143, database: '0', password: 'hunter2'}
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
