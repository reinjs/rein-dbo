const Service = require('@reinjs/rein-class');

module.exports = class HomeService extends Service {
  constructor(ctx) {
    super(ctx);
    this.table = 'YGG_EMPLOYEE';
  }
  
  async get(mysql, redis, name) {
    const value = await redis.get('test');
    const user = await mysql.exec(`SELECT * FROM ?? WHERE Emp_Account=?`, this.table, name);
    return {
      me: user[0],
      value
    };
  }
};