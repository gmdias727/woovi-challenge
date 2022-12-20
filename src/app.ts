import Koa, { Context, Next } from "koa";
import cors from "koa-cors";
import bodyParser from "koa-bodyparser";
import logger from "koa-logger";
import Router from "koa-router";
import mount from "koa-mount";
import { graphqlHTTP } from "koa-graphql"

import { config } from "./config";
import { graphqlSchema } from "./graphql/schema"

const app = new Koa()
const routerOpen = new Router();

app.use(cors());
app.use(bodyParser());
app.use(logger());

// Tests if api is OK.
routerOpen.get("/", (ctx: Context) => {
  ctx.status = 200;
  ctx.body = {
    status: "OK"
  }
})

routerOpen.all(
  '/graphql',
  graphqlHTTP({
    schema: graphqlSchema,
    graphiql: true,
    
  })
);

app.use(routerOpen.routes());

export default app;
