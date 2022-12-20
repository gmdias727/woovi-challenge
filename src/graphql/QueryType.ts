import {
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID
} from "graphql";

import { UserType } from "./Types/UserType";
import { PetType } from "./Types/PetType"

import { users, pets } from "../database/dummyData";

export const QueryType = new GraphQLObjectType({
  name: "Query",
  description: "The root of all queries.",
  fields: () => ({
    users: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return users.find((user) => user.id === args.id);
      },
    },
    pets: {
      type: PetType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return pets.find((pet) => pet.id === args.id)
      },
    },
  })
})
