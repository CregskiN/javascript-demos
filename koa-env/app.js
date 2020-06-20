const Koa = require('koa');
const jsonp = require('koa-jsonp');
const Router = require('koa-router');
const parser = require('koa-bodyparser');
const static = require('koa-static');

const app = new Koa()



app.use(async (ctx, next) => {
    ctx.set({
        'Access-Control-Allow-Origin': '*', // 允许源
        'Access-Control-Allow-Credentials': true, // 是否可携带cookie
        // 'Access-Control-Expose-Headers':''
        'Access-Control-Allow-Methods': 'GET,POST,PUT',
        'Content-Type': 'application/json',
    })
    next();
})

app.use(parser());
app.use(static('./'));
app.use(jsonp());

app.use(async (ctx, next) => {
    ctx.set({
        'Access-Control-Allow-Origin': '*', // 允许源
        'Access-Control-Allow-Credentials': true, // 是否可携带cookie
        // 'Access-Control-Expose-Headers':''
        'Access-Control-Allow-Methods': 'GET,POST,PUT,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json'
    })
    next();
})

const router = Router();



router.options('/file', async (ctx, next) => {
    ctx.status = 200;
    next();
})

router.get('/file', async (ctx, next) => {
    ctx.body = {
        msg: 'get ok'
    }
    next();
})

/**
 * 上传文件演示
 */
router.post('/file', async (ctx, next) => {

    ctx.status = 200;
    console.log(ctx.request);
    ctx.body = {
        msg: 'success'
    }
})


app.use(router.routes());

app.listen(3001, () => {
    console.log('backend - 3001')
})