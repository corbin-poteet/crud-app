"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemType = void 0;
const graphql_1 = require("graphql");
exports.SystemType = new graphql_1.GraphQLObjectType({
    name: 'System',
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        system: { type: graphql_1.GraphQLString },
        system_link: { type: graphql_1.GraphQLString },
        custom: { type: graphql_1.GraphQLBoolean },
    })
});
