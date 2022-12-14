import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLBoolean } from 'graphql'

export const SystemType = new GraphQLObjectType({
    name: 'System',
    fields: () => ({
        id: { type: GraphQLID },
        system: { type: GraphQLString },
        system_link: { type: GraphQLString },

        custom: { type: GraphQLBoolean },
    })
})
