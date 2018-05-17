const utils = require('@reinjs/rein-utils');
const is = require('is-type-of');

exports.formatter = options => {
  const result = [];
  for (const namespace in options) {
    const config = options[namespace] || {};
    if (config.package) {
      const target = utils.loadFile(config.package);
      if (is.class(target)) {
        result.push(new target(namespace, config.options));
      } else if (is.function(target)) {
        result.push(target(namespace, config.options));
      }
    }
  }
  return result;
};

exports.formatRedisPoolFromStringify = str => {
  const result = [];
  const channels = str.split(',');
  for (let i = 0, j = channels.length; i < j; i++) {
    const channel = channels[i];
    const dots = channel.split(':');
    result.push({
      host: dots[0],
      port: Number(dots[1]),
      keepAlive: 0
    });
  }
  return result;
};