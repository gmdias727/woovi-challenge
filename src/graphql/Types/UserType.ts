import {
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLObjectType
} from "graphql";

import { PetType } from "./PetType"

import { pets } from "../../database/dummyData";

export const UserType = new GraphQLObjectType({
  name: "User",
  description: "User data",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    petId: {
      type: GraphQLString,
      resolve(parent, args) {
        return pets.find((pet) => pet.id === parent.id)!.id;
      }
    } 
  })
})
