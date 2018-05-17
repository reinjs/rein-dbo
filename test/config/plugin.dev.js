const { formatRedisPoolFromStringify } = require('../../utils');

module.exports = {
  "dbo": {
    "mysql": {
      "package": "ys-dbo-mysql",
      "options": {
        "host": "10.247.17.31",
        "user": "51generalnew",
        "password": "uUZPeL32FpatOvju",
        "database": "YGG",
        "pool": true
      }
    },
    "redis": {
      "package": "ys-dbo-redis",
      "options": formatRedisPoolFromStringify('10.0.39.11:6390,10.0.39.16:6390,10.0.39.13:6390,10.0.39.12:6390,10.0.39.17:6390,10.0.39.15:6390,10.0.39.14:6390,10.0.39.18:6390')
    }
  }
};