"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanetType = void 0;
const graphql_1 = require("graphql");
exports.PlanetType = new graphql_1.GraphQLObjectType({
    name: 'Planet',
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        the_geom: { type: graphql_1.GraphQLString },
        cartodb_id: { type: graphql_1.GraphQLID },
        planet: { type: graphql_1.GraphQLString },
        planet_link: { type: graphql_1.GraphQLString },
        region: { type: graphql_1.GraphQLString },
        region_link: { type: graphql_1.GraphQLString },
        sector: { type: graphql_1.GraphQLString },
        sector_link: { type: graphql_1.GraphQLString },
        system: { type: graphql_1.GraphQLString },
        system_link: { type: graphql_1.GraphQLString },
        grid: { type: graphql_1.GraphQLString },
        x: { type: graphql_1.GraphQLFloat },
        y: { type: graphql_1.GraphQLFloat },
        z: { type: graphql_1.GraphQLFloat },
        canon: { type: graphql_1.GraphQLBoolean },
        legends: { type: graphql_1.GraphQLBoolean },
        zm: { type: graphql_1.GraphQLFloat },
        name0: { type: graphql_1.GraphQLString },
        name1: { type: graphql_1.GraphQLString },
        name2: { type: graphql_1.GraphQLString },
        lat: { type: graphql_1.GraphQLFloat },
        long: { type: graphql_1.GraphQLFloat },
        ref: { type: graphql_1.GraphQLString },
        status: { type: graphql_1.GraphQLString },
        cregion: { type: graphql_1.GraphQLString },
        cregion_link: { type: graphql_1.GraphQLString },
        custom: { type: graphql_1.GraphQLBoolean },
    })
});
