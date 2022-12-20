import {  GraphQLSchema } from "graphql";

import { QueryType } from "./QueryType";

export const graphqlSchema = new GraphQLSchema({
  query: QueryType
})
