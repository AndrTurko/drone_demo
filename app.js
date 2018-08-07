const Koa = require('koa');

const app = new Koa();

app.use(async (ctx) => {
  ctx.body = 'ANDREI';
});

app.listen(3000);
