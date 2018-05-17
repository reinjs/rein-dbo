# @reinjs/rein-dbo

The dbo plugin of rein

## Install

```shell
npm i @reinjs/rein-dbo
```

## Usage

```shell
rc i @reinjs/rein-dbo
```

## Worker Usage

```javascript
// in controller
// e.g. /app/controller/home.js
const mySQLResult = await this.ctx.dbo.mysql.exec(`SELECT * FROM ??`, 'table');
const redisResult = await this.ctx.dbo.redis.get('test');
```

## Agent Usage

```javascript
app.receive('test', async () => {
  return await app.dbo.until(async way => {
    const value = await way.redis.get('test');
    const user = await way.mysql.exec(`SELECT * FROM ?? WHERE account=?`, 'table', 'someone');
    return {
      me: user[0],
      value
    };
  });
});
```

# License

It is [MIT licensed](https://opensource.org/licenses/MIT).