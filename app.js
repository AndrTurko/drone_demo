const Koa = require('koa');

const app = new Koa();

app.use(async (ctx) => {
  ctx.body = 'ANDREI TURKO!';
});

app.listen(3000);
