import { Context, Next } from "koa";

const Koa = require("koa");
const app = new Koa();

// Faz um log indicando quando a requisição começou.
// atribui o tempo que durou a requisição.

// Logger
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


// Response
app.use(async (ctx: { body: string; }) => {
    ctx.body = "Hello World";
});

app.listen(3000);
