import { GraphQLID, GraphQLObjectType, GraphQLSchema } from "graphql";
import { GET_ALL_PLANETS } from "./queries/Planet";
import { CREATE_PLANET, DELETE_PLANET, UPDATE_PLANET } from "./mutations/Planet";
import { GET_ALL_SYSTEMS } from "./queries/Systems";

// read
const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getAllPlanets: GET_ALL_PLANETS,
        getAllSystems: GET_ALL_SYSTEMS,
    }
});

// create, update, delete
const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createPlanet: CREATE_PLANET,
        deletePlanet: DELETE_PLANET,
        updatePlanet: UPDATE_PLANET,
    }
});

export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
});