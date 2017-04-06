Redis URL Parse
===============

Spread a Redis url string into a configuration object.

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
