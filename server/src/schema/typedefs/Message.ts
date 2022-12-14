import { GraphQLObjectType, GraphQLBoolean, GraphQLString } from 'graphql'

export const MessageType = new GraphQLObjectType({
    name: 'Message',
    fields: () => ({
        success: { type: GraphQLBoolean },
        text: { type: GraphQLString },
    })
})
