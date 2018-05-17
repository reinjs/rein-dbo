const Controller = require('@reinjs/rein-class');

module.exports = class HomeController extends Controller {
  constructor(ctx) {
    super(ctx);
  }
  
  async hello() {
    const { me, value } = await this.ctx.sendback('dbo-test', 'test');
    me.value = value;
    this.ctx.body = me;
  }
};