import {
  GraphQLID,
  GraphQLString,
  GraphQLObjectType
} from "graphql"

export const PetType = new GraphQLObjectType({
  name: "Pet",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    color: { type: GraphQLString }, 
  }),
})
