const YsDbo = require('ys-dbo');
const { formatter } = require('./utils');

module.exports = async (app, plugin) => {
  const configs = formatter(plugin.config || {});
  const dbo = app.dbo = new YsDbo(configs);
  
  await dbo.connect();
  app.destroyed(async () => await dbo.disconnect());
};