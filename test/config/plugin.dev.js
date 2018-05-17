const { formatRedisPoolFromStringify } = require('../../utils');

module.exports = {
  "dbo": {
    "mysql": {
      "package": "ys-dbo-mysql",
      "options": {
        "host": "",
        "user": "",
        "password": "",
        "database": "",
        "pool": true
      }
    },
    "redis": {
      "package": "ys-dbo-redis",
      "options": formatRedisPoolFromStringify('')
    }
  }
};