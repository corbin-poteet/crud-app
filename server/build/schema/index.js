"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const graphql_1 = require("graphql");
const Planet_1 = require("./queries/Planet");
const Planet_2 = require("./mutations/Planet");
const Systems_1 = require("./queries/Systems");
// read
const RootQuery = new graphql_1.GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getAllPlanets: Planet_1.GET_ALL_PLANETS,
        getAllSystems: Systems_1.GET_ALL_SYSTEMS,
    }
});
// create, update, delete
const Mutation = new graphql_1.GraphQLObjectType({
    name: "Mutation",
    fields: {
        createPlanet: Planet_2.CREATE_PLANET,
        deletePlanet: Planet_2.DELETE_PLANET,
        updatePlanet: Planet_2.UPDATE_PLANET,
    }
});
exports.schema = new graphql_1.GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
});
