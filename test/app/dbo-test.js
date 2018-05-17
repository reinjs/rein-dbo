module.exports = app => {
  app.receive('test', async () => {
    return await app.dbo.until(async way => {
      const value = await way.redis.get('test');
      const user = await way.mysql.exec(`SELECT * FROM ?? WHERE Emp_Account=?`, 'YGG_EMPLOYEE', 'liubin');
      return {
        me: user[0],
        value
      };
    });
  });
};