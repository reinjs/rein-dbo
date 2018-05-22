const YsDbo = require('ys-dbo');
const { formatter } = require('./utils');

module.exports = async (app, plugin) => {
  const configs = formatter(plugin.config || {});
  const dbo = app.dbo = new YsDbo(configs);
  app.dbo.config = plugin.config || {};
  await dbo.connect();
  app.destroyed(async () => await dbo.disconnect());
  
  app.use(dbo.way({
    error(err) {
      app.logger.error(err.stack);
      return ctx => {
        ctx.status = !isNaN(err.code) ? Number(err.code) : 500;
        ctx.body = err.message;
      }
    }
  }));
};