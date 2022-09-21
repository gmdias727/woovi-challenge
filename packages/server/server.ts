import { Context, Next } from "koa";

const Koa = require("koa");
const Router = require("@koa/router");

const app = new Koa();
const router = new Router();

// Faz um log indicando quando a requisição começou.
// atribui o tempo que durou a requisição.

// Logger
/**
 * @param  {Context} async(ctx
 * @param  {Next} next
 */
app.use(async (ctx: Context, next: Next ) => {
    await next();
    const rt = ctx.response.get("X-Response-Time");
    console.log(`${ctx.method} ${ctx.url} - ${rt} `);
});

// X-ResponseTime
app.use(async (ctx: Context, next: Next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set("X-Response-Time", `${ms}ms`);
});

router
    .get("/", (ctx: Context, next: Next) => {
        ctx.body = "Rota raiz do meu projeto " + JSON.stringify(ctx.params.id);
    })
    .post("/clients", (ctx: Context, next: Next) => {
        ctx.body = "POST = Rota Create do meu projeto";        
    })
    .put("/clients/:id", (ctx: Context, next: Next) => {
        ctx.body = "PUT = Rota Put/Edit do meu projeto";
    })
    .delete("/clients/:id", (ctx: Context, next: Next) => {
        ctx.body = "Delete = Rota Delete do meu projeto";
    })
    .all("/clients/:id", (ctx: Context, next: Next) => {
        ctx.body = JSON.stringify(ctx.params.id)
    })

app
    .use(router.routes())
    .use(router.allowedMethods());

// Hello World Response
// app.use(async (ctx: Context) => {
//     ctx.body = "Hello World";
// });

app.listen(3000);
