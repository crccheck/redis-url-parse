Redis URL Parse
===============

[![Build Status](https://travis-ci.org/crccheck/redis-url-parse.svg?branch=master)](https://travis-ci.org/crccheck/redis-url-parse)

Spread a Redis URL string into a configuration object.

Module usage
------------

```javascript
const redisUrlParse = require('redis-url-parse')

redisUrlParse('redis://')
//=> {host: 'localhost', port: 6379, database: '0'}

redisUrlParse('redis:///1')
//=> {host: 'localhost', port: 6379, database: '1'}

redisUrlParse('redis://example.com:39143/')
//=> {host: 'example.com', port: 39143, database: '0'}
```


Complete example
----------------

```
const redisParser = require('redis-url-parse')

redisParser(process.env.REDIS_URL)
```


Prior art
---------

* [parse-redis-url](https://github.com/laggyluke/node-parse-redis-url) not maintained and has an extremely awkward interface `require('parse-redis-url')(null).parse(url)`
* [redis-url](https://github.com/ddollar/redis-url) not maintained and requires `redis` as a requirement
* [redis-url-parser](https://github.com/cilindrox/redis-url-parser) not maintained and only works if your URL has a password
