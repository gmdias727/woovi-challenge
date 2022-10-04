import Koa, { Context, Next } from 'koa';
import Router from '@koa/router';
import { graphqlHTTP } from 'koa-graphql';
import { buildSchema } from 'graphql';
import mount from 'koa-mount';
import bodyParser from 'koa-bodyparser';

// import { schema } from "../graphql/schema"
import { log } from 'console';

import { Blog } from '../database/schema';

// import helmet from "koa-helmet";
// import cors from "@koa/cors";
// import logger from "koa-logger";

const app = new Koa();
app.use(bodyParser());
const router = new Router();

// Faz um log indicando quando a requisição começou.
// atribui o tempo que durou a requisição.
// Logger
/**
 *  @param  {Context} async(ctx
 *  @param  {Next} next
 */
app.use(async (ctx: Context, next: Next) => {
    await next();
    const rt = ctx.response.get('X-Response-Time');
    console.log(`${ctx.method} ${ctx.url} - ${rt} `);
});

app.on('error', (err) => {
    console.log('server error', err);
});

// X-ResponseTime
app.use(async (ctx: Context, next: Next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
});

// app.use(mount("/graphql", graphqlHTTP({
//     schema: schema,
//     graphiql: true,
// })))

router
    .get('/', async (ctx: Context, next: Next) => {
        ctx.body = 'Rota da primeira tomada';
    })
    .get('/posts/:id', async (ctx: Context, next: Next) => {
        ctx.body = await Blog.find({ title: 'Salve rapaziada' }).exec();
    })
    .post('/blogPost', (ctx: Context, next: Next) => {
        // const testingModel = new Blog(ctx.request.body);
        // testingModel.save();
        // ctx.body = testingModel;
    })
    .put('/clients/:id', (ctx: Context, next: Next) => {
        ctx.body = 'PUT = Rota Put/Edit do meu projeto';
    })
    .delete('/clients/:id', (ctx: Context, next: Next) => {
        ctx.body = 'Delete = Rota Delete do meu projeto';
    })
    .all('/graphql', () => {
        // ctx.body = JSON.stringify(ctx.params.id)
    });

app.use(router.routes()).use(router.allowedMethods());

// Hello World Response
// app.use(async (ctx: Context) => {
//     ctx.body = "Hello World";
// });

app.listen(3000, () => {
    console.log('Listening server on port 3000...');
});
