const Koa = require('koa');
const jsonp = require('koa-jsonp');
const Router = require('koa-router');
const parser = require('koa-bodyparser');
const static = require('koa-static');

const app = new Koa()

app.use(parser());
app.use(static('./'));



app.listen(3002, () => {
    console.log('静态资源服务器')
})