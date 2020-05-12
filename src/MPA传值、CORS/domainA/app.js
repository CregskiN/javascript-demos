const Koa = require('koa');
const static = require('koa-static');

const app = new Koa();

app.use(static('./'));

app.listen(3000, () => {
    console.log('listen on port 3000');
});