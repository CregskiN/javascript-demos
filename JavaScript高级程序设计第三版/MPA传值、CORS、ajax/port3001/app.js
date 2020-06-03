const Koa = require('koa');
const jsonp = require('koa-jsonp');
const Router = require('koa-router');
const parser = require('koa-bodyparser');
const static = require('koa-static');

const app = new Koa()



app.use(async (ctx, next) => {
    ctx.set({
        'Access-Control-Allow-Origin': 'http://localhost:3000', // 允许源
        'Access-Control-Allow-Credentials': true, // 是否可携带cookie
        // 'Access-Control-Expose-Headers':''
        'Access-Control-Allow-Methods': 'GET,POST,PUT',
        // 'Content-Type': 'application/json',
    })
    next();
})

app.use(parser());
app.use(static('./'));
app.use(jsonp());

const router = Router();

router.get('/test/xmr', async (ctx, next) => {
    console.log(ctx.request);


    ctx.body = {
        success: true,
        msg: 'GET: roger that. hello world too!'
    }
});


router.post('/test/xmr', async (ctx, next) => {
    console.log(ctx.data);
    ctx.set({
        'Access-Control-Allow-Origin': 'http://localhost:3000'
    })
    ctx.body = {
        success: true,
        msg: 'POST: roger that. hello world too!'
    }
});


/**
 * jsonp 测试
 */
router.get('/test/jsonp', async (ctx, next) => {

    ctx.body = {
        success: true,
        data: {
            msg: `jsonp api success`,
            data: {
                name: 'CregskiN',
                age: 20,
                job: 'engineer'
            }
        }
    };
});





app.use(router.routes());

app.listen(3001, () => {
    console.log('[demo] jsonp is starting at port 3001')
})