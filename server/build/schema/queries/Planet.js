"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_PLANET_BY_NAME = exports.GET_PLANET = exports.GET_ALL_PLANETS = void 0;
const graphql_1 = require("graphql");
const Planets_1 = require("../../entities/Planets");
const Planet_1 = require("../typedefs/Planet");
exports.GET_ALL_PLANETS = {
    type: new graphql_1.GraphQLList(Planet_1.PlanetType),
    resolve() {
        return Planets_1.Planets.find();
    },
};
exports.GET_PLANET = {
    type: Planet_1.PlanetType,
    args: {
        id: { type: graphql_1.GraphQLID },
    },
    resolve(parent, args) {
        const { id } = args;
        return Planets_1.Planets.findOne(id);
    },
};
exports.GET_PLANET_BY_NAME = {
    type: Planet_1.PlanetType,
    args: {
        name: { type: graphql_1.GraphQLString },
    },
    resolve(parent, args) {
        const { name } = args;
        return Planets_1.Planets.findOne({ where: { planet: name } });
    },
};
