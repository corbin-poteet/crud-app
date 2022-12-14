"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_ALL_SYSTEMS = void 0;
const Systems_1 = require("./../../entities/Systems");
const graphql_1 = require("graphql");
const System_1 = require("../typedefs/System");
exports.GET_ALL_SYSTEMS = {
    type: new graphql_1.GraphQLList(System_1.SystemType),
    resolve() {
        return Systems_1.Systems.find();
    },
};
